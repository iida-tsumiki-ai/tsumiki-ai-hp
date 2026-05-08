/**
 * note 記事「Lv2講座 — 活用を広げる」用 本文中スライド画像
 * 1280×720（16:9）/ シリーズ「ツミキAI 経営者講座」
 */
import type { Slide } from "./slides-roadmap.ts";

export const slides: Slide[] = [
  {
    slug: "00-title-cover",
    layout: "section-cover",
    title: "Lv2講座<br>活用を広げる",
    lead: "「会話するだけのAI」から「仕事を動かすAI」へ",
    position: 2,
  },
  {
    slug: "01-lv2-card",
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
  {
    slug: "02-quote-not-skill-but-spread",
    layout: "quote",
    preLine: "Lv2の壁",
    quote: "「使い方」ではなく、<br>「広げ方」にある。",
    attribution: "個人の習熟度を上げても、業務の流れは変わらない",
  },
  {
    slug: "03-checklist-4-blocks",
    layout: "checklist",
    title: "Lv2でやることは、4ブロック",
    subtitle: "DX領域の総仕上げ。順番に意味がある",
    numberStyle: "decimal",
    items: [
      "<strong>全社底上げ</strong> — 持ち回り型の社内勉強会で「触る人」を増やす",
      "<strong>情報置き場の共通化</strong> — 命名規則・権限設計で「Aさんしか知らない」を消す",
      "<strong>業務棚卸し</strong> — やめる／AIに任せる／人がやる の3分類を経営判断する",
      "<strong>ミニアプリ内製</strong> — GAS / Power Automate で 3本作る",
    ],
  },
  {
    slug: "04-checklist-study-format",
    layout: "checklist",
    title: "持ち回り型 社内AI勉強会の型",
    subtitle: "外部講師は呼ばない。30分・隔週で続ける",
    numberStyle: "decimal",
    items: [
      "<strong>毎週 or 隔週で 30分</strong>、小さく続ける",
      "<strong>発表者は持ち回り</strong>。先行チームから始める",
      "<strong>テーマは「自分が今週AIで楽になった1つのこと」</strong>に絞る",
      "発表者が実演 → 参加者は来週試す → 結果を次回話す",
    ],
  },
  {
    slug: "05-checklist-folder-rules",
    layout: "checklist",
    title: "情報置き場の共通化 3ステップ",
    subtitle: "「アクセスできる」と「整理されている」は別物",
    numberStyle: "decimal",
    items: [
      "<strong>命名規則を1ページで決める</strong> — フォルダ名・ファイル名・「最終版」禁止",
      "<strong>権限設計を見直す</strong> — 部門単位の基本権限を決め、共有ドライブで運用",
      "<strong>ガイドラインを先に公開する</strong> — 古いファイルの整理は後回し OK",
    ],
  },
  {
    slug: "06-checklist-3-buckets",
    layout: "checklist",
    title: "業務棚卸し：3分類",
    subtitle: "経営者主導でやる。担当者は「やめる」を提案しづらい",
    numberStyle: "decimal",
    items: [
      "<strong>やめる</strong> — 「これ、やめたら何か困ることが起きるか？」（最優先）",
      "<strong>AIに任せる</strong> — 「これ、毎回同じパターンで動いているか？」",
      "<strong>人がやる</strong> — 「これ、文脈・判断・関係性が必要か？」",
    ],
  },
  {
    slug: "07-quote-stop-first",
    layout: "quote",
    preLine: "業務棚卸しの優先順位",
    quote: "自動化するより、<br>やめる方が何倍も効果が高い。",
    attribution: "やめると、その業務が「消える」から",
  },
  {
    slug: "08-checklist-3-judge-axis",
    layout: "checklist",
    title: "「AIに任せる」と「人がやる」の境界",
    subtitle: "迷ったら、3つの観点で判断する",
    numberStyle: "decimal",
    items: [
      "<strong>重複度</strong> — 同じパターンで何度も繰り返されているか（多 → AI）",
      "<strong>生成性</strong> — 毎回ゼロから作るか、前回ベース＋差分か（差分 → AI）",
      "<strong>現場タッチの必要性</strong> — 物理現場や信頼関係が必要か（必要 → 人）",
    ],
  },
  {
    slug: "09-checklist-3-patterns",
    layout: "checklist",
    title: "ミニアプリ内製：3つの定番パターン",
    subtitle: "GAS（GWS）／ Power Automate（MS365）で3本作る",
    numberStyle: "decimal",
    items: [
      "<strong>集計</strong> — 分散したデータを1箇所に集めて自動レポート化",
      "<strong>通知</strong> — イベント発生時に関係者へ自動通知（フォーム→メール 等）",
      "<strong>転記</strong> — システム間の二重入力を自動化（最も効果が出やすい）",
    ],
  },
  {
    slug: "10-checklist-5-items",
    layout: "checklist",
    title: "Lv3到達 — 5項目チェックリスト",
    subtitle: "4項目以上にチェック → Lv3講座へ進む合図",
    numberStyle: "decimal",
    items: [
      "AIを使う社員が全社レベルで底上げされている",
      "情報置き場が共通化されている（命名規則・権限設計が運用）",
      "業務棚卸しが経営判断レベルで完了している",
      "社内でミニアプリ・自動化を3本以上内製できた",
      "基幹系の限界が経営者の目に見えてきた",
    ],
  },
  {
    slug: "11-quote-paradox",
    layout: "quote",
    preLine: "DeNAパラドックス（南場智子氏）",
    quote: "部門最適化は、<br>全社最適を生まない。",
    attribution: "個別の改善を積み上げても、部門間の「つなぎ目」は残ったまま",
  },
  {
    slug: "12-quote-ai-management",
    layout: "quote",
    preLine: "AI力 ＝ マネジメント力",
    quote: "思考を AI に任せるな、<br>作業を任せろ。",
    attribution: "「具体的に・測定可能に」指示できる人が、AIを使いこなせる",
  },
  {
    slug: "13-quote-graduation",
    layout: "quote",
    preLine: "ツミキAIからの約束",
    quote: "私たちは、<br>卒業前提で伴走します。",
    attribution: "— 半年（180日）で自走に到達することがゴール",
  },
  {
    slug: "14-cta-next-step",
    layout: "cta",
    headline: "Lv2 を抜けたら、<br>次は Lv3（戦略を描く）へ。",
    subline: "1段ずつ、着実に。AI駆動経営へ。",
    ctas: [
      { level: 1, label: "無料DX診断", sub: "10問・3分" },
      { level: 2, label: "Lv3講座を読む", sub: "戦略を描く" },
      { level: 3, label: "無料個別相談", sub: "30分・代表が直接" },
    ],
  },
];

export const slideSlugs = slides.map((s) => s.slug);
