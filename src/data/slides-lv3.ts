/**
 * note 記事「Lv3講座 — 戦略を描く」用 本文中スライド画像
 * 1280×720（16:9）/ シリーズ「ツミキAI 経営者講座」
 */
import type { Slide } from "./slides-roadmap.ts";

export const slides: Slide[] = [
  {
    slug: "00-title-cover",
    layout: "section-cover",
    title: "Lv3講座<br>戦略を描く",
    lead: "個別効率化の先にある、経営そのものの転換",
    position: 3,
  },
  {
    slug: "01-lv3-card",
    layout: "lv-card",
    lv: 3,
    lvTitle: "戦略を描く",
    catchPhrase: "個別効率化の先にある、経営そのものの転換",
    actions: [
      "基幹系を API ／ MCP 対応で再選定する",
      "横断データを経営判断に常用する",
      "選定・運用・教育の役割を組織に置く",
    ],
  },
  {
    slug: "02-quote-design-question",
    layout: "quote",
    preLine: "Lv3 の壁",
    quote: "「やり方」ではなく、<br>「設計の問い」にある。",
    attribution: "Lv1・Lv2 が手順なら、Lv3 は判断と設計の連続",
  },
  {
    slug: "03-checklist-4-blocks",
    layout: "checklist",
    title: "Lv3でやることは、4ブロック",
    subtitle: "AI領域の入口。標準90日（Lv1・Lv2 の3倍の判断量）",
    numberStyle: "decimal",
    items: [
      "<strong>基幹系ツール再選定</strong> — 販売管理・会計・顧客管理を API ／ MCP 対応基準で見直す",
      "<strong>API ・ MCP 連携の実装</strong> — 1ブロック以上の業務で完成させる",
      "<strong>データを経営判断に使う</strong> — 売上・顧客・在庫の横断分析とダッシュボード設計",
      "<strong>組織の役割設計</strong> — 選定・運用・教育の社内CTO機能",
    ],
  },
  {
    slug: "04-checklist-api-mcp",
    layout: "checklist",
    title: "基幹系再選定の判断軸",
    subtitle: "従来の機能・コスト・サポートに加える「接続性」",
    numberStyle: "decimal",
    items: [
      "<strong>API の公開範囲</strong> — 公式ドキュメント／APIリファレンスの有無",
      "<strong>MCP 対応</strong> — Claude などの生成AI が直接データを参照・操作できるか",
      "<strong>iPaaS 登録</strong> — Zapier / Make / Power Automate Connectors にあるか",
      "<strong>Webhook 対応</strong> — データ変更をリアルタイム通知できるか",
    ],
  },
  {
    slug: "05-quote-claude-code",
    layout: "quote",
    preLine: "現時点のベストプラクティス",
    quote: "クラウド基盤 × Claude Code が、<br>中小企業がAIネイティブを目指す筋道。",
    attribution: "経営者自身がコマンドラインを触り、限界と意味を体感する",
  },
  {
    slug: "06-quote-business-is-customer-acquisition",
    layout: "quote",
    preLine: "Lv3で経営者が向き合うべきテーマ",
    quote: "ビジネスの中心は、<br>集客です。",
    attribution: "バックオフィス効率化（守り）から、売上を作る側（攻め）の再設計へ",
  },
  {
    slug: "07-checklist-cto-3-functions",
    layout: "checklist",
    title: "社内CTO機能 — 3つの機能",
    subtitle: "経営者が担うべきは「選定」。運用・教育は担当者に任せる",
    numberStyle: "decimal",
    items: [
      "<strong>選定</strong> — 新ツールの評価と導入可否を経営判断する（API対応か／既存基幹系と繋げられるか）",
      "<strong>運用</strong> — 導入したシステムが正しく動いているかを継続確認・問題対処",
      "<strong>教育</strong> — 新しい使い方・ツール・AI活用を社内に伝え、底上げを継続する",
    ],
  },
  {
    slug: "08-checklist-paradox-5-moves",
    layout: "checklist",
    title: "DeNAパラドックスを超える 5つの打ち手",
    subtitle: "個別最適 ≠ 全社最適。経営者が踏み込むべき判断",
    numberStyle: "decimal",
    items: [
      "<strong>効率化で生まれた時間の「再配置」を明示する</strong>",
      "<strong>評価軸を「個人の速度」から「プロセスへの貢献」へ転換する</strong>",
      "<strong>属人的な判断を AI に積み上げる</strong>（言語化して組織のナレッジに）",
      "<strong>効率化の恩恵を「全社の戦略課題」に直結させる</strong>",
      "<strong>リスキリングを「個人の負担」にしない</strong>（勤務時間内に学ぶ機会）",
    ],
  },
  {
    slug: "09-checklist-incentive-3",
    layout: "checklist",
    title: "効率化の恩恵を社員個人に届ける 3パターン",
    subtitle: "中小企業に向くのは ① ＋ ③ の組み合わせ",
    numberStyle: "decimal",
    items: [
      "<strong>① 時間で還元</strong> — 早く終えたら早く帰れる（日本マイクロソフト 週休3日 → 生産性 +40%）",
      "<strong>② お金で還元</strong> — 残業ゼロにインセンティブ（賃金規程改定が必要で重い）",
      "<strong>③ キャリアで還元</strong> — 学習を勤務とみなす／昇進評価対象に",
    ],
  },
  {
    slug: "10-quote-system-and-policy",
    layout: "quote",
    preLine: "Lv3 と Lv4 の境界",
    quote: "ツール × データ ×<br>組織 × 制度 の4軸。",
    attribution: "制度の見直しがないと、Lv4（AIネイティブ・自走）には届かない",
  },
  {
    slug: "11-checklist-5-items",
    layout: "checklist",
    title: "Lv4到達 — 5項目チェックリスト",
    subtitle: "全部完了より、各項目に方向性の判断が経営者の手元にあること",
    numberStyle: "decimal",
    items: [
      "基幹系ツールの再選定が完了している（API・MCP対応軸）",
      "API・MCP連携が1ブロック以上の業務で実装されている",
      "経営判断にAIデータを常用している（週次自動レポート）",
      "社内CTO機能が定着している（選定・運用・教育）",
      "評価制度・キャリア制度の見直しに着手している",
    ],
  },
  {
    slug: "12-quote-individual-vs-org-skill",
    layout: "quote",
    preLine: "Lv3 と Lv4 を分ける境界",
    quote: "Lv3 ＝ 個人が Skill を使う。<br>Lv4 ＝ 組織で Skill を設計・運用する。",
    attribution: "個人の工夫から、組織の仕組みへ",
  },
  {
    slug: "13-quote-graduation",
    layout: "quote",
    preLine: "ツミキAIからの約束",
    quote: "私たちは、<br>卒業前提で伴走します。",
    attribution: "— 社内CTO機能が定着し、組織として自律したらツミキAIは不要になる",
  },
  {
    slug: "14-cta-next-step",
    layout: "cta",
    headline: "頭の整理は記事で、<br>実装の判断は伴走で。",
    subline: "AI駆動経営伴走支援（戦略再設計フェーズ）への副読本としてご活用ください",
    ctas: [
      { level: 1, label: "無料DX診断", sub: "10問・3分" },
      { level: 2, label: "Lv4講座を読む", sub: "AIネイティブになる" },
      { level: 3, label: "無料個別相談", sub: "30分・代表が直接" },
    ],
  },
];

export const slideSlugs = slides.map((s) => s.slug);
