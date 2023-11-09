import { IAction } from "./actions/action";
import { Base } from "./base";
import { IElement, ISurveyElement, IValueItemCustomPropValues } from "./base-interfaces";
import { ItemValue } from "./itemvalue";
import { PageModel } from "./page";
import { PanelModel, PanelModelBase } from "./panel";
import { PopupModel } from "./popup";
import { Question } from "./question";
import { QuestionFileModel } from "./question_file";
import { MatrixDropdownCell, MatrixDropdownRowModelBase, QuestionMatrixDropdownModelBase } from "./question_matrixdropdownbase";
import { MatrixDropdownColumn } from "./question_matrixdropdowncolumn";
import { QuestionMatrixDynamicModel } from "./question_matrixdynamic";
import { QuestionPanelDynamicModel } from "./question_paneldynamic";
import { SurveyModel } from "./survey";
import { SurveyError } from "./survey-error";
import { Trigger } from "./trigger";

export interface QuestionEventMixin {
  /**
   * A Question instance for which the event is raised.
   */
  question: Question;
}
export interface FileQuestionEventMixin {
  /**
   * A File Upload question instance for which the event is raised.
   */
  question: QuestionFileModel;
}
export interface PanelDynamicQuestionEventMixin {
  /**
   * A Dynamic Panel question instance for which the event is raised.
   */
  question: QuestionPanelDynamicModel;
}
export interface MatrixDropdownQuestionEventMixin {
  /**
   * A Multi-Select Matrix question instance for which the event is raised.
   */
  question: QuestionMatrixDropdownModelBase;
}
export interface MatrixDynamicQuestionEventMixin {
 /**
  * A Dynamic Matrix question instance for which the event is raised.
  */
  question: QuestionMatrixDynamicModel;
}
export interface PanelEventMixin {
  /**
   * A Panel instance for which the event is raised.
   */
  panel: PanelModel;
}
export interface PageEventMixin {
  /**
   * A Page instance for which the event is raised.
   */
  page: PageModel;
}
export interface GetTitleActionsEventMixin {
  /**
   * An array of [actions](https://surveyjs.io/form-library/documentation/iaction) associated with the processed element.
   */
  titleActions: Array<IAction>;
}
export interface GetActionsEventMixin {
  /**
   * An array of [actions](https://surveyjs.io/form-library/documentation/iaction). You can modify the entire array or individual actions within it.
   */
  actions: Array<IAction>;
}
export interface AfterRenderElementEventMixin {
  /**
   * A rendered HTML element.
   */
  htmlElement: HTMLElement;
}
export interface UpdateElementCssClassesEventMixin {
  /**
   * An object with CSS classes applied to the element being rendered, for example, `{ root: "class1", button: "class2" }`. You can modify this object to apply custom CSS classes.
   */
  cssClasses: any;
}
export interface ElementVisibleChangedEventMixin {
  /**
   * Indicates whether the element is visible now.
   */
  visible: boolean;
}

export interface TriggerExecutedEvent {
  /**
   * A trigger that has been executed.
   */
  trigger: Trigger;
}

