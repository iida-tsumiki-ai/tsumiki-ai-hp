/**
 * ツミキAI 無料個別相談フォーム作成 / 更新スクリプト
 *
 * ▼ 関数の使い分け
 *   - createForm()       … 初回のみ。新しいフォームを作成して通知トリガーまで設定
 *   - updateForm(formId) … 既存フォームの「説明文」を更新したい時に手動で実行
 *   - onFormSubmit(e)    … フォーム送信時の自動処理
 *                          (1) info@tsumiki.ai へ通知メール送信
 *                          (2) 申込者へ自動返信メール送信(ロードマップ講座/AI駆動経営診断のリンク付き)
 *
 * ▼ 初回手順
 *   1. https://script.google.com/ で「新しいプロジェクト」を作成
 *   2. このファイルを貼り付け、createForm を実行
 *   3. 認可フローを完了 → 実行ログから 公開URL/編集URL/Form ID を取得
 *
 * ▼ 説明文の更新
 *   既存フォーム編集画面のURL末尾の formId を引数に updateForm(formId) を実行する
 *   または createForm 後に Logger に出る Form ID をコピーして updateForm("xxx") を実行
 */

const NOTIFY_EMAIL = "info@tsumiki.ai";
const FORM_TITLE = "ツミキAI 無料個別相談 申込フォーム";
const PRIVACY_URL = "https://tsumiki.ai/privacy/";
const ROADMAP_URL = "https://note.com/tsumiki_ai";
const DIAGNOSE_URL = "https://tsumiki.ai/diagnose/";

const FORM_DESC =
  "中小企業経営者向けの AI内製化伴走ブランド「ツミキAI」へのお問い合わせ・相談申込フォームです。\n" +
  "営業トークはしません。現在の困りごとを一緒に言語化し、次の一手を整理する時間として活用ください。\n\n" +
  "▼ お申込後の流れ\n" +
  "① 自動返信メールで「ロードマップ講座(無料)」と「AI駆動経営診断」のリンクをお送りします\n" +
  "② 3営業日以内に代表の飯田からご連絡いたします(メール / 電話 / Google Meet / 訪問)\n" +
  "③ 30分の無料個別相談で、現状ヒアリングと次の一手を整理します\n" +
  "④ 必要に応じて、講座 / 研修 / 伴走支援などをご案内します(無理な営業はしません)";

const INDUSTRY_CHOICES = [
  "IT・ソフトウェア",
  "製造・メーカー",
  "小売・EC・流通",
  "金融・保険",
  "医療・ヘルスケア",
  "建設・不動産",
  "人材・教育",
  "広告・マーケティング",
  "コンサルティング",
  "公共・自治体",
  "その他",
];

const CONFIRMATION_MESSAGE =
  "お申込ありがとうございます。\n3営業日以内に代表の飯田よりご連絡いたします。\n\n" +
  "ご記入いただいたメールアドレス宛に、ロードマップ講座(無料)と AI駆動経営診断 のリンクを含む自動返信メールをお送りしております。";

// ============================================================
// 新規フォーム作成
// ============================================================
function createForm() {
  const form = FormApp.create(FORM_TITLE)
    .setDescription(FORM_DESC)
    .setCollectEmail(false)
    .setShowLinkToRespondAgain(false)
    .setConfirmationMessage(CONFIRMATION_MESSAGE);

  applyItems_(form);
  registerSubmitTrigger_(form);

  Logger.log("✅ フォーム作成完了");
  Logger.log("Form ID: " + form.getId());
  Logger.log("公開URL: " + form.getPublishedUrl());
  Logger.log("編集URL: " + form.getEditUrl());
  Logger.log("通知先: " + NOTIFY_EMAIL);
}

// ============================================================
// 既存フォームの「タイトル / 説明 / 確認メッセージ」を更新
// 項目自体には触れない(項目を変更したい場合は手動で編集)
// ============================================================
function updateForm(formId) {
  if (!formId) {
    throw new Error("formId を引数に渡してください。例: updateForm('xxxxxxxxxxxx')");
  }
  const form = FormApp.openById(formId);
  form.setTitle(FORM_TITLE);
  form.setDescription(FORM_DESC);
  form.setConfirmationMessage(CONFIRMATION_MESSAGE);
  Logger.log("✅ フォーム説明文を更新しました: " + form.getEditUrl());
}

