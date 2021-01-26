import { surveyCss } from "./cssstandard";

export var defaultBootstrapMaterialCss = {
  root: "sv_main sv_bootstrapmaterial_css",
  container: "sv_container",
  header: "card-heading",
  body: "card-body",
  bodyEmpty: "card-body sv_body_empty",
  footer: "card-footer",
  title: "",
  description: "",
  logo: "sv_logo",
  logoImage: "sv_logo__image",
  headerText: "sv_header__text",
  navigationButton: "",
  completedPage: "",
  navigation: {
    complete: "btn sv_complete_btn btn-primary",
    prev: "btn sv_prev_btn btn-primary",
    next: "btn sv_next_btn btn-primary",
    start: "btn sv_start_btn btn-primary",
    preview: "btn sv_preview_btn btn-primary",
    edit: "btn sv_edit_btn btn-primary",
  },
  progress: "progress center-block mx-auto mb-4",
  progressBar: "progress-bar",
  progressTextUnderBar: "sv-hidden",
  progressButtonsContainerCenter: "sv_progress-buttons__container-center",
  progressButtonsContainer: "sv_progress-buttons__container",
  progressButtonsImageButtonLeft: "sv_progress-buttons__image-button-left",
  progressButtonsImageButtonRight: "sv_progress-buttons__image-button-right",
  progressButtonsImageButtonHidden: "sv_progress-buttons__image-button--hidden",
  progressButtonsListContainer: "sv_progress-buttons__list-container",
  progressButtonsList: "sv_progress-buttons__list",
  progressButtonsListElementPassed: "sv_progress-buttons__list-element--passed",
  progressButtonsListElementCurrent: "sv_progress-buttons__list-element--current",
  progressButtonsListElementNonClickable: "sv_progress-buttons__list-element--nonclickable",
  progressButtonsPageTitle: "sv_progress-buttons__page-title",
  progressButtonsPageDescription: "sv_progress-buttons__page-description",
  page: {
    root: "",
    title: "",
    description: "small",
  },
  pageTitle: "",
  pageDescription: "small",
  row: "sv_row",
  question: {
    mainRoot: "sv_qstn form-group bmd-form-group",
    flowRoot: "sv_q_flow form-group bmd-form-group",
    header: "",
    headerLeft: "title-left",
    content: "",
    contentLeft: "content-left",
    titleLeftRoot: "sv_qstn_left",
    requiredText: "sv_q_required_text",
    title: "",
    titleExpandable: "sv_q_title_expandable",
    number: "sv_q_num",
    description: "small",
    descriptionUnderInput: "small",
    comment: "form-control",
    required: "",
    titleRequired: "",
    hasError: "has-error",
    indent: 20,
    formGroup: "form-group bmd-form-group",
  },
  panel: {
    title: "sv_p_title",
    titleExpandable: "sv_p_title_expandable",
    titleOnError: "",
    icon: "sv_panel_icon",
    iconExpanded: "sv_expanded",
    description: "small sv_p_description",
    container: "sv_p_container",
    footer: "sv_p_footer",
    number: "sv_q_num",
    requiredText: "sv_q_required_text",
  },
  error: {
    root: "alert alert-danger",
    icon: "glyphicon glyphicon-exclamation-sign",
    item: "",
    locationTop: "sv_qstn_error_top",
    locationBottom: "sv_qstn_error_bottom",
  },

  boolean: {
    root: "sv_qbln checkbox",
    item: "sv-boolean",
    control: "sv-visuallyhidden",
    itemChecked: "sv-boolean--checked checked",
    itemIndeterminate: "sv-boolean--indeterminate",
    itemDisabled: "sv-boolean--disabled",
    switch: "sv-boolean__switch",
    slider: "sv-boolean__slider",
    label: "sv-boolean__label ",
    disabledLabel: "sv-boolean__label--disabled",
    materialDecorator: "sv-item__decorator sv-boolean__decorator ",
    itemDecorator: "sv-item__svg  sv-boolean__svg",
    checkedPath: "sv-boolean__checked-path",
    uncheckedPath: "sv-boolean__unchecked-path",
    indeterminatePath: "sv-boolean__indeterminate-path",
  },
  checkbox: {
    root: "sv_qcbx",
    item: "checkbox",
    itemChecked: "checked",
    itemSelectAll: "sv_q_checkbox_selectall",
    itemNone: "sv_q_checkbox_none",
    itemInline: "sv_q_checkbox_inline",
    itemDecorator: "sv-hidden",
    itemControl: "",
    label: "",
    labelChecked: "",
    controlLabel: "",
    materialDecorator: "checkbox-decorator",
    other: "sv_q_checkbox_other form-control",
    column: "sv_q_select_column",
  },
  ranking: {
    root: "sv-ranking",
    rootMobileMod: "sv-ranking--mobile",
    rootDragMod: "sv-ranking--drag",
    item: "sv-ranking-item",
    itemContent: "sv-ranking-item__content",
    itemIndex: "sv-ranking-item__index",
    itemText: "sv-ranking-item__text",
    itemGhostNode: "sv-ranking-item__ghost",
    itemIconContainer: "sv-ranking-item__icon-container",
    itemIcon: "sv-ranking-item__icon",
    itemIconHoverMod: "sv-ranking-item__icon--hover",
    itemIconFocusMod: "sv-ranking-item__icon--focus",
    itemGhostMod: "sv-ranking-item--ghost",
    itemDragMod: "sv-ranking-item--drag",
  },
  comment: "form-control",
  dropdown: {
    root: "",
    control: "form-control",
    other: "sv_q_dd_other form-control",
  },
  html: { root: "" },
  image: { root: "sv_q_image", image: "sv_image_image" },
  matrix: {
    root: "table sv_q_matrix",
    row: "form-group bmd-form-group",
    label: "sv_q_m_label radio-inline",
    cellText: "sv_q_m_cell_text",
    cellTextSelected: "sv_q_m_cell_selected bg-primary",
    cellLabel: "sv_q_m_cell_label",
    itemValue: "form-control",
    itemChecked: "checked",
    itemDecorator: "sv-hidden",
    materialDecorator: "bmd-radio",
  },
  matrixdropdown: {
    root: "table",
    itemValue: "form-group bmd-form-group",
    headerCell: "sv_matrix_cell_header",
    row: "sv_matrix_row",
    detailRow: "sv_matrix_detail_row",
    detailRowText: "sv_matrix_cell_detail_rowtext",
    detailCell: "sv_matrix_cell_detail",
    detailButton: "sv_matrix_cell_detail_button",
    detailButtonExpanded: "sv_matrix_cell_detail_button_expanded",
    detailIcon: "sv_detail_panel_icon",
    detailIconExpanded: "sv_detail_expanded",
    detailPanelCell: "sv_matrix_cell_detail_panel",
  },
  matrixdynamic: {
    mainRoot: "sv_qstn",
    flowRoot: "sv_q_flow",
    root: "table",
    button: "btn btn-primary",
    itemValue: "form-group bmd-form-group",
    buttonAdd: "",
    buttonRemove: "",
    iconAdd: "",
    iconRemove: "",
    headerCell: "sv_matrix_cell_header",
    row: "sv_matrix_row",
    detailRow: "sv_matrix_detail_row",
    detailCell: "sv_matrix_cell_detail",
    detailButton: "sv_matrix_cell_detail_button",
    detailButtonExpanded: "sv_matrix_cell_detail_button_expanded",
    detailIcon: "sv_detail_panel_icon",
    detailIconExpanded: "sv_detail_expanded",
    detailPanelCell: "sv_matrix_cell_detail_panel",
    emptyRowsSection: "sv_matrix_empty_rows_section",
    emptyRowsText: "sv_matrix_empty_rows_text",
    emptyRowsButton: "",
  },
  paneldynamic: {
    root: "",
    navigation: "sv-paneldynamic__navigation",
    progressTop: "sv-paneldynamic__progress sv-paneldynamic__progress--top",
    progressBottom:
      "sv-paneldynamic__progress sv-paneldynamic__progress--bottom",
    title: "sv-title sv-question__title",
    button: "button",
    buttonAdd: "button sv-paneldynamic__add-btn btn btn-primary",
    buttonRemove: "button sv-paneldynamic__remove-btn btn btn-primary",
    buttonPrev: "sv-paneldynamic__prev-btn",
    buttonNext: "sv-paneldynamic__next-btn",
    progressContainer: "sv-paneldynamic__progress-container",
    progress: "sv-progress",
    progressBar: "sv-progress__bar",
    progressText: "sv-paneldynamic__progress-text",
  },
  multipletext: {
    root: "table",
    itemTitle: "",
    row: "form-group bmd-form-group",
    itemValue: "sv_q_mt_item_value form-control",
  },
  radiogroup: {
    root: "",
    item: "radio",
    itemChecked: "checked",
    itemInline: "sv_q_radiogroup_inline",
    itemDecorator: "sv-hidden",
    label: "",
    labelChecked: "",
    itemControl: "",
    controlLabel: "sv_q_radiogroup_control_label",
    materialDecorator: "bmd-radio",
    other: "sv_q_radiogroup_other form-control",
    clearButton: "sv_q_radiogroup_clear button btn btn-primary",
    column: "sv_q_select_column",
  },
  imagepicker: {
    root: "sv_imgsel",
    item: "sv_q_imgsel",
    itemChecked: "checked",
    itemInline: "sv_q_imagepicker_inline",
    label: "sv_q_imgsel_label",
    itemControl: "sv_q_imgsel_control_item",
    image: "sv_q_imgsel_image",
    itemText: "sv_q_imgsel_text",
    clearButton: "sv_q_radiogroup_clear",
  },
  rating: {
    root: "btn-group",
    item: "btn btn-default btn-secondary",
    selected: "active",
    minText: "sv_q_rating_min_text",
    itemText: "sv_q_rating_item_text",
    maxText: "sv_q_rating_max_text",
    disabled: "",
  },
  text: "form-control",
  expression: "form-control",
  file: {
    root: "form-group bmd-form-group is-fileinput sv_q_file",
    placeholderInput: "",
    preview: "sv_q_file_preview",
    removeButton: "sv_q_file_remove_button",
    fileInput: "sv_q_file_input",
    removeFile: "sv_q_file_remove",
    removeFileSvg: "sv-hidden",
    fileDecorator: "sv-hidden",
    fileSignBottom: "sv-hidden",
    removeButtonBottom: "sv-hidden",
  },
  signaturepad: {
    root: "sv_q_signaturepad sjs_sp_container",
    controls: "sjs_sp_controls",
    clearButton: "sjs_sp_clear",
  },
  saveData: {
    root: "",
    saving: "alert alert-info",
    error: "alert alert-danger",
    success: "alert alert-success",
    saveAgainButton: "",
  },
  window: {
    root: "modal-content",
    body: "modal-body",
    header: {
      root: "modal-header card-title",
      title: "pull-left",
      button: "glyphicon pull-right",
      buttonExpanded: "glyphicon pull-right glyphicon-chevron-up",
      buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down",
    },
  },
};
(<any>surveyCss)["bootstrapmaterial"] = defaultBootstrapMaterialCss;