export interface CompleteBaseEvent {
  /**
   * Returns `true` if survey completion is caused by a ["complete" trigger](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#complete).
   */
  isCompleteOnTrigger: boolean;
  /**
   * A "complete" trigger that has been executed. This parameter has a value only if `options.isCompleteOnTrigger` is `true`.
   */
  completeTrigger?: Trigger;
}
export interface CompletingEvent extends CompleteBaseEvent {
  /**
   * A Boolean property that you can set to `false` if you want to prevent survey completion.
   */
  allow: boolean;
  /**
   * Obsolete. Use `options.allow` instead.
   */
  allowComplete: boolean;
}
export interface CompleteEvent extends CompleteBaseEvent {
  /**
   * Call this method to hide the save operation messages.
   */
  clearSaveMessages: (test?: string) => void;
  /**
   * Call this method to indicate that survey results are successfully saved. You can use the `text` parameter to display a custom message.
   */
  showSaveSuccess: (text?: string) => void;
  /**
   * Call this method to indicate that an error occurred during the save operation. You can use the `text` parameter to display a custom error message.
   */
  showSaveError: (text?: string) => void;
  /**
   * Call this method to indicate that the save operation is in progress. You can use the `text` parameter to display a custom message.
   */
  showSaveInProgress: (text?: string) => void;
  /**
   * Obsolete. Use `options.showSaveInProgress` instead.
   */
  showDataSaving: (text?: string) => void;
  /**
   * Obsolete. Use `options.showSaveError` instead.
   */
  showDataSavingError: (text?: string) => void;
  /**
   * Obsolete. Use `options.showSaveSuccess` instead.
   */
  showDataSavingSuccess: (text?: string) => void;
  /**
   * Obsolete. Use `options.clearSaveMessages` instead.
   */
  showDataSavingClear: (text?: string) => void;
}
export interface ShowingPreviewEvent {
  /**
   * A Boolean property that you can set to `false` if you want to cancel the preview.
   */
  allow: boolean;
  /**
   * Obsolete. Use `options.allow` instead.
   */
  allowShowPreview: boolean;
}
export interface NavigateToUrlEvent {
  /**
   * A Boolean property that you can set to `false` if you want to cancel the navigation and show the [complete page](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#complete-page).
   */
  allow: boolean;
  /**
   * A URL to which respondents should be navigated. You can modify this parameter's value.
   */
  url: string;
}
export interface CurrentPageChangedEvent {
  /**
   * Returns `true` if the respondent is switching to the previous page.
   */
  isPrevPage: boolean;
  /**
   * Returns `true` if the respondent is switching to the next page.
   */
  isNextPage: boolean;
  /**
   * Returns `true` if the respondent is going backward, that is, `newCurrentPage` is earlier in the survey than `oldCurrentPage`.
   */
  isGoingBackward: boolean;
  /**
   * Returns `true` if the respondent is going forward along the survey.
   */
  isGoingForward: boolean;
  /**
   * Returns `true` if the respondent is switching from the [preview page](https://surveyjs.io/form-library/documentation/design-survey/create-a-multi-page-survey#preview-page).
   */
  isAfterPreview: boolean;
  /**
   * The current page.
   */
  newCurrentPage: PageModel;
  /**
   * A page that used to be current.
   */
  oldCurrentPage: PageModel;
}
export interface CurrentPageChangingEvent extends CurrentPageChangedEvent {
  /**
   * A Boolean property that you can set to `false` if you do not want to switch the current page.
   */
  allow: boolean;
  /**
   * Obsolete. Use `options.allow` instead.
   */
  allowChanging: boolean;
}

export interface ValueChangeBaseEvent extends QuestionEventMixin {
  /**
   * The `name` of the question whose value is being changed. If you use the [`valueName`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#valueName) property, this parameter contains its value.
   */
  name: string;
}
export interface ValueChangedEvent extends ValueChangeBaseEvent {
  /**
   * A new value.
   */
  value: any;
}
export interface ValueChangingEvent extends ValueChangeBaseEvent {
  /**
   * A new value. You can change it if required.
   */
  value: any;
  /**
   * A previous value.
   */
  oldValue: any;
}
export interface VariableChangedEvent {
  /**
   * A new value for the variable or calculated value.
   */
  value: any;
  /**
   * The name of the variable or calculated value that has been changed.
   */
  name: string;
}
export interface QuestionVisibleChangedEvent extends QuestionEventMixin, ElementVisibleChangedEventMixin {
  /**
   * The question's name.
   */
  name: string;
}
export interface PageVisibleChangedEvent extends ElementVisibleChangedEventMixin, PageEventMixin { }
export interface PanelVisibleChangedEvent extends ElementVisibleChangedEventMixin, PanelEventMixin { }
export interface QuestionCreatedEvent extends QuestionEventMixin { }