// ============================================================
// フォーム項目の組み立て (createForm 専用)
// ============================================================
function applyItems_(form) {
  // === セクション1: あなたについて ===
  form.addSectionHeaderItem().setTitle("あなたについて");
  form.addTextItem().setTitle("お名前").setRequired(true);
  form.addTextItem().setTitle("会社名").setRequired(true);
  form.addTextItem().setTitle("役職");
  form.addTextItem().setTitle("メールアドレス").setRequired(true);
  form.addTextItem().setTitle("電話番号(任意)");

  // === セクション2: 会社について ===
  form.addPageBreakItem().setTitle("会社について");
  form
    .addMultipleChoiceItem()
    .setTitle("業種")
    .setChoiceValues(INDUSTRY_CHOICES)
    .setRequired(true);
  form
    .addMultipleChoiceItem()
    .setTitle("従業員規模")
    .setChoiceValues([
      "〜10名",
      "11〜50名",
      "51〜300名",
      "301〜1000名",
      "1001名以上",
    ])
    .setRequired(true);

  // === セクション3: AI駆動経営の現状 ===
  form.addPageBreakItem().setTitle("AI駆動経営の現状");
  form
    .addMultipleChoiceItem()
    .setTitle("AI駆動経営診断は受診しましたか?")
    .setChoiceValues(["はい(受診済み)", "いいえ", "これから受ける"])
    .setRequired(true);
  form
    .addMultipleChoiceItem()
    .setTitle("受診済みの方:現在のDXLvをご記入ください(任意)")
    .setChoiceValues([
      "Lv1 土台を組む",
      "Lv2 活用を広げる",
      "Lv3 戦略を描く",
      "Lv4 AIネイティブ",
    ]);

  // === セクション4: 相談内容 ===
  form.addPageBreakItem().setTitle("相談内容");
  form
    .addParagraphTextItem()
    .setTitle("相談したい内容(メモ欄)")
    .setHelpText("改行して複数行・箇条書きでも構いません(文字数制限はありません)。具体的に書いていただけると、当日の議論が深まります。")
    .setRequired(true);
  form
    .addCheckboxItem()
    .setTitle("関心のある関わり方(複数選択可)")
    .setChoiceValues([
      "経営者講座(月¥3,000のメンバーシップ)",
      "担当者研修(¥5万〜20万)",
      "AI駆動経営伴走支援(月¥10〜30万)",
      "まだ漠然としていて、相談しながら整理したい",
    ]);

  // === セクション5: 連絡方法 ===
  form.addPageBreakItem().setTitle("連絡方法");
  form
    .addMultipleChoiceItem()
    .setTitle("希望の連絡方法")
    .setChoiceValues(["メール", "電話", "Google Meet(オンライン)", "訪問"])
    .setRequired(true);
  form
    .addTextItem()
    .setTitle("希望日時の候補(任意)")
    .setHelpText("例:5/15(水)午後 / 5/20以降の平日");

  // === セクション6: 認知経路 ===
  form.addPageBreakItem().setTitle("最後に");
  form
    .addMultipleChoiceItem()
    .setTitle("ツミキAIをどこで知りましたか?")
    .setChoiceValues(["Google検索", "SNS(X / note)", "紹介", "セミナー", "その他"]);

  // === セクション7: 同意 ===
  form
    .addCheckboxItem()
    .setTitle("プライバシーポリシーへの同意")
    .setChoiceValues([
      "プライバシーポリシー(" + PRIVACY_URL + ")に同意する",
    ])
    .setRequired(true);
}

// ============================================================
// 送信時トリガー登録 (重複防止)
// ============================================================
function registerSubmitTrigger_(form) {
  const triggers = ScriptApp.getProjectTriggers();
  for (const t of triggers) {
    if (t.getHandlerFunction() === "onFormSubmit") {
      ScriptApp.deleteTrigger(t);
    }
  }
  ScriptApp.newTrigger("onFormSubmit").forForm(form).onFormSubmit().create();
}

// ============================================================
// フォーム送信時のメイン処理
//   (1) info@tsumiki.ai へ通知
//   (2) 申込者へ自動返信
// ============================================================
function onFormSubmit(e) {
  const items = e.response.getItemResponses();

  // メアドと名前を抽出
  let userEmail = null;
  let userName = null;
  for (const r of items) {
    const t = r.getItem().getTitle();
    if (t === "メールアドレス") userEmail = String(r.getResponse() || "").trim();
    if (t === "お名前") userName = String(r.getResponse() || "").trim();
  }

  // (1) 社内通知
  try {
    const lines = ["新しい無料個別相談の申込が届きました。", ""];
    for (const r of items) {
      const title = r.getItem().getTitle();
      const ans = r.getResponse();
      const ansStr = Array.isArray(ans) ? ans.join(" / ") : ans;
      lines.push("■ " + title);
      lines.push(ansStr);
      lines.push("");
    }
    try {
      lines.push("回答編集URL: " + e.response.getEditResponseUrl());
    } catch (_) {}
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: "【ツミキAI】無料個別相談の申込が届きました" +
        (userName ? " (" + userName + " 様)" : ""),
      body: lines.join("\n"),
    });
  } catch (err) {
    Logger.log("notify error: " + err);
  }

  // (2) 申込者への自動返信
  if (userEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
    try {
      MailApp.sendEmail({
        to: userEmail,
        subject: "【ツミキAI】お申込ありがとうございます",
        body: buildAutoReplyBody_(userName),
      });
    } catch (err) {
      Logger.log("auto-reply error: " + err);
    }
  }
}

