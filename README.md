# tsumiki-ai-hp

ツミキAI のホームページ（Astro 実装版）。2026 Q2 の Phase 1「HP基盤整備」で開通を目指す14ページ体系の実装リポジトリ。

- **現在地**: Phase 1 / A5（ローカル開発環境構築）完了 → B1-B9 実装へ
- **公開方針**: Phase 1 中は**ローカル開発のみ**。GitHub リポジトリ化・GitHub Pages 公開・独自ドメイン切替は **A5b（Phase 1 終盤）** で実施

---

## 関連ドキュメント（Google Drive）

すべて `共有ドライブ/ツミキAI/` 配下。

| 種類 | パス |
|---|---|
| **HP設計書（L1/L2/§技術スタック/§設計判断ログ）** | `01_マーケティング/商品設計・HPリニューアル/11_HPリニューアル_設計書.md` |
| **Phase 1 タスクリスト** | `01_マーケティング/商品設計・HPリニューアル/12_HPリニューアル_Phase1タスク.md` |
| **デザインガイド（トークンの原典）** | `03_デザイン・アセット/DESIGN.md` |
| **商品戦略（10マスモデル）** | `01_マーケティング/商品設計・HPリニューアル/01_商品戦略_ポートフォリオ全体.md` |
| **試作HTML**（参考） | `03_デザイン・アセット/試作/hero_v1.html` など |

`src/styles/tokens.css` は DESIGN.md の **§2 Color / §3 Typography / §4 Spacing / §6 Radius & Shadow / §8 Motion** をCSSカスタムプロパティ化したもの。DESIGN.md 側が正なので、デザイントークンを変更する場合はまず DESIGN.md を更新してからこの CSS に反映する。

---

## 開発コマンド

プロジェクトルートから実行:

| コマンド | 内容 |
|---|---|
| `npm install` | 依存パッケージのインストール |
| `npm run dev` | ローカル開発サーバー起動（`http://localhost:4321`） |
| `npm run build` | 本番ビルド（`./dist/` に出力） |
| `npm run preview` | ビルド後のプレビュー |
| `npm run astro check` | Astro の型・リント相当のチェック |

---

## プロジェクト構成

```
src/
├── layouts/
│   └── Layout.astro      # html lang=ja / Google Fonts / global.css を読み込む基盤
├── pages/
│   └── index.astro       # トップページ（A5 段階ではトークン確認用ページ）
└── styles/
    ├── tokens.css        # DESIGN.md のデザイントークン（CSSカスタムプロパティ）
    └── global.css        # リセット + タイプスケール + ボタンベース
```

- 見出し: Shippori Mincho（明朝）
- 本文: Noto Sans JP（ゴシック）
- 英数字: Inter（自動フォールバック）

---

## 技術スタック（詳細は 11設計書 §技術スタック）

| 層 | ツール |
|---|---|
| 静的サイト | **Astro** |
| AI駆動実装 | **Claude Code** / Claude Design |
| バージョン管理 | **Git + GitHub**（Public 予定） |
| ホスティング | **GitHub Pages**（`tsumiki.ai` カスタムドメイン） |
| フォーム | **Formrun**（無料〜月3,000円） |
| 解析 | **GA4** |

GitHub リポジトリ化・本番デプロイは **A5b** で一括セットアップ予定。

---

## Phase 1 の進め方

- 伝統的な ④コピー→⑤デザイン→⑦実装 直列ではなく、**Claude Code で ④⑤⑦ を並行処理**する AI駆動スタイル
- GUIデザインツール（Figma / Framer 等）は使わない
- ローカルで `npm run dev` を見ながら Markdown コピー／CSS／Astro コンポーネントを同時に回す

---

## 改訂

- 2026-04-23: 初版作成（A5 ローカル開発環境構築）