export interface ElementAddedEvent {
  /**
   * A page that nests the added element.
   */
  page: PanelModelBase;
  /**
   * The parent container (panel or page).
   */
  parent: PanelModelBase;
  /**
   * Obsolete. Use `options.page` instead.
   */
  rootPanel: any;
  /**
   * Obsolete. Use `options.parent` instead.
   */
  parentPanel: any;
  /**
   * The element's index within the parent container (panel or page).
   */
  index: number;
  /**
   * The question's name.
   */
  name: string;
}
export interface ElementRemovedEvent {
  /**
   * The element's name.
   */
  name: string;
}
export interface QuestionAddedEvent extends QuestionEventMixin, ElementAddedEvent {}
export interface QuestionRemovedEvent extends QuestionEventMixin, ElementRemovedEvent {}
export interface PanelAddedEvent extends PanelEventMixin, ElementAddedEvent {}
export interface PanelRemovedEvent extends PanelEventMixin, ElementRemovedEvent {}
export interface PageAddedEvent extends PageEventMixin {}
export interface ValidateQuestionEvent extends QuestionEventMixin {
  /**
   * An error message that you should specify if validation fails.
   */
  error: string;
  /**
   * A question value being validated.
   */
  value: any;
  /**
   * The question's name.
   */
  name: string;
}
export interface SettingQuestionErrorsEvent extends QuestionEventMixin {
  /**
   * An array of errors. The array is empty if the validated question satisfies all validation rules.
   */
  errors: Array<SurveyError>;
}
export interface ServerValidateQuestionsEvent {
  /**
   * A method that you should call when a request to the server has completed.
   */
  complete: () => void;
  /**
   * An object for your error messages. Set error messages as follows: `options.errors["questionName"] = "My error message"`.
   */
  errors: { [index: string]: any };
  /**
   * Question values. You can get an individual question value as follows: `options.data["questionName"]`.
   */
  data: { [index: string]: any };
}
export interface ValidatePanelEvent extends PanelEventMixin {
  /**
   * An error message that you should specify if validation fails.
   */
  error: string;
  /**
   * The panel's name.
   */
  name: string;
}
export interface ErrorCustomTextEvent {
  /**
   * A validation error type: `"required"`, `"requireoneanswer"`, `"requirenumeric"`, `"exceedsize"`, `"webrequest"`, `"webrequestempty"`, `"otherempty"`, `"uploadingfile"`, `"requiredinallrowserror"`, `"minrowcounterror"`, `"keyduplicationerror"`, or `"custom"`
   */
  name: string;
  /**
   * A survey element to which the validation error belongs.
   */
  obj: Question | PanelModel | SurveyModel;
  /**
   * A validation error.
   */
  error: SurveyError;
  /**
   * An error message. You can assign a custom message to this parameter.
   */
  text: string;
}
export interface ValidatedErrorsOnCurrentPageEvent extends PageEventMixin {
  /**
   * An array of questions with validation errors.
   */
  questions: Array<Question>;
  /**
   * An array of validation errors.
   */
  errors: Array<SurveyError>;
}
export interface ProcessHtmlEvent {
  /**
   * HTML markup. You can modify this parameter's value.
   */
  html: string;
  /**
   * Indicates a page, question, or message for which HTML content is intended: [`"completed"`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#completedHtml) | [`"completed-before"`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#completedBeforeHtml) | [`"loading"`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#loadingHtml) | [`"html-question"`](https://surveyjs.io/form-library/documentation/api-reference/add-custom-html-to-survey#html).
   */
  reason: string;
}
export interface GetQuestionTitleEvent extends QuestionEventMixin {
  /**
   * A question title taken from the question's `title` or `name` property. You can change this parameter's value.
   */
  title: string;
}
export interface GetTitleTagNameEvent {
  /**
   * A survey element (question, panel, page, or the survey itself) for which the event is raised.
   */
  element: Base;
  /**
   * A heading used to render the title (`"h1"`-`"h6"`). You can change this parameter's value.
   */
  tagName: string;
}
export interface GetQuestionNoEvent extends QuestionEventMixin {
  /**
   * A question number that is calculated based upon the question's [`visibleIndex`](https://surveyjs.io/form-library/documentation/api-reference/question#visibleIndex) and survey's [`questionStartIndex`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#questionStartIndex) properties. You can change this parameter's value.
   */
  no: string;
}
export interface ProgressTextEvent {
  /**
   * The number of questions with input fields. [Image](https://surveyjs.io/form-library/examples/add-image-and-video-to-survey/), [HTML](https://surveyjs.io/form-library/examples/questiontype-html/), and [Expression](https://surveyjs.io/form-library/examples/questiontype-expression/) questions are not counted.
   */
  questionCount: number;
  /**
   * The number of answered questions.
   */
  answeredQuestionCount: number;
  /**
   * The number of questions marked as required.
   */
  requiredQuestionCount: number;
  /**
   * The number of answered questions marked as required.
   */
  requiredAnsweredQuestionCount: number;
  /**
   * Progress text rendered in the [progress bar](#showProgressBar). You can change this parameter's value.
   */
  text: string;
}

