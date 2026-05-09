#!/usr/bin/env bash
# note 記事 本文中スライド画像（1280×720 / 16:9）を一括生成
#
# 使い方:
#   ./tools/generate-slides.sh                  # roadmap（既定）→ note-assets/note-slides/lv-roadmap/
#   ./tools/generate-slides.sh roadmap          # 同上
#   ./tools/generate-slides.sh lv1              # Lv1講座 → note-assets/note-slides/lv1/
#   ./tools/generate-slides.sh lv2              # Lv2講座 → note-assets/note-slides/lv2/
#   ./tools/generate-slides.sh lv3              # Lv3講座 → note-assets/note-slides/lv3/
#   ./tools/generate-slides.sh lv4              # Lv4講座 → note-assets/note-slides/lv4/
#   ./tools/generate-slides.sh lv1 /path/to/out # 出力先を上書き
#
# 前提:
#   - 既に preview server が動いていない場合は自動で起動・終了する
#   - macOS の Google Chrome を使用（Headless スクショ）
#   - python3 + Pillow が必要
#
# 仕組み:
#   1. astro build → astro preview --port 4322 を起動
#   2. /slide-preview/{article-prefix}/{slug}/ を 2x 解像度でスクショ
#   3. Pillow で crop して PNG 保存（retina 用に 2x のまま）
#   4. 出力: note-assets/note-slides/{output-subdir}/slide-{slug}.png（git 管理外）

set -euo pipefail

PROJECT_DIR="$HOME/Projects/tsumiki-ai-hp"
ARTICLE="${1:-roadmap}"
PORT=4322
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP_DIR="$(mktemp -d)"

# article ごとに data ファイル / 出力ディレクトリ / URL prefix を切替
case "$ARTICLE" in
  roadmap)
    DATA_FILE="src/data/slides-roadmap.ts"
    OUTPUT_SUBDIR="lv-roadmap"
    URL_PREFIX="slide-preview"
    ;;
  lv1)
    DATA_FILE="src/data/slides-lv1.ts"
    OUTPUT_SUBDIR="lv1"
    URL_PREFIX="slide-preview/lv1"
    ;;
  lv2)
    DATA_FILE="src/data/slides-lv2.ts"
    OUTPUT_SUBDIR="lv2"
    URL_PREFIX="slide-preview/lv2"
    ;;
  lv3)
    DATA_FILE="src/data/slides-lv3.ts"
    OUTPUT_SUBDIR="lv3"
    URL_PREFIX="slide-preview/lv3"
    ;;
  lv4)
    DATA_FILE="src/data/slides-lv4.ts"
    OUTPUT_SUBDIR="lv4"
    URL_PREFIX="slide-preview/lv4"
    ;;
  invoice)
    DATA_FILE="src/data/slides-invoice-article.ts"
    OUTPUT_SUBDIR="invoice-article"
    URL_PREFIX="slide-preview/invoice-article"
    ;;
  *)
    echo "[gen] 未知の article: $ARTICLE（roadmap | lv1 | lv2 | lv3 | lv4 | invoice のみ対応）"
    exit 1
    ;;
esac

OUTPUT_DIR="${2:-$PROJECT_DIR/note-assets/note-slides/$OUTPUT_SUBDIR}"
mkdir -p "$OUTPUT_DIR"
cd "$PROJECT_DIR"

# slug 一覧を data ファイルから取得
SLUGS=$(grep -E '^[[:space:]]*slug:[[:space:]]*"' "$DATA_FILE" | sed -E 's/.*slug:[[:space:]]*"([^"]+)".*/\1/')

if [ -z "$SLUGS" ]; then
  echo "[gen] スライドが見つかりませんでした: $DATA_FILE"
  exit 1
fi

echo "[gen] article: $ARTICLE / 出力: $OUTPUT_DIR"

# preview server が動いてなければ build → preview
SERVER_OWNED_BY_SCRIPT=0
if ! curl -sS -o /dev/null -w "%{http_code}" "http://localhost:$PORT/" 2>/dev/null | grep -q "200"; then
  echo "[gen] preview server を起動..."
  npm run build > /dev/null
  npx astro preview --port "$PORT" > /dev/null 2>&1 &
  SERVER_PID=$!
  SERVER_OWNED_BY_SCRIPT=1
  trap 'kill $SERVER_PID 2>/dev/null || true; rm -rf "$TMP_DIR"' EXIT
  for _ in $(seq 1 30); do
    if curl -sS -o /dev/null -w "%{http_code}" "http://localhost:$PORT/" 2>/dev/null | grep -q "200"; then
      break
    fi
    sleep 1
  done
else
  trap 'rm -rf "$TMP_DIR"' EXIT
fi

# 各スライドを 2x スクショ → そのまま保存
for slug in $SLUGS; do
  echo "[gen] $slug ..."
  "$CHROME" \
    --headless=new \
    --hide-scrollbars \
    --force-device-scale-factor=2 \
    --window-size=1280,1440 \
    --virtual-time-budget=5000 \
    --screenshot="$TMP_DIR/$slug-2x.png" \
    "http://localhost:$PORT/$URL_PREFIX/$slug/?t=$(date +%s)" \
    > /dev/null 2>&1

  python3 - <<EOF
from PIL import Image
src = Image.open("$TMP_DIR/$slug-2x.png")
# 2x スクショは 2560×2880 想定。スライド領域 2560×1440 を crop してそのまま保存（retina 鮮明化のため downsample しない）
cropped = src.crop((0, 0, 2560, 1440))
cropped.save("$OUTPUT_DIR/slide-$slug.png", optimize=True)
EOF
  echo "[gen]   → $OUTPUT_DIR/slide-$slug.png"
done

if [ "$SERVER_OWNED_BY_SCRIPT" = "1" ]; then
  echo "[gen] preview server を停止"
fi

echo "[gen] 完了"
ls -la "$OUTPUT_DIR/" | grep slide-
