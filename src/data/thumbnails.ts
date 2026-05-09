/**
 * note 記事サムネ画像のバリアント定義
 * 1280×670（note OGP 1.91:1）/ シリーズ「ツミキAI 経営者講座」
 *
 * 使い方:
 *   - /thumbnail-preview/[variant]/ で個別レンダリング → headless Chrome で PNG 化
 *   - /thumbnail-preview/ で全6バリアント縦積みプレビュー
 *
 * ====================================================================
 *  📝 新しい講座が増えたとき / コピーを変えたいときは
 *      下の `variantContent` だけ編集すれば OK。
 *      （level ラベル / 積み木の点灯状態 / ボトムストリップ文字列は
 *        `lvDefaults` で自動的に決まる）
 * ====================================================================
 */

export type ThumbnailVariant =
  | "roadmap"
  | "roadmap-v2"
  | "lv1"
  | "lv2"
  | "lv3"
  | "lv4"
  | "gws-invoice"
  | "gws-drive"
  | "gws-calendar";

/** ブロックの状態（積み木4段の各段の見え方）*/
export type BlockState = "lit" | "faded" | "overview";

export interface ThumbnailConfig {
  levelLabel: string;
  /** メインタイトル（HTML 文字列、<br> 等可）*/
  title: string;
  subtitle: string;
  /** ボトムストリップ左の <strong> 部分 */
  stripMeta: string;
  /** Lv4(上) → Lv3 → Lv2 → Lv1(下) の順番でブロック状態を指定 */
  blocks: [BlockState, BlockState, BlockState, BlockState];
  /**
   * "punch" だと punchPre を表示し title 内 .hl を accent-soft 蛍光ペン化、
   * フォントサイズも調整（roadmap-v2 専用）。デフォルトは "normal"。
   */
  variantStyle?: "normal" | "punch";
  /** punch 用のリード文（タイトル直前）*/
  punchPre?: string;
}

// ────────────────────────────────────────────────────────────────────
// 👇 ここを編集する（タイトル / サブタイトル / punch リード文 のみ）
// ────────────────────────────────────────────────────────────────────

interface VariantContent {
  title: string;
  subtitle: string;
  /** roadmap-v2 のような特殊レイアウトで使う場合のみ */
  variantStyle?: "normal" | "punch";
  /** punch 用リード文（HTML 可）*/
  punchPre?: string;
}

const variantContent: Record<ThumbnailVariant, VariantContent> = {
  roadmap: {
    title: "AI駆動経営<br>ロードマップ講座",
    subtitle: "4ステージで読み解く、AI駆動経営の全体像",
  },
  "roadmap-v2": {
    title: '<span class="hl">AI駆動経営</span>で<br>先に着く',
    subtitle: "中小企業のための4ステージ・ロードマップ",
    variantStyle: "punch",
    punchPre: 'DXで遅れた会社<span class="punch-emph">こそ、</span>',
  },
  lv1: {
    title: "AI駆動経営<br>Lv1講座",
    subtitle: "① 土台を組む — システムはあるのに、繋がっていない会社へ",
  },
  lv2: {
    title: "AI駆動経営<br>Lv2講座",
    subtitle: "② 活用を広げる — 「会話するだけのAI」から「仕事を動かすAI」へ",
  },
  lv3: {
    title: "AI駆動経営<br>Lv3講座",
    subtitle: "③ 戦略を描く — 個別効率化の先にある、経営そのものの転換",
  },
  lv4: {
    title: "AI駆動経営<br>Lv4講座",
    subtitle: "④ AIネイティブになる — AI内製で、進化し続ける会社",
  },
  "gws-invoice": {
    title: "請求書PDFは、<br>もう開かなくていい。",
    subtitle: "Google Workspace Studio で『電帳法対応の自動台帳』を作る",
  },
  "gws-drive": {
    title: "『あの資料どこ？』<br>が消える日。",
    subtitle: "Google Drive を AI が探せる状態に整える30分リファクタ",
  },
  "gws-calendar": {
    title: "経営者の『1週間』を<br>AI が映し出す。",
    subtitle: "Google Calendar × Gemini で回す金曜30分の週次レビュー",
  },
};

// ────────────────────────────────────────────────────────────────────
// 👇 ここから下は構造のデフォルト。基本いじらない。
//    （新しい Lv が増えたら新しい variantKey と一緒に追加する）
// ────────────────────────────────────────────────────────────────────

interface VariantDefaults {
  levelLabel: string;
  stripMeta: string;
  blocks: [BlockState, BlockState, BlockState, BlockState];
}

const variantDefaults: Record<ThumbnailVariant, VariantDefaults> = {
  roadmap: {
    levelLabel: "ROADMAP",
    stripMeta: "全Lv共通",
    blocks: ["overview", "overview", "overview", "overview"],
  },
  "roadmap-v2": {
    levelLabel: "ROADMAP",
    stripMeta: "全Lv共通",
    blocks: ["overview", "overview", "overview", "overview"],
  },
  lv1: {
    levelLabel: "Lv1",
    stripMeta: "① 土台を組む（DX領域）",
    blocks: ["faded", "faded", "faded", "lit"],
  },
  lv2: {
    levelLabel: "Lv2",
    stripMeta: "② 活用を広げる（DX領域）",
    blocks: ["faded", "faded", "lit", "lit"],
  },
  lv3: {
    levelLabel: "Lv3",
    stripMeta: "③ 戦略を描く（AI領域）",
    blocks: ["faded", "lit", "lit", "lit"],
  },
  lv4: {
    levelLabel: "Lv4",
    stripMeta: "④ AIネイティブになる（AI領域）",
    blocks: ["lit", "lit", "lit", "lit"],
  },
  "gws-invoice": {
    levelLabel: "Lv1",
    stripMeta: "明日から使える GWS×Gemini ①",
    blocks: ["faded", "faded", "faded", "lit"],
  },
  "gws-drive": {
    levelLabel: "Lv1",
    stripMeta: "明日から使える GWS×Gemini ②",
    blocks: ["faded", "faded", "faded", "lit"],
  },
  "gws-calendar": {
    levelLabel: "Lv1",
    stripMeta: "明日から使える GWS×Gemini ③",
    blocks: ["faded", "faded", "faded", "lit"],
  },
};

export const allVariants: ThumbnailVariant[] = [
  "roadmap",
  "roadmap-v2",
  "lv1",
  "lv2",
  "lv3",
  "lv4",
  "gws-invoice",
  "gws-drive",
  "gws-calendar",
];

/** content と defaults をマージした最終 config（コンポーネントから読む）*/
export const thumbnailConfigs: Record<ThumbnailVariant, ThumbnailConfig> =
  Object.fromEntries(
    allVariants.map((v) => [v, { ...variantDefaults[v], ...variantContent[v] }]),
  ) as Record<ThumbnailVariant, ThumbnailConfig>;