export interface TextProcessingEvent {
  /**
   * The name of the property that contains the text to process.
   */
  name: string;
  /**
   * A survey element (question, panel, page, or survey) in which the text will be rendered.
   */
  element: Question | PanelModel | PageModel | SurveyModel;
}
export interface TextMarkdownEvent extends TextProcessingEvent {
  /**
   * A string with Markdown content. Convert this content to HTML and assign the result to the `options.html` parameter.
   */
  text: string;
  /**
   * A property to which you should assign HTML content.
   */
  html?: string;
}
export interface TextRenderAsEvent extends TextProcessingEvent {
  /**
   * a component name used for text rendering
   */
  renderAs: string;
}

export interface SendResultEvent {
  /**
   * A server [response](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response).
   */
  response: any;
  request: any;
  /**
   * A Boolean value that indicates whether survey results have been saved successfully.
   */
  success: boolean;
}
export interface GetResultEvent {
  /**
   * A server [response](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response).
   */
  response: any;
  /**
   * A Boolean value that indicates whether survey results have been retrieved successfully.
   */
  success: boolean;
  /**
   * An object with the following structure:
   *
   * ```js
   * {
   *   AnswersCount: Number, // A total number of posted answers to the question
   *   QuestionResult: Object // All unique answers to the question and their number
   * }
   * ```
   */
  data: any;
  /**
   * An array of objects with the following structure:
   *
   * ```js
   * {
   *   name: String, // A unique answer to the question
   *   value: Number // The number of user responses with this answer
   * }
   * ```
   */
  dataList: Array<any>;
}

