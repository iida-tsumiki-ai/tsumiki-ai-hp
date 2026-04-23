/**
 * 10マス商品モデル データ定義
 * 出典:
 *   共有ドライブ/ツミキAI/01_マーケティング/商品設計・HPリニューアル/02_商品戦略_10マスモデル.md
 *   （2026-04-22 / 5講座体制確定版）
 *
 * 構造: 4ステージ × 3形態 = 12マス
 *   - うち ❹AIネイティブ × 研修 = OBコミュニティ（販売なし）
 *   - 実販売マス = 11、主力3マス（★）= Lv1講座 / 合同セミナー / B伴走
 *   - ロードマップ講座（無料）は10マス外の共通入口
 */

export type Form = "course" | "training" | "support";
export type Stage = 1 | 2 | 3 | 4;

export const stageLabels: Record<Stage, { short: string; full: string }> = {
  1: { short: "❶知る", full: "❶ 現在地を知る" },
  2: { short: "❷広げる", full: "❷ 活用を広げる" },
  3: { short: "❸描く", full: "❸ 戦略を描く" },
  4: { short: "❹AIネイティブ", full: "❹ AIネイティブになる" },
};

export const formLabels: Record<Form, { label: string; equation: string }> = {
  course: { label: "講座", equation: "一人で作る" },
  training: { label: "研修", equation: "チームで作る" },
  support: { label: "伴走", equation: "一緒に作る" },
};

export type ProductCell = {
  stage: Stage;
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
  /* ❶ 現在地を知る */
  {
    stage: 1,
    form: "course",
    name: "Lv1講座",
    price: "¥3,000",
    priceNote: "GWS版 / MS365版",
    description: "何から始めるかを言語化。Lv2到達チェックリスト付き（note有料）",
    href: "/courses/lv1/",
    isFlagship: true,
  },
  {
    stage: 1,
    form: "training",
    name: "❶入門コース",
    price: "¥10万 / 半日",
    description: "Claude・ChatGPT基礎＋個人プロンプト集（チーム開催）",
    href: "/training/#stage1-training",
    isOz: true,
  },
  {
    stage: 1,
    form: "support",
    name: "❶初期導入伴走",
    price: "月 ¥20万〜",
    description: "アカウント配布・初期学習設計を一緒に作る",
    href: "/support/#stage1-onboarding",
    isOz: true,
  },

  /* ❷ 活用を広げる */
  {
    stage: 2,
    form: "course",
    name: "Lv2講座",
    price: "¥3,000",
    priceNote: "GWS版 / MS365版",
    description: "自分の業務プロンプト集をデイトラ式で作る",
    href: "/courses/lv2/",
    isOz: true,
  },
  {
    stage: 2,
    form: "training",
    name: "❷実践コース",
    price: "¥25万 / 日",
    description: "チーム共通プロンプト＋GAS入門",
    href: "/training/#stage2-training",
    isOz: true,
  },
  {
    stage: 2,
    form: "support",
    name: "❷広げる伴走",
    price: "月 ¥20万〜",
    description: "業務フロー棚卸し＋AI適用候補の洗い出し",
    href: "/support/#stage2-support",
    isOz: true,
  },

  /* ❸ 戦略を描く */
  {
    stage: 3,
    form: "course",
    name: "Lv3講座",
    price: "¥3,000",
    priceNote: "共通版（合同セミナー副読本）",
    description: "基幹系ツール再選定・組織役割設計の視点整理",
    href: "/courses/lv3/",
    isOz: true,
  },
  {
    stage: 3,
    form: "training",
    name: "経営者合同セミナー",
    price: "¥50万 / 日",
    priceNote: "¥5万 × 10名",
    description: "1日で「この四半期はここに投資する」を作る",
    href: "/seminar/",
    isFlagship: true,
  },
  {
    stage: 3,
    form: "support",
    name: "❸描く伴走",
    price: "月 ¥20万〜",
    description: "社外CTOとして戦略設計フェーズを伴走",
    href: "/support/#stage3-support",
    isOz: true,
  },

  /* ❹ AIネイティブになる */
  {
    stage: 4,
    form: "course",
    name: "Lv4講座",
    price: "¥3,000",
    priceNote: "共通版・B伴走事例集",
    description: "B伴走卒業生インタビュー集。副読本として機能",
    href: "/courses/lv4/",
    isOz: true,
  },
  {
    stage: 4,
    form: "training",
    name: "OBコミュニティ",
    price: "販売なし",
    description: "B伴走卒業者向けの OB勉強会・スポット相談権",
    href: "",
    isUnavailable: true,
  },
  {
    stage: 4,
    form: "support",
    name: "B伴走支援",
    price: "月 ¥20〜30万",
    priceNote: "半年〜1年で卒業",
    description: "社外CTOとして戦略→実装→運用→卒業まで一気通貫",
    href: "/support-b/",
    isFlagship: true,
  },
];

/* 10マス外：共通入口（ロードマップ講座 無料） */
export const roadmapCourse = {
  name: "ロードマップ講座",
  price: "無料",
  priceNote: "全Lv共通",
  description:
    "DX診断→各Lv講座への地図。4ステージで自社の次の一手を見つける（note無料記事）",
  href: "/courses/roadmap/",
};
