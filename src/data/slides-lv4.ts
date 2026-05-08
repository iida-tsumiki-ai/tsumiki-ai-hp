/**
 * note 記事「Lv4講座 — AIネイティブになる」用 本文中スライド画像
 * 1280×720（16:9）/ シリーズ「ツミキAI 経営者講座」
 *
 * Lv4 は how-to ではなく vision + 事例集の性格。
 * スライドも「全体像を提示する」役割が中心。
 */
import type { Slide } from "./slides-roadmap.ts";

export const slides: Slide[] = [
  {
    slug: "00-title-cover",
    layout: "section-cover",
    title: "Lv4講座<br>AIネイティブになる",
    lead: "「使う会社」から「進化し続ける会社」へ",
    position: 4,
  },
  {
    slug: "01-lv4-card",
    layout: "lv-card",
    lv: 4,
    lvTitle: "AIネイティブになる",
    catchPhrase: "AI内製で、進化し続ける会社",
    actions: [
      "新業務もAIから設計できる",
      "規模 × コスト × 品質のトレードオフが崩れる",
      "売上成長と人件費が比例しなくなる",
    ],
  },
  {
    slug: "02-quote-not-howto-but-vision",
    layout: "quote",
    preLine: "Lv4 講座の性格",
    quote: "how-to ではなく、<br>vision ＋ 事例集。",
    attribution: "読むだけでは内製化は完成しない。でも、目指す姿を言葉で掴むことに価値がある",
  },
  {
    slug: "03-checklist-4-features",
    layout: "checklist",
    title: "AIネイティブな会社の 4つの特徴",
    subtitle: "規模ではなく、仕組みの問題",
    numberStyle: "decimal",
    items: [
      "<strong>組織横断自動化</strong> — 部門をまたぐ業務フロー全体が人手を介さず動く",
      "<strong>内製で即AI組込</strong> — 新業務に AI を自社で組み込める（ベンダー依存しない）",
      "<strong>AIと組織の共進化</strong> — AI が組織の「記憶」になり、使うほど判断精度が上がる",
      "<strong>自走の定義</strong> — どのエージェントを入れるか、自社で意思決定できる",
    ],
  },
  {
    slug: "04-checklist-5-changes",
    layout: "checklist",
    title: "AIネイティブな会社で起きる 5つの変化",
    subtitle: "米国 AI-Native 企業群の設計論を、中小企業に翻訳",
    numberStyle: "decimal",
    items: [
      "<strong>複利的な改善ループ</strong> — 使うほどAIが自社固有のノウハウを学習して賢くなる",
      "<strong>スケール構造の転換</strong> — 人を増やさずに売上と価値を増やせる",
      "<strong>限界費用ゼロのパーソナライズ</strong> — 顧客一人ひとりに違う対応を追加コストほぼゼロで",
      "<strong>プロダクトの性格が変わる</strong> — 固定マニュアルから状況対応型のシステムへ",
      "<strong>ビジネスモデルの裏返し</strong> — 「外注の方が速くて安い」→「内製の方が速くて安い」",
    ],
  },
  {
    slug: "05-quote-not-scale-but-system",
    layout: "quote",
    preLine: "NOT A HOTEL（200名で2万人分）／1人で60社を回す会計事務所",
    quote: "規模でも業種でもなく、<br>仕組みの問題。",
    attribution: "BtoB 中小企業の AI-Native 第1号事例ポジションが、客観的に空いている",
  },
  {
    slug: "06-quote-auto-vs-autonomous",
    layout: "quote",
    preLine: "Lv2「自動化」と Lv4「自律化」の違い",
    quote: "自動化 ＝ 決まった手順を実行。<br>自律化 ＝ 状況を判断して、次を決める。",
    attribution: "違いは「判断の有無」。エージェントは「流れの中の判断」を担う",
  },
  {
    slug: "07-checklist-agent-suitable",
    layout: "checklist",
    title: "エージェントに向く業務",
    subtitle: "AIにできることが増えるほど、人間がやるべき業務の輪郭が明確になる",
    numberStyle: "decimal",
    items: [
      "<strong>大量の情報を選別・要約する</strong>（問い合わせのトリアージ・文書解析）",
      "<strong>複数システムをまたいで照合する</strong>（在庫×注文・支払い×請求）",
      "<strong>過去パターンから次を提案する</strong>（発注タイミング予測・リスクのフラグ立て）",
      "<strong>定型的なやりとりを担当する</strong>（初期問い合わせ応答・社内FAQ一次回答）",
    ],
  },
  {
    slug: "08-checklist-3-requirements",
    layout: "checklist",
    title: "自律運営の 3要件",
    subtitle: "ツール ／ データ ／ 組織 — どれか欠けると残り2つが機能しない",
    numberStyle: "decimal",
    items: [
      "<strong>ツール</strong> — 主要システムが AI から読み書きできる（API・MCP対応）",
      "<strong>データ</strong> — リアルタイム性 ／ 横断性 ／ 信頼性 の3点が揃っている",
      "<strong>組織</strong> — 選定・運用・教育の3機能を社内で担える人がいる",
    ],
  },
  {
    slug: "09-checklist-4-patterns",
    layout: "checklist",
    title: "自走に至る 4つのパターン",
    subtitle: "支援してきた経営者の軌跡から見えてきたもの",
    numberStyle: "decimal",
    items: [
      "<strong>最初の「動く仕組み」が組織を変える</strong> — 小さな成功 → AIへの信頼が具体化",
      "<strong>業務棚卸しからエージェント設計へのつながり</strong> — Lv2の経験がそのまま Lv4 の素材に",
      "<strong>「失敗したエージェント」が組織を学ばせる</strong> — 戻せる設計で小さく試す",
      "<strong>経営者が「AI前提の意思決定」に変わる</strong> — 思考のOS が変わる瞬間",
    ],
  },
  {
    slug: "10-quote-graduation",
    layout: "quote",
    preLine: "ツミキAIからの約束",
    quote: "私たちは、<br>卒業前提で伴走します。",
    attribution: "— 自走に到達したら、ツミキAIは不要になる。それがゴール",
  },
  {
    slug: "11-cta-next-step",
    layout: "cta",
    headline: "「読むだけ」では<br>内製化は完成しない。",
    subline: "目指す姿が言葉になっている経営者は、伴走の密度が変わります",
    ctas: [
      { level: 1, label: "無料DX診断", sub: "10問・3分" },
      { level: 2, label: "他のLv講座を読む", sub: "ロードマップ／Lv1〜3" },
      { level: 3, label: "無料個別相談", sub: "30分・代表が直接（推奨）" },
    ],
  },
];

export const slideSlugs = slides.map((s) => s.slug);