export interface LoadFilesEvent extends FileQuestionEventMixin {
  /**
   * A File Upload question's name.
   */
  name: string;
}
export interface UploadFilesEvent extends LoadFilesEvent {
  /**
   * A callback function that you should call when a file is uploaded successfully or when file upload fails. Pass `"success"` or `"error"` as the first argument to indicate the operation status. As the second argument, you can pass the uploaded file's data if file upload was successful or an error message if file upload failed.
   */
  callback: (status: string, data?: any) => any;
  /**
   * An array of JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/API/File" target="_blank">File</a> objects that represent files to upload.
   */
  files: Array<File>;
}
export interface DownloadFileEvent extends LoadFilesEvent {
  /**
   * A callback function that you should call when a file is downloaded successfully or when deletion fails. Pass `"success"` or `"error"` as the first argument to indicate the operation status. As the second argument, you can pass the downloaded file's data as a Base64 string if file download was successful or an error message if file download failed.
   */
  callback: (status: string, data?: any) => any;
  /**
   * The File Upload question's [`value`](https://surveyjs.io/form-library/documentation/api-reference/file-model#value) that contains metadata about uploaded files.
   */
  fileValue: any;
  /**
   * A file identifier (URL, file name, etc.) stored in survey results.
   */
  content: any;
}
export interface ClearFilesEvent extends LoadFilesEvent {
  /**
   * A callback function that you should call when files are deleted successfully or when deletion fails. Pass `"success"` or `"error"` as the first argument to indicate the operation status. As the second argument, you can pass deleted files' data (`options.value`) if file deletion was successful or an error message if file deletion failed.
   */
  callback: (status: string, data?: any) => any;
  /**
   * The name of a file to delete. When this parameter is `null`, all files should be deleted.
   */
  fileName: string;
  /**
   * The File Upload question's [`value`](https://surveyjs.io/form-library/documentation/api-reference/file-model#value) that contains metadata about uploaded files.
   */
  value: any;
}
export interface LoadChoicesFromServerEvent extends QuestionEventMixin {
  /**
   * A query result as it came from the server.
   */
  serverResult: any;
  /**
   * An array of loaded choices. You can modify this array.
   */
  choices: Array<ItemValue>;
}
export interface ProcessTextValueEvent {
  /**
   * The name of the value being processed (the text in curly brackets).
   */
  name: string;
  /**
   * The value being processed. You can change this parameter's value.
   */
  value: any;
  isExists: boolean;
  canProcess: boolean;
  returnDisplayValue: boolean;
}
export interface UpdateQuestionCssClassesEvent extends QuestionEventMixin, UpdateElementCssClassesEventMixin { }
export interface UpdatePanelCssClassesEvent extends PanelEventMixin, UpdateElementCssClassesEventMixin { }
export interface UpdatePageCssClassesEvent extends PageEventMixin, UpdateElementCssClassesEventMixin { }
export interface UpdateChoiceItemCssEvent extends QuestionEventMixin {
  /**
   * A choice item. To access its value and display text, use the `options.item.value` and `options.item.text` properties.
   */
  item: ItemValue;
  /**
   * A string with CSS classes applied to the choice item. The CSS classes are separated by a space character. You can modify this string to apply custom CSS classes.
   */
  css: string;
}
export interface AfterRenderSurveyEvent extends AfterRenderElementEventMixin {
  /**
   * Obsolete. Use the `sender` parameter instead.
   */
  survey: SurveyModel;
}
export interface AfterRenderHeaderEvent extends AfterRenderElementEventMixin { }
export interface AfterRenderPageEvent extends AfterRenderElementEventMixin, PageEventMixin { }
export interface AfterRenderQuestionEvent extends QuestionEventMixin, AfterRenderElementEventMixin { }
export interface AfterRenderQuestionInputEvent extends QuestionEventMixin, AfterRenderElementEventMixin { }
export interface AfterRenderPanelEvent extends AfterRenderElementEventMixin, PanelEventMixin { }
export interface FocusInQuestionEvent extends QuestionEventMixin {
}
export interface FocusInPanelEvent extends PanelEventMixin { }
export interface ShowingChoiceItemEvent extends QuestionEventMixin {
  /**
   * A choice item.
   */
  item: ItemValue;
  /**
   * A Boolean value that specifies item visibility. Set it to `false` to hide the item.
   */
  visible: boolean;
}
export interface ChoicesLazyLoadEvent extends QuestionEventMixin {
  /**
   * A method that you should call to assign loaded items to the question. Item objects should be structured as specified in the [`choices`](https://surveyjs.io/form-library/documentation/api-reference/dropdown-menu-model#choices) property description. If their structure is different, [map their properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to bring them to the required structure.
   */
  setItems: (items: Array<{ "value": any, "text"?: String, "imageLink"?: string, "customProperty"?: any } | string>, totalCount: number) => void;
  /**
   * A search string used to filter choices.
   */
  filter: string;
  /**
   * The number of choice items to load. You can use the question's [`choicesLazyLoadPageSize`](https://surveyjs.io/form-library/documentation/questiondropdownmodel#choicesLazyLoadPageSize) property to change this number.
   */
  take: number;
  /**
   * The number of choice items to skip.
   */
  skip: number;
}
export interface GetChoiceDisplayValueEvent extends QuestionEventMixin {
  /**
   * A method that you should call to assign display texts to the question.
   */
  setItems: (displayValues: Array<string>, ...customValues: Array<IValueItemCustomPropValues>) => void;
  /**
   * An array of one (in Dropdown) or more (in Tag Box) default values.
   */
  values: Array<any>;
}
export interface MatrixRowAddedEvent extends MatrixDynamicQuestionEventMixin {
  /**
   * An added matrix row.
   */
  row: MatrixDropdownRowModelBase;
}
export interface MatrixBeforeRowAddedEvent extends MatrixDynamicQuestionEventMixin {
  /**
   * A Boolean property that you can set to `false` if you do not want to add the row.
   */
  allow: boolean;
  /**
   * Obsolete. Use `options.allow` instead.
   */
  canAddRow: boolean;
}
export interface MatrixRowRemovingEvent extends MatrixDynamicQuestionEventMixin {
  /**
   * A matrix row to be deleted. If you want to clear row data, set the `options.row.value` property to `undefined`.
   */
  row: MatrixDropdownRowModelBase;
  /**
   * A zero-based index of the matrix row to be deleted.
   */
  rowIndex: number;
  /**
   * A Boolean property that you can set to `false` if you want to cancel row deletion.
   */
  allow: boolean;
}
export interface MatrixRowRemovedEvent extends MatrixDynamicQuestionEventMixin {
  /**
   * A deleted matrix row.
   */
  row: MatrixDropdownRowModelBase;
  /**
   * A zero-based index of the deleted row.
   */
  rowIndex: number;
}
export interface MatrixAllowRemoveRowEvent extends MatrixDynamicQuestionEventMixin {
  /**
   * A matrix row for which the event is raised.
   */
  row: MatrixDropdownRowModelBase;
  /**
   * A zero-based row index.
   */
  rowIndex: number;
  /**
   * A Boolean property that you can set to `false` if you want to hide the Remove button for this row.
   */
  allow: boolean;
}

