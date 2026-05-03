/**
 * 商品ポートフォリオ データ定義（3カテゴリ × 4ステージ）
 * 出典:
 *   共有ドライブ/ツミキAI/01_マーケティング/商品設計・HPリニューアル/01_商品戦略_ポートフォリオ全体.md
 *   （2026-04-24 / 案X: 使い手3カテゴリ軸に再編）
 *
 * 構造: 3カテゴリ（A.経営者が先に学ぶ / B.組織に入れる / C.一緒に実行する）× 4ステージ
 *   - A: 経営者本人が使う（講座形態 + 集合学習形態）= 6商品
 *   - B: 担当者チームが使う（研修形態）= 2商品（❶❷のみ / ❸❹は空）
 *   - C: 経営者+現場が使う（伴走形態）= 1商品（AI駆動経営伴走支援 / Lv1-Lv4 を1サービスでカバー）
 *   - 共通入口: ロードマップ講座（無料）／AI駆動経営診断（無料）
 *   - 主力2マス（★）= Lv1講座（A）/ AI駆動経営伴走支援（C）
 *
 * C統合の経緯（2026-04-28）:
 *   旧4商品（❶初期導入伴走 / ❷広げる伴走 / ❸描く伴走 / B伴走）は
 *   「社外CTOとして伴走」という役務が同一で、Lv/フェーズに応じて進め方が変わるだけだった。
 *   そのため案αとして1商品「AI駆動経営伴走支援」に統合し、フェーズ別進め方は
 *   サービス内ドキュメントで説明する方針に変更。
 *
 * 経営者合同セミナー外出し（2026-05-03）:
 *   経営者合同セミナーは商品ラインナップから外出し（スポット企画扱い）。
 *   今後の企画化検討余地として情報は戦略ドキュメント側に保持。
 *   主力は「Lv1講座」「AI駆動経営伴走支援」の2マスに整理。
 *   Lv3講座は「合同セミナー副読本」から「AI駆動経営伴走支援（戦略再設計フェーズ）への副読本」に再定義。
 *
 * OBコミュニティ ラインナップから削除（2026-05-03）:
 *   OBコミュニティは商品ラインナップとしては販売予定がないため削除。
 *   伴走支援の「卒業後フォロー」訴求は support/index.astro 等で別途継続保持。
 */

export type Category = "learn" | "deploy" | "execute";
export type Form = "course" | "training" | "support";
export type Stage = 1 | 2 | 3 | 4;

export const stageLabels: Record<Stage, { short: string; full: string; num: string }> = {
  1: { short: "Lv.1 土台", full: "Lv.1 土台を組む", num: "01" },
  2: { short: "Lv.2 広げる", full: "Lv.2 活用を広げる", num: "02" },
  3: { short: "Lv.3 描く", full: "Lv.3 戦略を描く", num: "03" },
  4: { short: "Lv.4 ネイティブ", full: "Lv.4 AIネイティブになる", num: "04" },
};

export const categoryLabels: Record<
  Category,
  {
    label: string;
    short: string;
    user: string;
    userIcon: string;
    effect: string;
    tagline: string;
    forms: string;
    priceRange: string;
    hubHref: string;
    hubLabel: string;
  }
> = {
  learn: {
    label: "A. 経営者が先に学ぶ",
    short: "学ぶ",
    user: "経営者本人",
    userIcon: "A",
    effect: "地図を持つ／視野を広げる",
    tagline: "解像度が上がり、次の一手を自分で選べる",
    forms: "講座（経営者一人で）／集合学習（経営者同士）",
    priceRange: "無料〜¥5万",
    hubHref: "/courses/",
    hubLabel: "講座シリーズを見る",
  },
  deploy: {
    label: "B. 組織に入れる",
    short: "入れる",
    user: "担当者チーム",
    userIcon: "B",
    effect: "組織に共通言語が入る",
    tagline: "現場が自走できる状態になる",
    forms: "研修（チーム集合）",
    priceRange: "¥10〜25万",
    hubHref: "/training/",
    hubLabel: "研修を見る",
  },
  execute: {
    label: "C. 一緒に実行する",
    short: "実行する",
    user: "経営者+現場×ツミキAI",
    userIcon: "C",
    effect: "業務そのものを変える",
    tagline: "内製化の型が会社に残る",
    forms: "伴走（プロジェクト）",
    priceRange: "月¥10〜30万",
    hubHref: "/support/",
    hubLabel: "AI駆動経営伴走支援を見る",
  },
};

export const formLabels: Record<Form, { label: string; equation: string }> = {
  course: { label: "講座", equation: "一人で作る" },
  training: { label: "研修", equation: "集まって作る" },
  support: { label: "伴走", equation: "一緒に作る" },
};

