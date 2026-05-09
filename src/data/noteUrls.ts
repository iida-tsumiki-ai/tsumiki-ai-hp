/**
 * note 記事 URL の一元管理
 *
 * 状態（2026-05-09 更新）:
 *   5講座すべて note.com で公開済み。
 *
 * 更新時の手順:
 *   1. note.com で記事を公開／差し替え
 *   2. 該当キーの値を実 URL（例: "https://note.com/tsumiki_ai/n/xxxxxx"）に更新
 *   3. dev / prod とも自動反映される
 */

export const noteUrls = {
  roadmap: "https://note.com/tsumiki_ai/n/n355e6a2e1aff",
  lv1: "https://note.com/tsumiki_ai/n/n6c11f9a8f6e7",
  lv2: "https://note.com/tsumiki_ai/n/n31761deeaa98",
  lv3: "https://note.com/tsumiki_ai/n/neb0fec874788",
  lv4: "https://note.com/tsumiki_ai/n/n882717572dd9",
} as const;

export type NoteCourseKey = keyof typeof noteUrls;