export interface MatrixCellCreatingBaseEvent extends MatrixDropdownQuestionEventMixin {
  /**
   * A matrix column to which the cell belongs.
   */
  column: MatrixDropdownColumn;
  /**
   * The name of the matrix column to which the cell belongs.
   */
  columnName: string;
  /**
   * A matrix row to which the cell belongs.
   */
  row: MatrixDropdownRowModelBase;
  /**
   * The values of this matrix row.\
   * To access a particular column's value, use the following code: `options.rowValue["columnName"]`
   */
  rowValue: any;
}
export interface MatrixCellCreatingEvent extends MatrixCellCreatingBaseEvent {
  /**
   * The type of this matrix cell. You can change this property value to one of the values described in the [`cellType`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list#cellType) documentation.
   */
  cellType: string;
}
export interface MatrixCellCreatedEvent extends MatrixCellCreatingBaseEvent {
  /**
   * A matrix cell for which the event is raised.
   */
  cell: MatrixDropdownCell;
  /**
   * A Question instance within the matrix cell. You can use the properties and methods exposed by the instance to customize it.
   */
  cellQuestion: Question;
}
export interface MatrixAfterCellRenderEvent extends QuestionEventMixin, AfterRenderElementEventMixin {
  /**
   * A matrix cell for which the event is raised.
   */
  cell: MatrixDropdownCell;
  /**
   * A Question instance within the matrix cell.
   */
  cellQuestion: Question;
  /**
   * A matrix row to which the cell belongs.
   */
  row: MatrixDropdownRowModelBase;
  /**
   * A matrix column to which the cell belongs.
   */
  column: MatrixDropdownColumn | MatrixDropdownCell;
}

export interface MatrixCellValueBaseEvent extends MatrixDropdownQuestionEventMixin {
  /**
   * A matrix row to which the cell belongs.
   */
  row: MatrixDropdownRowModelBase;
  /**
   * A matrix column to which the cell belongs.
   */
  column: MatrixDropdownColumn;
  /**
   * The name of a matrix column to which the cell belongs.
   */
  columnName: string;
  /**
   * A Question instance within the matrix cell. You can use the properties and methods exposed by the instance to customize it.
   */
  cellQuestion: Question;
  /**
   * A method that returns a Question instance within the matrix cell given a column name.
   */
  getCellQuestion: (columnName: string) => Question;
  /**
   * A new cell value.
   */
  value: any;

}

