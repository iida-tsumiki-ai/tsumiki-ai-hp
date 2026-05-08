/**
 * note 記事「Lv1講座 — 土台を組む」用 本文中スライド画像
 * 1280×720（16:9）/ シリーズ「ツミキAI 経営者講座」
 *
 * 使い方:
 *   - /slide-preview/lv1/[slug]/ で個別レンダリング → headless Chrome で PNG 化
 *   - /slide-preview/lv1/ で全スライド縦積みプレビュー
 *
 * ====================================================================
 *  📝 スライド追加・編集時は下の `slides` 配列だけ編集すれば OK。
 *      レイアウト構造は SlideCard.astro 側で完結。
 * ====================================================================
 */
import type { Slide } from "./slides-roadmap.ts";

// ────────────────────────────────────────────────────────────────────
// 👇 Lv1 講座のスライド 15枚
//    note 記事内の【画像差込】マーカーと slug が 1:1 対応
// ────────────────────────────────────────────────────────────────────

export const slides: Slide[] = [
  // 00. 章扉: Lv1講座
  {
    slug: "00-title-cover",
    layout: "section-cover",
    title: "Lv1講座<br>土台を組む",
    lead: "システムはあるのに、繋がっていない会社へ",
    position: 1,
  },

  // 01. Lv1 カード（記事の現在地を視覚化）
  {
    slug: "01-lv1-card",
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

  // 02. 1段目が、すべての土台になる
  {
    slug: "02-quote-foundation",
    layout: "quote",
    preLine: "Lv1の核",
    quote: "1段目が、<br>すべての土台になる。",
    attribution: "ここを丁寧にやりきることが、Lv2以降の成果を左右する",
  },

  // 03. Lv1でやることは3ブロック
  {
    slug: "03-checklist-3-blocks",
    layout: "checklist",
    title: "Lv1でやることは、3ブロックだけ",
    subtitle: "順番に意味があります（飛ばすと必ず転ぶ）",
    numberStyle: "decimal",
    items: [
      "<strong>全社共通クラウド基盤を整える</strong> — GWS または MS365 を全社員に配備（情報の「共有できる場所」を作る）",
      "<strong>1部門からスモールスタート</strong> — 1部門でつなぎ目を1箇所消す（型を作って横展開できる状態に）",
      "<strong>はじめてのAI活用</strong> — 要約・下書き・検索の3用途（AIが仕事に使える感覚を経営者と社員が持つ）",
    ],
  },

  // 04. ここを飛ばすと必ず転ぶ
  {
    slug: "04-quote-no-skip",
    layout: "quote",
    preLine: "弥生で6年プロダクト統括した経験から",
    quote: "ここを飛ばすと、<br>必ず転びます。",
    attribution: "全社共通基盤がなければ、Lv2 以降の成果は出ない",
  },

  // 05. 月¥2,000/人 = AIが社内データに到達する切符
  {
    slug: "05-quote-cloud-ticket",
    layout: "quote",
    preLine: "月 ¥2,000/人 の意味",
    quote: "AIが社内データに<br>到達するための切符。",
    attribution: "「外出先で見られる機能」への対価ではなく、組織全体への投資",
  },

  // 06. GWS / MS365 を選ぶ4観点
  {
    slug: "06-checklist-4-perspectives",
    layout: "checklist",
    title: "GWS / MS365 を選ぶ4観点",
    subtitle: "経営者が判断すべき問い（IT担当任せにしない）",
    numberStyle: "decimal",
    items: [
      "<strong>今、社員は何を日常的に使っているか</strong> — Outlook+Excel が中心 → MS365 ／ メール薄い → GWS",
      "<strong>IT担当者がいるか</strong> — いない → GWS（管理コンソールがシンプル） ／ いる → どちらでも",
      "<strong>Excel特殊機能（VBAマクロ）への依存度</strong> — 深い → MS365 ／ 浅い → GWS",
      "<strong>今後のAI活用の方向性</strong> — IT担当者なしのゼロスタートなら GWS の方がつまずきが少ない",
    ],
  },

  // 07. 全社員アカウント = 個人の資産から会社の資産へ
  {
    slug: "07-quote-all-employees",
    layout: "quote",
    preLine: "Lv1 で必ず達成すべきこと",
    quote: "全社員が同じ<br>クラウド基盤にアカウントを持つ。",
    attribution: "情報が「個人の資産」から「会社の資産」になる出発点",
  },

  // 08. 60ライセンス問題
  {
    slug: "08-quote-60-licenses",
    layout: "quote",
    preLine: "全社一斉導入の罠",
    quote: "年 ¥1,080,000 が、<br>宙に浮く。",
    attribution: "60ライセンス問題 — 月¥1,500 × 60名 × 12ヶ月",
  },

  // 09. 先行チーム5〜10名の選び方
  {
    slug: "09-checklist-team-3-types",
    layout: "checklist",
    title: "先行チーム5〜10名の選び方",
    subtitle: "3タイプをバランスよく入れる（IT得意な人だけはNG）",
    numberStyle: "decimal",
    items: [
      "<strong>影響力のある人</strong> — 部門リーダー、発言力ある社員。「あの人が使うなら自分も」を生む",
      "<strong>業務量が多い人</strong> — AIで時間が浮く体感を最も得やすい人",
      "<strong>素直に試せる人</strong> — 「面白そう」と思える、失敗を怖がらない人",
    ],
  },

  // 10. はじめてのAI活用 3用途
  {
    slug: "10-checklist-3-uses",
    layout: "checklist",
    title: "はじめてのAI活用：3用途",
    subtitle: "GWS = Gemini ／ MS365 = Copilot が最初から統合",
    numberStyle: "decimal",
    items: [
      "<strong>要約</strong> — 議事録・長文メール・PDFの要点をAIにまとめさせる（情報処理の時間が減る）",
      "<strong>下書き</strong> — メール・報告書・提案の下書きをAIに作らせ、人が修正（文章作成の時間が減る）",
      "<strong>検索</strong> — 社内文書・マニュアルをAI経由で探す（「あのファイルどこだっけ」が消える）",
    ],
  },

  // 11. Lv2到達 7項目チェックリスト
  {
    slug: "11-checklist-7-items",
    layout: "checklist",
    title: "Lv2到達 — 7項目チェックリスト",
    subtitle: "5項目以上にチェック → Lv2講座へ進む合図",
    numberStyle: "decimal",
    items: [
      "全社共通クラウド基盤（GWS または MS365）が導入されている",
      "会社ドメインのメールが全員に配られている",
      "全社員のPCから会社ファイルにアクセスできる",
      "1部門で定着し、次の部門への展開計画がある",
      "Gemini / Copilot を日常業務で使う社員が3人以上いる",
      "紙・FAX が主な伝達手段ではなくなっている",
      "「次は業務棚卸し」が経営者の中で言語化できている",
    ],
  },

  // 12. Lv1で詰まる4地雷
  {
    slug: "12-checklist-4-mines",
    layout: "checklist",
    title: "Lv1で詰まる4地雷",
    subtitle: "進む前に、1つずつ予防接種をしておく",
    numberStyle: "decimal",
    items: [
      "<strong>60ライセンス問題</strong> — 全社一斉導入で年¥1,080,000が宙に浮く",
      "<strong>PoC死</strong> — 試して満足、本番展開しない（事前に出口を決めて防ぐ）",
      "<strong>現場拒否</strong> — 「忙しい」「年配が嫌がる」「業務が特殊」の3抵抗",
      "<strong>ROI不明</strong> — 経営の言葉に翻訳できず、時短だけ語る",
    ],
  },

  // 13. 卒業前提で伴走
  {
    slug: "13-quote-graduation",
    layout: "quote",
    preLine: "ツミキAIからの約束",
    quote: "私たちは、<br>卒業前提で伴走します。",
    attribution: "— 半年（180日）で自走に到達することがゴール",
  },

  // 14. 最終 CTA
  {
    slug: "14-cta-next-step",
    layout: "cta",
    headline: "Lv1 の土台が組めたら、<br>次は Lv2 へ。",
    subline: "1段ずつ、着実に。AI駆動経営へ。",
    ctas: [
      { level: 1, label: "無料DX診断", sub: "10問・3分" },
      { level: 2, label: "Lv2講座を読む", sub: "活用を広げる" },
      { level: 3, label: "無料個別相談", sub: "30分・代表が直接" },
    ],
  },
];

export const slideSlugs = slides.map((s) => s.slug);
