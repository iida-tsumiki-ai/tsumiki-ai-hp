/**
 * note 記事「ロードマップ講座」用 本文中スライド画像
 * 1280×720（16:9）/ シリーズ「ツミキAI 経営者講座」
 *
 * 使い方:
 *   - /slide-preview/[slug]/ で個別レンダリング → headless Chrome で PNG 化
 *   - /slide-preview/ で全スライド縦積みプレビュー
 *
 * ====================================================================
 *  📝 スライド追加・編集時は下の `slides` 配列だけ編集すれば OK。
 *      レイアウト構造は SlideCard.astro 側で完結。
 * ====================================================================
 */

export type SlideLayout =
  | "section-cover"
  | "lv-card"
  | "compare-4"
  | "quote"
  | "checklist"
  | "cta";

interface SlideBase {
  /** ファイル名・URL に使う一意キー（例: 01-quote-no-speed）*/
  slug: string;
  layout: SlideLayout;
}

/** Type A: 章扉 — 番号 + タイトル + リード */
export interface SectionCoverSlide extends SlideBase {
  layout: "section-cover";
  /** "❶" "❷" "❸" "❹" or "0." 等。空可 */
  number?: string;
  title: string;
  lead?: string;
  /** 右下の積み木スタックで現在地を示す（1-4 / 0=全段表示）*/
  position?: 0 | 1 | 2 | 3 | 4;
}

/** Type B: Lv 定義 — 状態キャッチ + 取り組み3つ + 積み木 */
export interface LvCardSlide extends SlideBase {
  layout: "lv-card";
  lv: 1 | 2 | 3 | 4;
  /** "土台を組む" 等の短い見出し */
  lvTitle: string;
  /** "システムはあるのに、繋がっていない会社" 等 */
  catchPhrase: string;
  /** 取り組み3つ（このLvで何をやるか）*/
  actions: string[];
}

/** Type C: 4ステージ比較 — タイトル + 4 行（Lv ごとに 1 メッセージ）*/
export interface Compare4Slide extends SlideBase {
  layout: "compare-4";
  title: string;
  subtitle?: string;
  rows: Array<{
    lv: 1 | 2 | 3 | 4;
    /** "❶ 土台を組む" のような左ラベル */
    label: string;
    /** 1 行のメッセージ */
    message: string;
  }>;
}

/** Type D: 引用宣言 — 中央大文字 */
export interface QuoteSlide extends SlideBase {
  layout: "quote";
  /** 引用前の前置き（小文字 / 例: "ツミキAI からの宣言"）*/
  preLine?: string;
  /** メイン引用（HTML 可 / <br> 等）*/
  quote: string;
  /** 出典・補足（例: "— ある経営者向け YouTube 動画より"）*/
  attribution?: string;
}

/** Type E: チェックリスト — タイトル + 4-5 項目 */
export interface ChecklistSlide extends SlideBase {
  layout: "checklist";
  title: string;
  subtitle?: string;
  /** 各項目（HTML 可 / <strong> 等）*/
  items: string[];
  /** 番号スタイル: "Q1/Q2..." or "①②..." or "01/02..." */
  numberStyle?: "q" | "circle" | "decimal";
}

/** Type F: CTA — 主メッセージ + 3 段 CTA */
export interface CtaSlide extends SlideBase {
  layout: "cta";
  headline: string;
  subline?: string;
  ctas: Array<{
    /** L1: 診断 / L2: 講座 / L3: 個別相談 */
    level: 1 | 2 | 3;
    label: string;
    sub?: string;
  }>;
}

export type Slide =
  | SectionCoverSlide
  | LvCardSlide
  | Compare4Slide
  | QuoteSlide
  | ChecklistSlide
  | CtaSlide;

// ────────────────────────────────────────────────────────────────────
// 👇 ロードマップ講座のスライド 17枚
//    note 記事内の【画像差込】マーカーと slug が 1:1 対応
// ────────────────────────────────────────────────────────────────────