export interface MatrixCellValueChangedEvent extends MatrixCellValueBaseEvent {}
export interface MatrixCellValueChangingEvent extends MatrixCellValueBaseEvent {
  /**
   * A previous cell value.
   */
  oldValue: any;
}
export interface MatrixCellValidateEvent extends MatrixCellValueBaseEvent {
  /**
   * A field for your custom error message. Default value: `undefined`.
   */
  error?: string;
}
export interface DynamicPanelModifiedEvent extends PanelDynamicQuestionEventMixin, PanelEventMixin {
  /**
   * The panel's index within Dynamic Panel.
   */
  panelIndex: number;
}
export interface DynamicPanelRemovingEvent extends DynamicPanelModifiedEvent {
  /**
   * A Boolean property that you can set to `false` if you want to cancel panel deletion.
   */
  allow: boolean;
}
export interface TimerPanelInfoTextEvent {
  /**
   * the timer panel info text
   */
  text: string;
}
export interface DynamicPanelItemValueChangedEvent extends PanelDynamicQuestionEventMixin {
  /**
   * The panel's data object that includes all item values.
   */
  panelData: { [index: string]: any };
  /**
   * The panel's index within Dynamic Panel.
   */
  panelIndex: number;
  /**
   * The item's new value.
   */
  value: any;
  /**
   * The item's name.
   */
  name: string;
  /**
   * A panel that nests the item with a changed value.
   */
  panel: PanelModel;
}
export interface DynamicPanelGetTabTitleEvent extends PanelDynamicQuestionEventMixin {
  /**
   * A panel whose tab title is being rendered.
   */
  panel: PanelModel;
  /**
   * The panel's index in the [`visiblePanels`](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model#visiblePanels) array of the Dynamic Panel.
   */
  visiblePanelIndex: number;
  /**
   * A tab title. You can change this parameter's value.
   */
  title: string;
}
export interface IsAnswerCorrectEvent extends QuestionEventMixin {
  /**
   * The number of correct answers in a matrix where each row is considered as one quiz question.
   */
  correctAnswers: number;
  /**
   * The number of incorrect answers in a matrix where each row is considered as one quiz question.
   */
  incorrectAnswers: number;
  /**
   * A Boolean property that specifies whether the answer is correct (`true`) or incorrect (`false`). Use the `options.question.value` and `options.question.correctAnswer` properties to check the answer.
   */
  result: boolean;
}
export interface DragDropAllowEvent {
  /**
   * A survey element being dragged.
   */
  target: IElement;
  /**
   * A survey element from which `target` is being dragged. This parameter is `null` if `target` is being dragged from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox).
   */
  source: IElement;
  /**
   * A survey element before which the target element will be placed. This parameter is `null` if the parent container (page or panel) has no elements or if the target element will be placed below all other elements within the container.
   */
  insertBefore: IElement;
  /**
   * A survey element after which `target` will be placed. This parameter is `null` if the parent container (page or panel) has no elements or if `target` will be placed above all other elements within the container.
   */
  insertAfter: IElement;
  /**
   * A parent container (page or panel) within which `target` will be placed.
   */
  parent: ISurveyElement;
  /**
   * A Boolean property that you can set to `false` if you want to cancel the drag and drop operation.
   */
  allow: boolean;
}
export interface ScrollingElementToTopEvent {
  /**
   * A survey element that will be scrolled to the top.
   */
  element: ISurveyElement;
  /**
   * A unique element ID within the DOM.
   */
  elementId: string;
  /**
   * A Boolean property that you can set to `true` if you want to cancel the scroll operation.
   */
  cancel: boolean;
  /**
   * Obsolete. Use `options.element` instead.
   */
  question?: Question;
  /**
   * Obsolete. Use `options.element` instead.
   */
  page?: PageModel;
}
export interface GetQuestionTitleActionsEvent extends QuestionEventMixin, GetTitleActionsEventMixin { }
export interface GetPanelTitleActionsEvent extends PanelEventMixin, GetTitleActionsEventMixin { }
export interface GetPageTitleActionsEvent extends PageEventMixin, GetTitleActionsEventMixin { }
export interface GetPanelFooterActionsEvent extends GetActionsEventMixin, PanelEventMixin {
  /**
   * A [Dynamic Panel](https://surveyjs.io/form-library/documentation/questionpaneldynamicmodel) to which the Panel belongs. This field is `undefined` if the Panel does not belong to any Dynamic Panel.
   */
  question?: QuestionPanelDynamicModel;
}
export interface GetMatrixRowActionsEvent extends QuestionEventMixin, GetActionsEventMixin {
  /**
   * A matrix row for which the event is raised.
   */
  row: MatrixDropdownRowModelBase;
}
export interface ElementContentVisibilityChangedEvent {
  /**
   * A survey element that was expanded or collapsed.
   */
  element: ISurveyElement;
}
export interface GetQuestionDisplayValueEvent extends QuestionEventMixin {
  /**
   * A question's display text. You can assign a custom value to this parameter.
   */
  displayValue: any;
}
export interface GetExpressionDisplayValueEvent extends GetQuestionDisplayValueEvent {
  /**
   * An expression value.
   */
  value: any;
}

export interface MultipleTextItemAddedEvent extends QuestionEventMixin {
  /**
   * A new added item.
   */
  item: any;
}
export interface MatrixColumnAddedEvent extends QuestionEventMixin {
  /**
   * An added matrix column.
   */
  column: any;
}

export interface PopupVisibleChangedEvent extends QuestionEventMixin {
  /**
   * An object that describes the popup.
   */
  popup: PopupModel;
  /**
   * Indicates whether the popup is visible now.
   */
  visible: boolean;
}