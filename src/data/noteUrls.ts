/**
 * note 記事 URL の一元管理
 *
 * 状態（2026-05-03 時点）:
 *   各講座のnote記事は執筆済み（共有ドライブ/01_マーケティング/note記事/）だが、
 *   note.com 側にはまだ未公開。公開されたら下記の DUMMY を実 URL に置き換える。
 *
 * 公開時の手順:
 *   1. note.com で記事を公開
 *   2. 該当キーの値を実 URL（例: "https://note.com/tsumiki_ai/n/xxxxxx"）に更新
 *   3. dev / prod とも自動反映される
 */

const DUMMY = "https://note.com/tsumiki_ai";

export const noteUrls = {
  roadmap: DUMMY, // TODO: 公開時に実URLへ
  lv1: DUMMY, // TODO: 公開時に実URLへ
  lv2: DUMMY, // TODO: 公開時に実URLへ
  lv3: DUMMY, // TODO: 公開時に実URLへ
  lv4: DUMMY, // TODO: 公開時に実URLへ
} as const;

export type NoteCourseKey = keyof typeof noteUrls;
