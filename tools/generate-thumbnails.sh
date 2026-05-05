#!/usr/bin/env bash
# note 記事サムネ画像（1280×670）を6バリアント分一括生成
#
# 使い方:
#   ./tools/generate-thumbnails.sh                    # public/images/thumbnails/ に保存
#   ./tools/generate-thumbnails.sh /path/to/output    # 指定先に保存
#
# 前提:
#   - 既に preview server が動いていない場合は自動で起動・終了する
#   - macOS の Google Chrome を使用（Headless スクショ）
#   - python3 + Pillow が必要（2x → 1x ダウンサンプル）
#
# 仕組み:
#   1. astro build → astro preview --port 4322 を起動
#   2. /thumbnail-preview/{variant}/ を 2x 解像度 (2560×1340) でスクショ
#   3. Pillow で 1280×670 にダウンサンプル
#   4. 6ファイルを所定フォルダに保存

set -euo pipefail

PROJECT_DIR="$HOME/Projects/tsumiki-ai-hp"
OUTPUT_DIR="${1:-$PROJECT_DIR/public/images/thumbnails}"
PORT=4322
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
VARIANTS=(roadmap roadmap-v2 lv1 lv2 lv3 lv4)
TMP_DIR="$(mktemp -d)"

mkdir -p "$OUTPUT_DIR"
cd "$PROJECT_DIR"

# preview server が動いてなければ build → preview
SERVER_OWNED_BY_SCRIPT=0
if ! curl -sS -o /dev/null -w "%{http_code}" "http://localhost:$PORT/" 2>/dev/null | grep -q "200"; then
  echo "[gen] preview server を起動..."
  npm run build > /dev/null
  npx astro preview --port "$PORT" > /dev/null 2>&1 &
  SERVER_PID=$!
  SERVER_OWNED_BY_SCRIPT=1
  trap 'kill $SERVER_PID 2>/dev/null || true; rm -rf "$TMP_DIR"' EXIT
  # 起動待ち
  for _ in $(seq 1 30); do
    if curl -sS -o /dev/null -w "%{http_code}" "http://localhost:$PORT/" 2>/dev/null | grep -q "200"; then
      break
    fi
    sleep 1
  done
else
  trap 'rm -rf "$TMP_DIR"' EXIT
fi

# 各バリアントを 2x スクショ → ダウンサンプル
for v in "${VARIANTS[@]}"; do
  echo "[gen] $v ..."
  "$CHROME" \
    --headless=new \
    --hide-scrollbars \
    --force-device-scale-factor=2 \
    --window-size=1280,1340 \
    --virtual-time-budget=5000 \
    --screenshot="$TMP_DIR/$v-2x.png" \
    "http://localhost:$PORT/thumbnail-preview/$v/?t=$(date +%s)" \
    > /dev/null 2>&1

  python3 - <<EOF
from PIL import Image
src = Image.open("$TMP_DIR/$v-2x.png")
# 2x スクショは 2560×2680 想定。サムネは 1280×670 領域なので 2x で 2560×1340 を crop
cropped = src.crop((0, 0, 2560, 1340))
final = cropped.resize((1280, 670), Image.LANCZOS)
final.save("$OUTPUT_DIR/thumbnail-$v.png")
EOF
  echo "[gen]   → $OUTPUT_DIR/thumbnail-$v.png"
done

if [ "$SERVER_OWNED_BY_SCRIPT" = "1" ]; then
  echo "[gen] preview server を停止"
fi

echo "[gen] 完了: ${#VARIANTS[@]} ファイル"
ls -la "$OUTPUT_DIR/" | grep thumbnail-