// ============================================================
// 既存フォームを Form ID 直接指定で更新する一発実行用
// ============================================================
const EXISTING_FORM_ID = "19AQIyUC5x2OrCGlbo7F2l_qn5rTdQj6GJK617EL5c1c";

function runUpdateById() {
  const form = FormApp.openById(EXISTING_FORM_ID);
  form.setTitle(FORM_TITLE);
  form.setDescription(FORM_DESC);
  form.setConfirmationMessage(CONFIRMATION_MESSAGE);
  registerSubmitTrigger_(form);
  Logger.log("✅ 既存フォーム更新完了 (by ID)");
  Logger.log("Form ID: " + form.getId());
  Logger.log("公開URL: " + form.getPublishedUrl());
  Logger.log("編集URL: " + form.getEditUrl());
}

// ============================================================
// 既存フォームの個別項目を更新する一発実行用
//   - 業種選択肢を INDUSTRY_CHOICES に置き換え
//   - 「相談したいこと」を「相談したい内容(メモ欄)」にリネーム＋ヘルプ更新
//   - 説明文・確認メッセージ・トリガー再登録もまとめて実施
// ============================================================
function runUpdateItemsById() {
  const form = FormApp.openById(EXISTING_FORM_ID);
  form.setDescription(FORM_DESC);
  form.setConfirmationMessage(CONFIRMATION_MESSAGE);

  let changed = [];

  // 業種(MultipleChoice) の選択肢を入れ替え
  const mcs = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE);
  for (const item of mcs) {
    if (item.getTitle() === "業種") {
      item.asMultipleChoiceItem().setChoiceValues(INDUSTRY_CHOICES);
      changed.push("業種選択肢: " + INDUSTRY_CHOICES.join(", "));
    }
  }

  // 「相談したいこと」(ParagraphText) のタイトル＆ヘルプ更新
  const paras = form.getItems(FormApp.ItemType.PARAGRAPH_TEXT);
  for (const item of paras) {
    if (
      item.getTitle() === "相談したいこと" ||
      item.getTitle() === "相談したい内容(メモ欄)"
    ) {
      item.setTitle("相談したい内容(メモ欄)");
      item.setHelpText(
        "改行して複数行・箇条書きでも構いません(文字数制限はありません)。具体的に書いていただけると、当日の議論が深まります。"
      );
      changed.push("相談メモ欄タイトル＆ヘルプ更新");
    }
  }

  registerSubmitTrigger_(form);

  Logger.log("✅ 項目更新完了");
  Logger.log("変更内容:");
  for (const c of changed) Logger.log("  - " + c);
  Logger.log("編集URL: " + form.getEditUrl());
  Logger.log("公開URL: " + form.getPublishedUrl());
}

// ============================================================
// 既存フォーム(タイトル一致でDrive検索)の説明文等を更新する一発実行用
// ============================================================
function runUpdateExisting() {
  // タイトル完全一致でDrive内のフォームファイルを検索
  const query =
    'mimeType = "application/vnd.google-apps.form" and title = "' +
    FORM_TITLE +
    '"';
  const files = DriveApp.searchFiles(query);
  if (!files.hasNext()) {
    throw new Error(
      "Form が見つかりません。タイトル: " + FORM_TITLE + " / 一度 createForm() で作成してください"
    );
  }
  const file = files.next();
  Logger.log("発見: " + file.getName() + " (id=" + file.getId() + ")");

  const form = FormApp.openById(file.getId());
  form.setTitle(FORM_TITLE);
  form.setDescription(FORM_DESC);
  form.setConfirmationMessage(CONFIRMATION_MESSAGE);
  registerSubmitTrigger_(form);

  Logger.log("✅ 既存フォーム更新完了");
  Logger.log("Form ID: " + form.getId());
  Logger.log("公開URL: " + form.getPublishedUrl());
  Logger.log("編集URL: " + form.getEditUrl());
}

function buildAutoReplyBody_(userName) {
  const greet = userName ? userName + " 様" : "ご担当者様";
  return [
    greet,
    "",
    "この度はツミキAIへお問い合わせいただき、誠にありがとうございます。",
    "代表の飯田です。お申込内容を確認のうえ、3営業日以内にあらためてご連絡いたします。",
    "",
    "ご連絡をお待ちいただく間、よろしければ以下もご活用ください。",
    "",
    "▼ ロードマップ講座(無料)",
    "  AI駆動経営までの全体像を、4ステージで整理した無料記事です。",
    "  " + ROADMAP_URL,
    "",
    "▼ AI駆動経営診断(10問・3分)",
    "  自社のDXLvと、AI駆動経営まで残り何段かが分かります。",
    "  " + DIAGNOSE_URL,
    "",
    "----",
    "ツミキAI(代表: 飯田武之)",
    "千葉県印西市 / 中小企業のAI内製化伴走ブランド",
    NOTIFY_EMAIL,
    "https://tsumiki.ai/",
  ].join("\n");
}
