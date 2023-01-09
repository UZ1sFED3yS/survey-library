import { surveyLocalization } from "survey-core";

export var japaneseSurveyStrings = {
  pagePrevText: "前へ",
  pageNextText: "次へ",
  completeText: "完了",
  previewText: "プレビュー",
  editText: "編集",
  startSurveyText: "スタート",
  otherItemText: "その他（説明）",
  noneItemText: "なし",
  selectAllItemText: "すべて選択",
  progressText: "{0}/{1}頁",
  panelDynamicProgressText: "{1}の{0}を記録する",
  questionsProgressText: "{0}/{1}の質問に回答しました。",
  emptySurvey: "この調査に表示できるページや質問はありません",
  completingSurvey: "調査を完了してくれてありがとうございました",
  completingSurveyBefore:
    "当社の記録によると、この調査はすでに完了しています。",
  loadingSurvey: "調査をダウンロード中",
  placeholder: "選択",
  value: "値打ち",
  requiredError: "質問にお答え下さい",
  requiredErrorInPanel: "最低でも1つの質問に答えてください。",
  requiredInAllRowsError: "質問には全列で回答してください。",
  numericError: "数字でご記入下さい",
  textMinLength: "{0} 文字以上で入力して下さい",
  textMaxLength: "{0}文字以下で入力してください。",
  textMinMaxLength: "{0}以上{1}未満の文字を入力してください。",
  minRowCountError: "{0}行以上で入力して下さい",
  minSelectError: "{0}種類以上を選択して下さい",
  maxSelectError: "{0}以上のバリアントを選択しないでください。",
  numericMinMax:
    "{0}は{1}以上であり、{2}以下であることが望ましい。",
  numericMin: "'{0}' は同等か{1}より大きくなければなりません",
  numericMax: "'{0}' は同等か{1}より小さくなければなりません",
  invalidEmail: "有効なメールアドレスをご記入下さい",
  invalidExpression: "式は {0}は'true'を返すべきです。",
  urlRequestError: "リクエストはエラー '{0}' を返しました。{1}",
  urlGetChoicesError:
    "リクエストが空のデータを返したか、'path' プロパティが正しくありません。",
  exceedMaxSize: "ファイルのサイズは{0}を超えてはいけません",
  otherRequiredError: "その他の値を入力してください。",
  uploadingFile:
    "ファイルをアップロード中です。しばらくしてから再度お試し下さい",
  loadingFile: "読み込み中",
  chooseFile: "ファイルを選択",
  noFileChosen: "選択されたファイルはありません",
  confirmDelete: "レコードを削除しますか？",
  keyDuplicationError: "この値は一意でなければなりません。",
  addColumn: "列の追加",
  addRow: "追加行",
  removeRow: "除去",
  addPanel: "新規追加",
  removePanel: "除去",
  choices_Item: "品目",
  matrix_column: "コラム",
  matrix_row: "行",
  savingData: "結果はサーバーに保存されています...。",
  savingDataError: "エラーが発生し、結果を保存できませんでした。",
  savingDataSuccess: "結果は無事に保存されました",
  saveAgainButton: "もう一度試してみてください。",
  timerMin: "僅少",
  timerSec: "セック",
  timerSpentAll: "あなたはこのページに{0}を費やし、合計で{1}を費やしました。",
  timerSpentPage: "あなたはこのページに{0}を費やしました。",
  timerSpentSurvey: "合計で{0}を使ったことになります。",
  timerLimitAll:
    "このページに{1}のうち{0}を費やし、{3}のうち{2}を合計で費やしました。",
  timerLimitPage: "このページで{1}の{0}を使ったことがあります。",
  timerLimitSurvey: "合計で{1}の{0}を使ったことがあります。",
  clearCaption: "空白",
  chooseFileCaption: "ファイルを選択",
  removeFileCaption: "このファイルを削除",
  booleanCheckedLabel: "噫",
  booleanUncheckedLabel: "否",
  confirmRemoveFile: "このファイルを削除してもよろしいですか？{0}?",
  confirmRemoveAllFiles: "すべてのファイルを削除してもよろしいですか？",
  questionTitlePatternText: "質問名",
};

surveyLocalization.locales["ja"] = japaneseSurveyStrings;
surveyLocalization.localeNames["ja"] = "日本語";