export const slides: Slide[] = [
  // 00. 記事冒頭の章扉
  {
    slug: "00-title-cover",
    layout: "section-cover",
    title: "ロードマップ講座",
    lead: "中小企業のための、4ステージで読み解くAI駆動経営の全体像",
    position: 0,
  },

  // 01. 導入: 速さで戦わない宣言
  {
    slug: "01-quote-no-speed",
    layout: "quote",
    preLine: "ツミキAIからの宣言",
    quote: "私たちは、<br>速さで戦いません。",
    attribution: "「最短で」「速攻で」「短期間で劇的に」を、私たちは使わない",
  },

  // 02. ❶章扉 4ステージの地図
  {
    slug: "02-cover-stage-map",
    layout: "section-cover",
    number: "❶",
    title: "4ステージの地図",
    lead: "中小企業のAI活用を、4つの段階で整理する",
    position: 0,
  },

  // 03. 4ステージ概観
  {
    slug: "03-stages-overview",
    layout: "compare-4",
    title: "AI駆動経営の4ステージ",
    subtitle: "DX領域 → AI領域へ続く、一直線の連続体",
    rows: [
      { lv: 1, label: "❶ 土台を組む", message: "システムはあるのに、繋がっていない会社" },
      { lv: 2, label: "❷ 活用を広げる", message: "「会話するだけのAI」から「仕事を動かすAI」へ" },
      { lv: 3, label: "❸ 戦略を描く", message: "個別効率化の先にある、経営そのものの転換" },
      { lv: 4, label: "❹ AIネイティブ", message: "AI内製で、進化し続ける会社" },
    ],
  },

  // 04. Lv1カード
  {
    slug: "04-lv1-card",
    layout: "lv-card",
    lv: 1,
    lvTitle: "土台を組む",
    catchPhrase: "システムはあるのに、繋がっていない会社",
    actions: [
      "全社員が同じクラウド基盤に乗る",
      "つなぎ目のアナログを1箇所だけ解消する",
      "AIに「要約・下書き・検索」の3つで触れる",
    ],
  },

  // 05. Lv2カード
  {
    slug: "05-lv2-card",
    layout: "lv-card",
    lv: 2,
    lvTitle: "活用を広げる",
    catchPhrase: "「会話するだけのAI」から「仕事を動かすAI」へ",
    actions: [
      "社内勉強会で「触る人」を増やす",
      "業務棚卸し（やめる／AI／人）を経営判断する",
      "ミニアプリで仕組み化を内製で積む",
    ],
  },

  // 06. Lv3カード
  {
    slug: "06-lv3-card",
    layout: "lv-card",
    lv: 3,
    lvTitle: "戦略を描く",
    catchPhrase: "個別効率化の先にある、経営そのものの転換",
    actions: [
      "基幹系をAPI／MCP対応で再選定する",
      "横断データを経営判断に常用する",
      "選定・運用・教育の役割を組織に置く",
    ],
  },

  // 07. Lv4カード
  {
    slug: "07-lv4-card",
    layout: "lv-card",
    lv: 4,
    lvTitle: "AIネイティブになる",
    catchPhrase: "AI内製で、進化し続ける会社",
    actions: [
      "新業務もAIから設計できる",
      "規模×コスト×品質のトレードオフが崩れる",
      "売上成長と人件費が比例しなくなる",
    ],
  },

  // 08. DX→AI連続体の整理
  {
    slug: "08-quote-dx-bridge",
    layout: "quote",
    preLine: "DX→AI駆動経営の連続体",
    quote: "DXは入口、<br>AI駆動経営は出口。",
    attribution: "❶❷ = DX領域 ／ ❸❹ = AI領域",
  },

  // 09. Lv到達時の経営インパクト
  {
    slug: "09-impact-by-stage",
    layout: "compare-4",
    title: "Lv到達時の経営インパクト",
    subtitle: "1段ずつ積み上がる、累積効果",
    rows: [
      { lv: 1, label: "❶ 土台を組む", message: "バックオフィス工数 10–20% 削減" },
      { lv: 2, label: "❷ 活用を広げる", message: "部門単位で 20–40% 削減" },
      { lv: 3, label: "❸ 戦略を描く", message: "経営判断の質とスピードが変わる" },
      { lv: 4, label: "❹ AIネイティブ", message: "売上成長と人件費が比例しなくなる" },
    ],
  },

  // 10. 中小企業を勇気づける逆説
  {
    slug: "10-quote-leapfrog",
    layout: "quote",
    preLine: "中小企業を勇気づける逆説",
    quote: "DXで遅れた会社<span class=\"hl\">こそ、</span><br>AI駆動経営で先に着く。",
    attribution: "— レガシーSaaS資産がない、という強み",
  },

  // 11. 半年で自走できる時間軸
  {
    slug: "11-six-month-schedule",
    layout: "compare-4",
    title: "半年で自走できる時間軸",
    subtitle: "180日 → AI内製化の自走へ",
    rows: [
      { lv: 1, label: "Lv1 30日 / 累計30日", message: "基盤導入 + つなぎ目1箇所自動化" },
      { lv: 2, label: "Lv2 30日 / 累計60日", message: "業務棚卸し + ミニアプリ3本" },
      { lv: 3, label: "Lv3 90日 / 累計150日", message: "基幹系再選定 + 内製化体験1業務" },
      { lv: 4, label: "Lv4 30日体感 / 180日", message: "全員がAI部下を使いこなす状態" },
    ],
  },

  // 12. 5問診断
  {
    slug: "12-checklist-5-questions",
    layout: "checklist",
    title: "自社のLvを特定する5問",
    subtitle: "YES/NO で答えるだけ。30秒で終わります。",
    numberStyle: "q",
    items: [
      "全社員が同じクラウド基盤（GWS or MS365）にアカウントを持っているか？",
      "AIを要約・下書き・検索のいずれかで週1回以上使う社員が3人以上いるか？",
      "業務棚卸し（やめる／AIに任せる／人がやる）が経営として完了しているか？",
      "基幹系のAPI／MCP対応の方針が経営判断として持てているか？",
      "新しい業務を社内で内製してAIに組み込めているか？",
    ],
  },

  // 13. Lv1経営者が踏む4つの地雷
  {
    slug: "13-checklist-4-mines",
    layout: "checklist",
    title: "Lv1経営者が踏む4つの地雷",
    subtitle: "進む前に、1つずつ予防接種をしておく",
    numberStyle: "decimal",
    items: [
      "<strong>60ライセンス問題</strong> — 全社一斉導入で年¥1,080,000が宙に浮く",
      "<strong>PoC死</strong> — 試して満足、本番運用に展開しない",
      "<strong>現場拒否</strong> — 「忙しい」「年配が嫌がる」「業務が特殊」の3抵抗",
      "<strong>ROI不明</strong> — 経営の言葉に翻訳できず、時短だけ語る",
    ],
  },

  // 14. AIソムリエになるな
  {
    slug: "14-quote-ai-sommelier",
    layout: "quote",
    preLine: "経営者が最も避けるべき罠",
    quote: "AIソムリエに<br>なるな。",
    attribution: "— ツール導入そのものを目的化しない",
  },

  // 15. 卒業前提で伴走
  {
    slug: "15-quote-graduation",
    layout: "quote",
    preLine: "ツミキAIからの約束",
    quote: "私たちは、<br>卒業前提で伴走します。",
    attribution: "— 半年（180日）で自走に到達することがゴール",
  },

  // 16. 最終CTA
  {
    slug: "16-cta-next-step",
    layout: "cta",
    headline: "1段ずつ、着実に。<br>AI駆動経営へ。",
    subline: "まずは無料DX診断から。10問・3分で現在地が分かります。",
    ctas: [
      { level: 1, label: "無料DX診断", sub: "10問・3分" },
      { level: 2, label: "該当Lv講座を読む", sub: "180分・3部構成" },
      { level: 3, label: "無料個別相談", sub: "30分・代表が直接" },
    ],
  },
];

export const slideSlugs = slides.map((s) => s.slug);