export type ProductCell = {
  stage: Stage;
  /** stage と stageEnd で範囲を表す。stageEnd 省略時は stage と同じ（単一セル）。 */
  stageEnd?: Stage;
  category: Category;
  form: Form;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  href: string;
  isFlagship?: boolean;
  isOz?: boolean;
  isUnavailable?: boolean;
};

export const productCells: ProductCell[] = [
  /* ===== A. 経営者が先に学ぶ（経営者本人）===== */

  /* ❶ 土台を組む */
  {
    stage: 1,
    category: "learn",
    form: "course",
    name: "Lv1講座",
    price: "メンバーシップ",
    priceNote: "月¥3,000で全Lv読み放題 / GWS版・MS365版",
    description: "何から始めるかを言語化。Lv2到達チェックリスト付き（note メンバーシップ）",
    href: "/courses/lv1/",
    isFlagship: true,
  },
  /* ❷ 活用を広げる */
  {
    stage: 2,
    category: "learn",
    form: "course",
    name: "Lv2講座",
    price: "メンバーシップ",
    priceNote: "月¥3,000で全Lv読み放題 / GWS版・MS365版",
    description: "AI活用底上げ・業務棚卸し・ミニアプリの型を手に入れる",
    href: "/courses/lv2/",
    isOz: true,
  },
  /* ❸ 戦略を描く（講座） */
  {
    stage: 3,
    category: "learn",
    form: "course",
    name: "Lv3講座",
    price: "メンバーシップ",
    priceNote: "月¥3,000で全Lv読み放題 / 共通版（伴走支援副読本）",
    description: "基幹系ツール再選定・組織役割設計の視点整理",
    href: "/courses/lv3/",
    isOz: true,
  },
  /* ❹ AIネイティブ（講座） */
  {
    stage: 4,
    category: "learn",
    form: "course",
    name: "Lv4講座",
    price: "メンバーシップ",
    priceNote: "月¥3,000で全Lv読み放題 / 共通版・伴走支援事例集",
    description: "AI駆動経営伴走支援から自走したOBインタビュー集。副読本として機能",
    href: "/courses/lv4/",
    isOz: true,
  },
  /* ===== B. 組織に入れる（担当者チーム / ❶❷のみ）===== */

  /* ❶ 土台を組む */
  {
    stage: 1,
    category: "deploy",
    form: "training",
    name: "❶入門研修",
    price: "¥10万 / 半日",
    description: "Claude・ChatGPT基礎＋個人プロンプト集（チーム集合受講）",
    href: "/training/#stage1-training",
    isOz: true,
  },
  /* ❷ 活用を広げる */
  {
    stage: 2,
    category: "deploy",
    form: "training",
    name: "❷実践研修",
    price: "¥25万 / 日",
    description: "チーム共通プロンプト＋GAS入門（チーム集合受講）",
    href: "/training/#stage2-training",
    isOz: true,
  },
  /* ❸ 戦略を描く（2026-05-03 新設） */
  {
    stage: 3,
    category: "deploy",
    form: "training",
    name: "❸戦略実装研修",
    price: "¥50万 / 2日",
    priceNote: "担当者向け技術ハンズオン+管理者限定セッション",
    description:
      "Claude Code・API・MCP の実装研修＋管理者限定の組織設計／インセンティブ設計セッション込み（2日構成）",
    href: "/training/#stage3-training",
    isOz: true,
  },

  /* ===== C. 一緒に実行する（経営者+現場）===== */

  /* AI駆動経営伴走支援（Lv1-Lv4 を1サービスでカバー / 主力3マス） */
  {
    stage: 1,
    stageEnd: 4,
    category: "execute",
    form: "support",
    name: "AI駆動経営伴走支援",
    price: "月 ¥10〜30万",
    priceNote: "半年で自走 / Lv1-Lv4 共通",
    description:
      "社外CTOとして、戦略・実装・運用・自走まで段階的に伴走します。Lv1なら導入設計、Lv2なら業務棚卸し、Lv3なら基幹再設計、Lv4なら自律運用へ──現在地に応じた進め方で、内製化の型を会社に残します。",
    href: "/support/",
    isFlagship: true,
  },
];

/* 共通入口1: ロードマップ講座（無料 / カテゴリAの入口） */
export const roadmapCourse = {
  name: "ロードマップ講座",
  price: "無料",
  priceNote: "全Lv共通 / カテゴリA入口",
  description:
    "AI駆動経営診断→各Lv講座への地図。4ステージで自社の次の一手を見つける（note無料記事）",
  href: "/courses/roadmap/",
};
