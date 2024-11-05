export function cvjs_CADViewerPro(cadviewerpro: boolean): void;
export function cvjs_setHandlerSettings(handlerType: string, f_div: string, controllerPath: string): void;
export function cvjs_setAngular(mode: boolean): void;
export function cvjs_setNodeJSserver(mode: boolean): void;
export function cvjs_multipagePDFtoSVG_PhpLoad(mode: boolean): void;
export function cvjs_printToPdf_windowRelativeSize(scale: number): void;
export function cvjs_fileLoadFromSharePointServer(mode: boolean): void;
export function cvjs_setInitMasterBackgroundMode(mode: boolean): void;
export function cvjs_setJSFileOldType(oldtype: boolean): void;
export function cvjs_EnablePrintIcon(f_div: string): void;
export function cvjs_DisablePrintIcon(f_div: string): void;
export function cvjs_encodeURIcallToserver(flag: boolean): void;
export function cvjs_setCustomPDFprintControllerFlag(customPrintAsPDF: boolean): void;
export function cvjs_setCustomPDFprintController(handlerName: string): void;
export function cvjs_setServerHandlersPath(path: string): void;
export function cvjs_setPrintObjectPath(path: string): void;
export function cvjs_setPrintObjectPathAbsolute(pathUrl: string, absolutePathServer: string): void;
export function cvjs_setServerPDFConverterController(handlerName: string): void;
export function cvjs_setGetFileController(handlerName: string): void;
export function cvjs_setReturnPDFparamsController(handlerName: string): void;
export function cvjs_setPrintModal_PrintPDF(printPDFflag: boolean, printAsPDF: boolean): void;
export function cvjs_setPrintModal_printGreyScaleflag(printGreyScaleflag: boolean): void;
export function cvjs_setPrintModal_PrintToScale(printToScaleflag: boolean): void;
export function cvjs_setServerSaveFileHandler(handlerName: string): void;
export function cvjs_setServerCopyFileHandler(handlerName: string): void;
export function cvjs_setServerListDirectoryHandler(handlerName: string): void;
export function cvjs_setServerRedlinesListDirectoryHandler(handlerName: string): void;
export function cvjs_setServerAppendFileHandler(handlerName: string): void;
export function cvjs_setServerDeleteFileHandler(handlerName: string): void;
export function cvjs_setServerSaveFileHandlerPrint(handlerName: string): void;
export function cvjs_setServerAppendFileHandlerPrint(handlerName: string): void;
export function cvjs_setServerDeleteFileHandlerPrint(handlerName: string): void;
export function cvjs_setCustomMergedEmailHandler(handlerName: string): void;
export function cvjs_setServerMergeDWGHandler(handlerName: string): void;
export function cvjs_setServerGetQRCodeController(serverGetQRCodeController: string): void;
export function cvjs_setServerSaveHandlerRedlines(handlerName: string): void;
export function cvjs_setServerLoadHandlerRedlines(handlerName: string): void;
export function cvjs_setServerLoadHandler(handlerName: string): void;
export function cvjs_setPhpUploadPath(path: any): void;
export function cvjs_setUploadControllerPath(path: any): void;
export function cvjs_setUploadHandler(handlerName: string): void;
export function cvjs_setUploadController(handlerName: string): void;
export function cvjs_setPhpPath(path: string): void;
export function cvjs_PageChangeList(f_div: string): void;
export function cvjs_LayerList(f_div: string): void;
export function cvjs_swapLayersInDrawing(f_div: string): void;
export function cvjs_allLayersInDrawingOn(f_div: string): void;
export function cvjs_layerNamefromObjectID(myObjectId: string): string;
export function cvjs_interactiveLayerOff(f_div: string): void;
export function cvjs_getCurrentMultiPage_FileName(): string;
export function cvjs_currentURL(): string;
export function cvjs_currentHost(): string;
export function cvjs_setDefaultJSPath(path: string): void;
export function cvjs_setInformationModalType(mode: any): void;
export function cvjs_displayInformationModal(
    f_div: string,
    textString: any,
    modalHeight: number,
    modal_left: number,
    modal_top: number,
): void;
export function cvjs_hideInformationModal(f_div: string): void;
export function cvjs_displayInformationModal_Mode(mode: any): void;
export function cvjs_version(): string;
export function cvjs_setBackgroundColor(f_div: string): void;
export function cvjs_setGenericColorFromPicker(pickcolor: any): void;
export function cvjs_setBackgroundColorHex(hex: string, f_div: string): void;
export function cvjs_startSearchText(): void;
export function cvjs_calibrateMeasurement(f_div: string): void;
export function cvjs_Measurement(f_div: string): void;
export function cvjs_getAutoCADColor(hexNumber: any): string;
export function cvjs_get_dwg_scaled_value(n: number, page: number): number;
export function cvjs_get_dwg_x_coord(x: number, page: number): number;
export function cvjs_get_dwg_y_coord(y: number, page: number): number;
export function cvjs_getGlobal_X_fromSVG(x: number): number;
export function cvjs_getSVG_X_fromGlobal(x: number): number;
export function cvjs_getGlobal_Y_fromSVG(y: number): number;
export function cvjs_getSVG_Y_fromGlobal(y: number): number;
export function cvjs_setServerCreateThumb_StickyNote_Controller(controller: string): void;
export function cvjs_setServerSavePrintModeController(mode: number): void;
export function cvjs_setServerSavePrintModeHandler(mode: number): void;
export function cvjs_setServerScreenToPDFController(controller: string): void;
export function cvjs_setServerScreenToPDFHandler(controller: string): void;
export function cvjs_saveScreenAsImage_makeTumbnails(
    serverPath: string,
    image_fileName: string,
    sizeThumb1: number,
    thumb1_file: string,
    sizeThumb2: number,
    thumb2_file: string,
): void;
export function cvjs_saveScreenAsImage_stickyNoteInfo_makeTumbnails(
    serverPath: string,
    image_fileName: string,
    size1: number,
    t1: string,
    size2: number,
    t2: string,
): void;
export function cvjs_saveScreenAsImage(serverPath: string, image_fileName: string): void;
export function cvjs_saveScreenAsPDF(pageOrientation: string, pageSize: string, pageResolution: string): void;
export function cvjs_batchConvertDrawingsToPDF_CustomReport(
    floorPlan: any,
    dFilesArr: any,
    pageOrint: any,
    pageSize: any,
    pageRes: any,
    batch_Ctrl: any,
    callbackMethod: any,
): void;
export function cvjs_setPrintPaperSize(papersize: string): void;
export function cvjs_setPrintResolutionDpi(dpi: number): void;
export function cvjs_setPrintOrientation(orientation: string): void;
export function cvjs_Print(f_div: string): void;
export function cvjs_Conversion_forPrint(
    f_div: string,
    originatingContent: string,
    originatingUsername: string,
    originatingPassword: string,
    fileFormat: string,
): void;
export function cvjs_printCanvasPaperSize(): void;
export function cvjs_removePrintObjectAfterPrint(flag: boolean): void;
export function cvjs_setJavaScriptsAbsoluteFolder(folder: string): void;
export function cvjs_setJavaScriptsJQ_AbsoluteFolder(folder: string): void;
export function cvjs_displayMagnifyingGlass(f_div: any): void;
export function cvjs_firstPage(f_div: any): void;
export function cvjs_lastPage(f_div: any): void;
export function cvjs_nextPage(f_div: any): void;
export function cvjs_changePageByNumber(f_div: string, newpagenumber: number): boolean;
export function cvjs_previousPage(f_div: any): void;
export function cvjs_setSupressHyperlinkColors(supressflag: boolean): void;
export function cvjs_setUrl_singleDoubleClick(click: number): void;
export function cvjs_encapsulateUrl_callback(flag: boolean): void;
export function cvjs_AllLayersOff(): void;
export function cvjs_LayerOn(layer: string): void;
export function cvjs_LayerOn_OthersOff(layer: any): void;
export function cvjs_LayerOn_AllOff(layer: string): void;
export function cvjs_LayerOff(layer: string): void;
export function cvjs_setPanState(panState: boolean): void;
export function cvjs_windowResize_position(doResize: boolean, floorplan: string): void;
export function cvjs_resizeWindow_position(floorplan: string): void;
export function cvjs_resizeWindow_fixedSize(widthFloorplan: number, heightFloorplan: number, floorplan: string): void;
export function cvjs_resizeWindow_fixedSize_location(
    widthFloorplan: number,
    heightFloorplan: number,
    floorplan: string,
    xPos: number,
    yPos: number,
): void;
export function cvjs_windowResize_position_WidthHeight(
    doResize: any,
    widthFloorplan: any,
    heightFloorplan: any,
    floorplan: any,
): void;
export function cvjs_windowResize_fixedSize(
    doResize: boolean,
    widthFloorplan: number,
    heightFloorplan: number,
    floorplan: string,
): void;
export function cvjs_InitializeModals(floorplan_modal: any): void;
export function cvjs_initialize_allColorCheckboxes(f_div: any): void;
export function cvjs_customPrintTextboxOnChange(): void;
export function cvjs_LayerListModalXrefOnChange(mode: any): void;
export function cvjs_line_thickness_modal_hide(f_div: any): void;
export function cvjs_exitLineThicknessModal(f_div: any): void;
export function cvjs_adjustMinimumLineThickness(percentage: any): void;
export function cvjs_activateLineThicknessModal(f_div: any): void;
export function cvjs_interfaceCounterIndex(f_div: any): number;
export function cvjs_displayAllInterfaceControlsZoomDisk(f_div: string): void;
export function cvjs_hideAllInterfaceControls(f_div: string): void;
export function cvjs_setIconInterfaceControls_PageModal(mode: boolean, disableNavButtons: boolean, f_div: string): void;
export function cvjs_setIconInterfaceControls_DisableIcons(mode: boolean, f_div: string): void;
export function cvjs_displayAllInterfaceControls(mode: boolean, f_div: string): void;
export function cvjs_setIconInterfaceControls_ClassicSkin(mode: boolean, f_div: string): void;
export function cvjs_setIconInterfaceControls_ClassicSkin_DevicesSizeOnly(mode: boolean, f_div: string): void;
export function cvjs_setIconInterfaceControls_MimimumDisk(mode: boolean, f_div: string): void;
export function cvjs_setIconInterfaceControls_MimimumDisk_internal(mode: any, f_div: any): void;
export function cvjs_setIconInterfaceControls_PanZoomDisk(mode: boolean, f_div: string): void;
export function cvjs_overwriteDefaultDeviceSettings(mode: boolean): void;
export function cvjs_initFloorPlanDivArray(f_div: any): void;
export function cvjs_InitCADViewer_highLight_popUp_dual_Id(
    f_div: string,
    spaceBaseAttr: any,
    spaceHighlAttr: any,
    spaceSelectAttr: any,
    cvjsPopUpBody: any,
    cvjsPopUpBody2: any,
): void;
export function cvjs_InitCADViewer_highLight_popUp_app(
    f_div: string,
    app_folder: any,
    spaceBaseAttr: any,
    spaceHighlAttr: any,
    spaceSelectAttr: any,
    cvjsPopUpBody: any,
): void;
export function cvjs_InitCADViewer_highLight_popUp(
    f_div: string,
    spaceBaseAttr: any,
    spaceHighlAttr: any,
    spaceSelectAttr: any,
    cvjsPopUpBody: any,
): void;
export function cvjs_InitCADViewer_highLight(
    f_div: string,
    spaceBaseAttr: any,
    spaceHighlAttr: any,
    spaceSelectAttr: any,
): void;
export function cvjs_InitCADViewer_app(f_div: string, app_folder: string, imagePathDirect: string): void;
export function cvjs_InitCADViewer_app_highLight(
    f_div: string,
    app_folder: string,
    spaceBaseAttr: any,
    spaceHighlAttr: any,
    spaceSelectAttr: any,
): void;
export function cvjs_InitCADViewer_app_highLight_popUp(
    f_div: string,
    app_folder: string,
    spaceBaseAttr: any,
    spaceHighlAttr: any,
    spaceSelectAttr: any,
    cvjsPopUpBody: any,
): void;
export function cvjs_InitCADViewer(f_div: string, image_location: any, javascripts_folder: string): void;
export function cvjs_setRelativeScriptsPath(scriptsPath: string): void;
export function cvjs_setCustomPdfFolder(customPdfFolderName: string, forcedUpdate: boolean): void;
export function cvjs_getCurrentPage(): number;
export function cvjs_LoadDrawingPDF_base(FileNamePath: any): void;
export function cvjs_checkSVGOnServerBeforeLoadFirst(): void;
export function cvjs_checkSVGOnServerBeforeLoad(newfile: any): void;
export function cvjs_ClearDrawing(f_div: string): void;
export function cvjs_LoadDrawing(f_div: string, FileName: string): void;
export function cvjs_clearCurrentRedline(f_div: string): void;
export function cvjs_findMaxRedlineStickyNote(): number;
export function cvjs_findMaxStickyNote(): number;
export function cvjs_setUpVqRedlines_deleteNode_direct(delete_redline: any): void;
export function cvjs_setUpStickyNotes_deleteNode_direct(delete_note: any): void;
export function cvjs_setOriginatingFileUsernamePassword(username: any, password: any): void;
export function cvjs_restApiController(): string;
export function cvjs_restApiControllerLocation(): string;
export function cvjs_setRestApiControllerLocation(myAXlocation: string): void;
export function cvjs_setRestApiController(myConverterDoc: string): void;
export function cvjs_restApiConverter(): string;
export function cvjs_restApiConverterVersion(): string;
export function cvjs_setConverter(converter: string, version: string): void;
export function cvjs_setConverterCredentials(username: string, password: string): void;
export function cvjs_Init_ConversionServer(
    rest_api_url: string,
    rest_api_php: string,
    username: string,
    password: string,
): void;
export function cvjs_setSVG_outputFormatInAXConversions(mode: boolean): void;
export function cvjs_conversion_clearAXconversionParameters(): void;
export function cvjs_conversion_addAXconversionParameter(name: string, value: string): void;
export function cvjs_conversion_setContentType(contentType: string): void;
export function cvjs_conversion_setContentFormat(contentFormat: string): void;
export function cvjs_fileLoad_setContentFormat(contentFormat: any): void;
export function cvjs_conversion_setUserLabel(userLabel: string): void;
export function cvjs_conversion_setContentResponse(contentResponse: any): void;
export function cvjs_conversion_getContentResponse(): string;
export function cvjs_debugMode(debug: boolean): void;
export function cvjs_setPasswordProtectionServerAccess(passwordprotection: boolean): void;
export function cvjs_setServerAccessToServlet(flag: boolean): void;
export function cvjs_setServerAccessToPost(flag: boolean): void;
export function cvjs_LoadDrawing_Conversion(
    f_div: string,
    originatingContent: string,
    originatingFileNameNoExtension: any,
    originatingUsername: string,
    originatingPassword: string,
): void;
export function cvjs_LoadDrawing_Conversion_original(
    f_div: any,
    originatingContent: any,
    originatingFileNameNoExtension: any,
    originatingUsername: any,
    originatingPassword: any,
): void;
export function cvjs_setFileLoadTimeOut(f_div: string, timeout: number): void;
export function cvjs_fileLoadTimeOut(callback: any): void;
export function cvjs_LoadDrawing_SVG(f_div: string, FileNamePath: string, FileName: string): void;
export function cvjs_addSVGClickHandler_onLoad(mode: boolean): void;
export function cvjs_addMouseWheelControls(floorplan_div_nr: any): void;
export function cvjs_zoomWindow(f_div: string): void;
export function cvjs_ZoomWindow(f_div: string): void;
export function cvjs_panRight(): void;
export function cvjs_panUp(): void;
export function cvjs_panDown(): void;
export function cvjs_panLeft(): void;
export function cvjs_zoomExtents(f_div: string): void;
export function cvjs_ZoomExtents(f_div: string): void;
export function cvjs_resetZoomPan(f_div: string): boolean;
export function cvjs_zoomIn(f_div: string): void;
export function cvjs_ZoomIn(f_div: string): void;
export function cvjs_zoomOut(f_div: string): void;
export function cvjs_ZoomOut(f_div: string): void;
export function cvjs_zoomInOutCustomFactor(f_div: string, customZoomFactor: any): void;
export function cvjs_zoomPositionFactor(
    x_pos: any,
    y_pos: any,
    wportx: any,
    wporty: any,
    f_div: any,
    zoomfactor: any,
): void;
export function cvjs_redrawViewBox(): void;
export function cvjs_LoadTopIconMenuViewing(f_div: string): void;
export function cvjs_loadCADViewerLanguage(language: string, languagelocation: string): void;
export function cvjs_setLanguage(Language: string): void;
export function cvjs_getLanguages(): string;
export function cvjs_getServerLocation(): string;
export function cvjs_getServerURL(): string;
export function cvjs_returnSpaceObjectSelected(): string;
export function cvjs_setServerBackEndUrl(ServerLocationBackEndUrl: string): void;
export function cvjs_getServerBackEndUrl(): string;
export function cvjs_setServerLocationURL(ServerLocation: string, ServerUrl: string): void;
export function cvjs_setTopMenuXML(f_div: string, xml_config_file: string, xml_config_file_location: string): void;
export function cvjs_setCustomTopMenuXML(xml_config_file: string, f_div: string): void;
export function cvjs_displayTopMenuIconBar(display_status: boolean, f_div: string): void;
export function cvjs_displayTopNavigationBar(display_status: boolean, f_div: string): void;
export function cvjs_changePreviousIconPage_TopIconMenu(f_div: any): void;
export function cvjs_changeNextIconPage_TopIconMenu(f_div: any): void;
export function cvjs_LoadTopNavigationMenu(f_div: any): void;
export function cvjs_LoadCoordinatesMenu(f_div: any): void;
export function cvjs_LoadSpaceObjectsCustomMenu(f_div: any): void;
export function cvjs_LoadTopIconMenu(f_div: any): void;
export function cvjs_LoadTopIconMenuXML(f_div: any, cvjsIconMenu: any): void;
export function cvjs_navigationMenuItemHighlight(
    f_div: any,
    placeholder: any,
    highlight_any_id: any,
    cvjs_language_popup: any,
    displayflag: any,
): void;
export function cvjs_allowFileLoadToServer(mode: boolean): void;
export function cvjs_setCustomCallbackMethodOnLoadEnd(callbackMethodOnLoadEnd: boolean, myOnLoadEndMethod: any): void;
export function cvjs_setLooperPosition(): void;
export function cvjs_zoomZeroWidth(): void;
export function cvjs_initZeroWidthHandling(f_div: string, scale_factor: number): void;
export function cvjs_rotateForward(f_div: string): void;
export function cvjs_rotateBackward(f_div: string): void;
export function cvjs_rotateAngle(angle: number, f_div: string): void;
export function cvjs_interactiveSearchText(f_div: string): void;
export function cvjs_interactiveSearchText_zoomLevel(zoomlevel: any): void;
export function cvjs_exitSearchTextModal(): void;
export function cvjs_searchText(textString: any, zoomFactor: number): void;
export function cvjs_searchTextInstance(textString: any, zoomFactor: number, textInstance: number): boolean;
export function cvjs_calibrateMeasurement_RedlinePolyline(): void;
export function cvjs_Measurement_RedlinePolyline(): void;
export function cvjs_closeAreaMeasurement(): void;
export function cvjs_setPrintModalCustomCheckBox(mode: boolean, print_modal_custom_checkbox: string): void;
export function cvjs_setPrintModalCustomCheckBoxFromFile(mode: boolean, print_modal_custom_checkbox: string): void;
export function cvjs_setPrintModalCustomDualTextBox(mode: boolean, custom_checkbox_variables_list_filename: any): void;
export function cvjs_setPrintModalCustomTextBox(mode: boolean, print_modal_custom_checkbox_variables_list: any): void;
export function cvjs_setPrintModalCustomDualTextBoxFromFile(
    mode: boolean,
    custom_checkbox_variables_list_filename: any,
): void;
export function cvjs_setPrintModalCustomTextBoxFromFile(
    mode: boolean,
    custom_checkbox_variables_list_filename: any,
): void;
export function cvjs_GetURLParameter(sParam: string): string;
export function cvjs_PrintToPDFWindowRelativeSize(factor: number): void;
export function cvjs_setFileModalEditMode(mode: boolean): void;
export function cvjs_setPrintPaperSizeasSVGObject(mode: boolean): void;
export function cvjs_printPaperSizeasSVGObject(f_div: any): void;
export function cvjs_superimposeBackgroundDrawing_PrintOutputAtDualTextbox(
    f_div: string,
    backgroundDrawing: string,
    top: number,
    bottom: number,
    left: number,
    right: number,
): void;
export function cvjs_superimposeBackgroundDrawing_PrintOutputAtZoom(
    f_div: string,
    backgroundDrawing: string,
    top: number,
    bottom: number,
    left: number,
    right: number,
): void;
export function cvjs_Settings(f_div: string): void;
export function cvjs_exitSettingsModal(f_div: any, flag: any): void;
export function cvjs_setCurrentLanguage(f_div: string, language: number): void;
export function cvjs_copyMeasurementField(f_div: string): void;
export function cvjs_spaceObjectsInitSettingsModal(f_div: any): void;
export function cvjs_exitSpaceObjectsInitSettingsModal(): void;
export function cvjs_continueCreateSpaceObjects(): void;
export function cvjs_spaceObjectsChangeSettingsModal(f_div: any): void;
export function cvjs_exitSpaceObjectsChangeSettingsModal(): void;
export function cvjs_updateChangeSpaceObjects(): void;
export function cvjs_unlinkChangeSpaceObjects(): void;
export function cvjs_setCustomToolTip(customtooltip: boolean): void;
export function cvjs_showToolTipLocation(tiptext: string, x: number, y: number): void;
export function cvjs_hideToolTip(): void;
export function cvjs_displayCustomToolTip(id: string): any;
export function cvjs_setCustomToolTipValue(id: string, contentArr: any): void;
export function cvjs_searchReplaceText(textString: any, replaceString: string): void;
export function cvjs_openHyperlinkInNewWindow(openLinkFlag: boolean, windowWidth: number, windowHeight: number): void;
export function cvjs_getSpaceObjectIdList(): any;
export function cvjs_getSpaceObjectNamesList(): any;
export function cvjs_getSpaceObjectTypefromId(Id: string): string;
export function cvjs_getSpaceObjectNodefromId(Id: string): any;
export function cvjs_getSpaceObjectNamefromId(Id: string): any;
export function cvjs_getSpaceObjectIdfromNode(nodeId: any): any;
export function cvjs_getSpaceObjectNamefromNode(nodeId: any): any;
export function cvjs_getAttributeStatus(nodeId: any): any;
export function cvjs_setAttributeStatus(nodeId: any, attributeStatus: string): void;
export function cvjs_getAttributeFromSpaceObjectNode(nodeId: any, attributeName: any): any;
export function cvjs_setAttributeInSpaceObjectNode(nodeId: any, attributeName: any, attributeValue: any): void;
export function cvjs_newLayer(layer: string): any;
export function cvjs_newLayerDiv(layer: string, f_div: string): any;
export function cvjs_clearLayer(layer: string): string;
export function cvjs_clearLayerDiv(layer: string, f_div: string): void;
export function cvjs_clearTextLayer(layer: string): void;
export function cvjs_sortLayersInOrder(layer1: string, layer2: string): boolean;
export function cvjs_sortLayers_prepend(layer1: string, layer2: string): boolean;
export function cvjs_sortLayers_insertAfter(layer1: string, layer2: string): boolean;
export function cvjs_AllGroupsOn(): void;
export function cvjs_AllGroupsOff(): void;
export function cvjs_GroupOn(group: any): void;
export function cvjs_GroupOn_OthersOff(group: any): void;
export function cvjs_GroupOn_AllOff(group: any): void;
export function cvjs_GroupOff(group: any): void;
export function cvjs_ApplyPatternOnSpaceObjectId(
    layer: string,
    Id: string,
    graphicalPattern: string,
    colorHex: string,
    fillOpacity: number,
): void;
export function cvjs_ApplyPatternOnSpaceObjectNode(
    layer: string,
    nodeId: string,
    graphicalPattern: string,
    colorHex: string,
    fillOpacity: number,
): void;
export function cvjs_ApplyPatternOnUrl(
    layer: string,
    nodeId: string,
    graphicalPattern: string,
    colorHex: string,
    fillOpacity: number,
): void;
export function cvjs__ApplyPatternOnObject_layerSort(
    layer: any,
    nodeId: any,
    graphicalPattern: any,
    colorHex: any,
    fillOpacity: any,
    layer2: any,
    nodetype: any,
): 1 | -1;
export function cvjs_setUpPattern_45degree_standard(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_45degree_wide(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_45degree_fine(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_90degree_fine(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_90degree_standard(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_90degree_wide(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_135degree_standard(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_135degree_wide(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_135degree_fine(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_0degree_standard(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_0degree_wide(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_0degree_fine(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_45degree_crosshatch_standard(colorHex: any, patternOpacity: any): void;
export function cvjs_setUpPattern_45degree_crosshatch_fine(colorHex: any, patternOpacity: any): void;
export function cvjs_ApplyRelativeLinearGradientStandard2Colors(
    graphicalObject: any,
    startColor: any,
    endColor: any,
    fillOpacity: any,
): void;
export function cvjs_ApplyRelativeLinearGradientStandard3Colors(
    graphicalObject: any,
    startColor: any,
    middleColor: any,
    endColor: any,
    fillOpacity: any,
): void;
export function cvjs_ApplyRelativeLinearGradient(
    graphicalObject: any,
    xStart: any,
    yStart: any,
    xEnd: any,
    yEnd: any,
    startColor: any,
    middleColor: any,
    endColor: any,
    fillOpacity: any,
): void;
export function cvjs_ApplyRelativeLinearGradientStandard2ColorsOnSpaceObjectId(
    layer: string,
    Id: string,
    startColor: string,
    endColor: string,
    fillOpacity: number,
): void;
export function cvjs_ApplyRelativeLinearGradientStandard2ColorsOnSpaceObjectNode(
    layer: string,
    nodeId: string,
    startColor: string,
    endColor: string,
    fillOpacity: number,
): void;
export function cvjs_ApplyRelativeLinearGradientStandard3ColorsOnSpaceObjectId(
    layer: string,
    Id: string,
    startColor: string,
    middleColor: string,
    endColor: string,
    fillOpacity: number,
): void;
export function cvjs_ApplyRelativeLinearGradientStandard3ColorsOnSpaceObjectNode(
    layer: string,
    nodeId: string,
    startColor: string,
    middleColor: string,
    endColor: string,
    fillOpacity: number,
): void;
export function cvjs_ApplyRelativeRadialGradientStandard2Colors(
    graphicalObject: any,
    startColor: any,
    endColor: any,
    fillOpacity: any,
): void;
export function cvjs_ApplyRelativeRadialGradientStandard3Colors(
    graphicalObject: any,
    startColor: any,
    middleColor: any,
    endColor: any,
    fillOpacity: any,
): void;
export function cvjs_ApplyRelativeRadialGradient(
    graphicalObject: any,
    xC: any,
    yC: any,
    radius: any,
    startColor: any,
    middleColor: any,
    endColor: any,
    fillOpacity: any,
): void;
export function cvjs_ApplyRelativeRadialGradientStandard2ColorsOnSpaceObjectId(
    layer: string,
    Id: string,
    startColor: string,
    endColor: string,
    fillOpacity: number,
): void;
export function cvjs_ApplyRelativeRadialGradientStandard2ColorsOnSpaceObjectNode(
    layer: string,
    nodeId: string,
    startColor: string,
    endColor: string,
    fillOpacity: number,
): void;
export function cvjs_ApplyRelativeRadialGradientStandard3ColorsOnSpaceObjectId(
    layer: string,
    Id: string,
    startColor: string,
    middleColor: string,
    endColor: string,
    fillOpacity: number,
): void;
export function cvjs_ApplyRelativeRadialGradientStandard3ColorsOnSpaceObjectNode(
    layer: string,
    nodeId: string,
    startColor: string,
    middleColor: string,
    endColor: string,
    fillOpacity: number,
): void;
export function cvjs_setCallbackForModalDisplay(
    callbackForModalDisplay: any,
    customModalPopUpBody: any,
    populateMyCustomPopUpBody: any,
): void;
export function cvjs_setCreationMode(cvjs_supressPopUp: boolean, cvjs_creationMode: boolean, excludeID: string): void;
export function cvjs_setNoModalMode(cvjs_modalMode: boolean): void;
export function cvjs_setCustomModalsContent(hbody: string, dual_body_flag: any, hbody2: string): void;
export function cvjs_setStickyNoteText(text: any): void;
export function cvjs_setStickyNoteEditText(text: any): void;
export function cvjs_showIconnoteTip(tipText: any, icon: any, n_index: any): void;
export function cvjs_showStickynoteTip(
    tipText: any,
    icon: any,
    n_index: any,
    postfix: any,
    myStickNoteQtipDiv: any,
): void;
export function cvjs_currentMaxSpaceNodeId(): string;
export function cvjs_currentMaxNodeId(): string;
export function cvjs_addUserIdToHiddenRedlineUsers(userId: string): void;
export function cvjs_addUserIdToLockedRedlineUsers(userId: string): void;
export function cvjs_clearAllRedlineHiddenUsers(): void;
export function cvjs_clearAllRedlineLockedUsers(): void;
export function cvjs_getRedlineHiddenUsersList(): string;
export function cvjs_getRedlineLockedUsersList(): string;
export function cvjs_getAllRedlines_UserIdList(): string;
export function cvjs_getAllRedlines_TextList(): string;
export function cvjs_hideAllRedlines_ExceptUser(userId: string): void;
export function cvjs_lockAllRedlines_ExceptUser(userId: string): void;
export function cvjs_hideAllRedlines_ExceptCurrentUser(): void;
export function cvjs_lockAllRedlines_ExceptCurrentUser(): void;
export function cvjs_hideAllRedlines_HiddenUsersList(): void;
export function cvjs_lockAllRedlines_LockedUsersList(): void;
export function cvjs_setCurrentSpaceObjectNodeValues(jsonObject: any): void;
export function cvjs_setCurrentStickyNoteValues(
    node: string,
    name: string,
    id: string,
    layer: string,
    group: string,
    text: string,
    userid: string,
    date: string,
    linked: boolean,
): void;
export function cvjs_setCurrentStickyNoteValues_NameUserId(
    currentStickyNote_name: string,
    currentStickyNote_userid: string,
): void;
export function cvjs_setCurrentStickyNoteValues_NameUserIdDate(
    currentStickyNote_name: string,
    currentStickyNote_userid: string,
    currentStickyNote_date: string,
): void;
export function cvjs_setCurrentRedlineValues_NameUserid(
    currentRedline_username: string,
    currentRedline_userid: string,
): void;
export function cvjs_setCurrentRedlineValues_Userid(currentRedline_userid: string): void;
export function cvjs_setCurrentRedlineValues_ColorStokeWidth(
    currentRedline_color: string,
    currentRedline_strokeWidth: any,
): void;
export function cvjs_setCurrentRedlineValues_Color(currentRedline_color: string): void;
export function cvjs_setCurrentRedlineValues_StokeWidth(currentRedline_strokeWidth: any): void;
export function cvjs_setCurrentRedlineValues_StrokeWidth(currentRedline_strokeWidth: any): void;
export function cvjs_setCurrentNodeValuesFromExistingNode(cNode_underbar: any): void;
export function cvjs_addVqRoomsGraphics_newNode_polygon(cvjs_cNode_underbar: any, graphicsObject: any): void;
export function cvjs_addVqRoomsGraphics_newNode_circle(cvjs_cNode_underbar: any, graphicsObject: any): void;
export function cvjs_addVqStickyNotesGraphics_newNode(cvjs_cNode_underbar: any, graphicsObject: any): void;
export function cvjs_addVqRedlinesGraphics_newNode(cvjs_currentRedline_underbar: any, graphicsObject: any): void;
export function cvjs_addVqRedlinesGraphics_newNodeFill(
    cvjs_currentRedline_underbar: any,
    graphicsObject: any,
    R_fill: any,
    R_opacity: any,
): void;
export function cvjs_addVqRedlinesGraphics_newNodeTrans(
    cvjs_currentRedline_underbar: any,
    graphicsObject: any,
    transform: any,
    triangle_design: any,
    polypath_arrow: any,
): void;
export function cvjs_addVqRedlinesGraphics_newNodeText(
    cvjs_currentRedline_underbar: any,
    graphicsObject: any,
    transform: any,
    textString: any,
    redline_font_size: any,
): void;
export function cvjs_setUpVqRooms_currentNode(paper: any, cvjs_cNode_underbar: any): void;
export function cvjs_setUpVqStickyNotes_cNode_vqIndex(
    paper: any,
    cvjs_cNode_underbar: any,
    vqindex: any,
    passedoverInstance: any,
): void;
export function cvjs_setUpVqStickyNotes_cNode_vqIndex_passedInstance(
    paper: any,
    cvjs_cNode_underbar: any,
    vqindex: any,
    passedoverInstance: any,
): void;
export function cvjs_setUpVqStickyNotes_currentNode(paper: any, cvjs_cNode_underbar: any): void;
export function cvjs_setUpVqStickyNotes_cNode_PageChange(paper: any, cvjs_cNode_underbar: any, vqindex: any): void;
export function cvjs_setUpVqRooms_deleteNode(node: any): void;
export function cvjs_setUpStickyNotes_deleteNode(delete_note: any): void;
export function cvjs_StickyNotes_arrayIndex(noteUnderbar: any): string | -1;
export function cvjs_drawSpaceObject_Circle(): void;
export function cvjs_drawSpaceObject_RedlineCloud(): void;
export function cvjs_addRectangleCustomSpaceObject(
    f_div: string,
    svgImagePath: string,
    spaceObjectId: string,
    spaceObjectName: string,
    spaceObjectType: string,
    spaceObjectLayer: any,
): void;
export function cvjs_drawSpaceObject_CustomRectangle(
    svgImagePath: any,
    spaceObjectId: any,
    spaceObjectName: any,
    spaceObjectType: any,
): void;
export function cvjs_drawSpaceObject_Rectangle(): void;
export function cvjs_drawSpaceObject_RedlineRectangle(): void;
export function cvjs_drawSpaceObject_RedlineEllipseCloud(): void;
export function cvjs_drawSpaceObject_RedlineEllipse(): void;
export function cvjs_drawSpaceObject_FilledRedlineRectangle(): void;
export function cvjs_dynamicResizeTextOnSpaceObject(nodeUnderbar: string): void;
export function cvjs_dynamicResizeTextOnSpaceObject_Name(name: string): void;
export function cvjs_dynamicResizeTextOnSpaceObject_Id(id: string): void;
export function cvjs_resetTextOnSpaceObject(nodeUnderbar: string): void;
export function cvjs_resetTextOnSpaceObject_Name(name: any): void;
export function cvjs_resetTextOnSpaceObject_Id(id: any): void;
export function cvjs_drawSpaceObject_Polygon(): void;
export function cvjs_drawSpaceObject_RedlinePolyline(): void;
export function cvjs_drawSpaceObject_RedlineArrowPolyline(): void;
export function cvjs_drawSpaceObject_RedlineFilledPolygon(): void;
export function cvjs_setUpVqRedlines_currentNode(rPaper: any, cvjs_currentRedline_underbar: any): void;
export function cvjs_setUpVqRedlines_deleteNode(delete_redline: any): void;
export function cvjs_drawSpaceObject_CopyCircle(): void;
export function cvjs_drawStickyNoteDirect(): void;
export function cvjs_setCallbackMeasurement(callbackMode: boolean): void;
export function cvjs_insertRedlineText(textString: any, fontSize: any): void;
export function cvjs_changeNextIconPage(f_div: any): void;
export function cvjs_changePreviousIconPage(f_div: any): void;
export function cvjs_changeToIconPage(pageNr: any, f_div: any): void;
export function cvjs_setIconInterfaceControls_ViewingOnly(f_div: string): void;
export function cvjs_setIconInterfaceControls_SpaceManagement(f_div: string): void;
export function cvjs_setIconInterfaceControls_ImageInsert(): void;
export function cvjs_initiateInsertRedlineText(f_div: any): void;
export function cvjs_insertImageLink(f_div: string): void;
export function cvjs_setCallbackQuickCount(callbackMode: boolean): void;
export function cvjs_showMeCounts(f_div: string): void;
export function cvjs_clearQuickCounts(f_div: string): void;
export function cvjs_quickCount(f_div: string): void;
export function cvjs_exitQuickCount(f_div: string): void;
export function cvjs_setSpacePolygonOnLayer(f_div: string): void;
export function cvjs_findSVGcoordinate_setPolygonOnLayer(): void;
export function cvjs_combineRoomTextlayer(): void;
export function cvjs_getSizeOfLinkedObjects(): any;
export function cvjs_createSpaceLocationArrays(nameArray: any, idArray: any): void;
export function cvjs_createDataMapsHeaders(headerArray: any): void;
export function cvjs_OnLoadEndCompareDrawings(): boolean;
export function cvjs_setCompareDrawings_LoadSecondDrawingDirect(f_div: string, fileName: string): void;
export function cvjs_setCompareDrawings_StandardModal(f_div: string): void;
export function cvjs_compareDrawings_LoadSecondDrawing(f_div: string): void;
export function cvjs_compareDrawings_ToggleDrawingOverlay(f_div: string): void;
export function cvjs_compareDrawings_ToggleDrawings(f_div: string): void;
export function cvjs_exitCompareDrawings(f_div: string): void;
export function cvjs_setCollaborationSessionName(session_name: any): void;
export function cvjs_setCollaborationServerUrl(url_name: string): void;
export function cvjs_setCollaborationServerFolder(server_path: string): void;
export function cvjs_collab_timer(): void;
export function cvjs_start_collab(f_div: string): void;
export function cvjs_start_collab_button(f_div: any): void;
export function cvjs_stop_collab(f_div: string): void;
export function cvjs_clear_collab_redline(f_div: string): void;
export function cvjs_make_collab_presenter(f_div: string): void;
export function cvjs_downloadFile(filePath: any): void;
export function cvjs_SVGtoOriginal_X_coord(x: any, page: any): number;
export function cvjs_SVGtoOriginal_Y_coord(y: any, page: any): number;
export function cvjs_InitializeSVGHyperlinkClick(f_div: string): void;
export function cvjs_colorSingleSVGHyperlink(hyperlinkId: string, hyperFill: string, hyperOpacity: number): void;
export function cvjs_resetSVGHyperlinkColors(): void;
export function cvjs_makeLegendUpperRight(
    x: any,
    y: any,
    layer: any,
    hS: any,
    hTxt: any,
    hStyle: any,
    hCol: any,
    lS: any,
    lTxt: any,
    lStyle: any,
    ltxtCol: any,
    lCol: any,
    hlt: any,
): void;
export function cvjs_changeText_On_BlockHandle(handle: string, textArr: any): void;
export function cvjs_changeText_On_BlockHandleDiv(handle: string, textArr: any, f_div: string): boolean;
export function cvjs_makeStampUpperRight(
    x: number,
    y: number,
    layer: string,
    hS: number,
    hT: any,
    hStyle: any,
    hCol: string,
    lS: number[],
    lText: any,
    lStyle: any,
    lCol: any,
    fCol: string,
): void;
export function cvjs_saveStamp(fileName: string, f_div: string, layer: any): void;
export function cvjs_saveCustomSVGLayer(fileName: string, f_div: string, layer: any, custom_content: any): void;
export function cvjs_saveFloorplanAsPDF(fileName: string, f_div: string, custom_content: any): void;
export function cvjs_saveFloorplanAsPDFtoSharePoint(
    fileName: string,
    f_div: string,
    sharepointFolder: string,
    sharepointUserName: string,
    custom_content: any,
): void;
export function cvjs_saveFloorplanAsSVG(fileName: string, f_div: string, custom_content: any): void;
export function cvjs_mergePDFwithRedlines(filePath: string, urlPath: string, fileName: string, f_div: string): void;
export function cvjs_loadStamp(fileName: string, f_div: string, layer: any): void;
export function cvjs_loadCustomSVGLayer(fileName: string, f_div: string, layer: any): void;
export function cvjs_LoadDrawingAborted(f_div: any, fileName: any): void;
export function cvjs_hideNavigationMenu(mydiv: string): void;
export function cvjs_checkRoomHandleDiv(rmid: string, f_div: string): boolean;
export function cvjs_checkBlockHandleDiv(handle: string, f_div: string): boolean;
export function cvjs_getStickyNoteInfo(): string;
export function cvjs_saveStickyNoteInfo(fileName: string, f_div: string, custom_content: any): void;
export function cvjs_publishPDF(f_div: string): void;
export function cvjs_mergeDXFDWG(f_div: string): void;
export function cvjs_mergeDXFViaButton(f_div: any): void;
export function cvjs_saveScreenAsMergedDXF(f_div: any, mode: any, custom_content: any): void;
export function cvjs_publishPDFViaButton(f_div: any): void;
export function cvjs_saveScreenAsPDF_uploadServer(
    pageOrientation: string,
    pageSize: string,
    pageResolution: string,
    f_div: string,
): void;
export function cvjs_saveScreenAsPDF_email(
    pageOrientation: string,
    pageSize: string,
    pageResolution: string,
    f_div: string,
): void;
export function cvjs_printSavedBitmapToPDF_uploadServer(): void;
export function cvjs_printSavedBitmapToPDF_email(): void;
export function cvjs_printScreenAsPDFwithRedlines(f_div: string, custom_content: any): void;
export function cvjs_initializeFileSelector(): void;
export function cvjs_setModalSingleFileItems(number: any): void;
export function cvjs_initializeAllFileSelectorDivs(f_div: any): void;
export function cvjs_add_file_any(myElement: any): void;
export function cvjs_setServerFileLocation(
    myServerPathToFloorplans: string,
    floorplanPath: string,
    floorplanUrl: string,
    username: string,
    password: string,
): void;
export function cvjs_setServerFileLocation_AbsolutePaths(
    myServerPathToFloorplans: string,
    floorplanUrl: any,
    username: string,
    password: string,
): void;
export function cvjs_exitServerFileLoadModal(): void;
export function cvjs_callServerForDataOverlayProcessing(): void;
export function cvjs_loadFileWithDataOverlays(fileName: any, row: any): void;
export function cvjs_loadBitmapsViaServerPath(mode: boolean): void;
export function cvjs_openFileLoadToServer(f_div: string): void;
export function cvjs_setFileLoadTrialMode(loadMode: any): void;
export function cvjs_loadServerFileList(mode: any): void;
export function cvjs_setRedlinesRelativePath(path: string, serverPath: string, dynamicPathFlag: boolean): void;
export function cvjs_setRedlinesAbsolutePath(path: string, serverPath: string, dynamicPathFlag: boolean): void;
export function cvjs_openSpaceObjectSaveModal(f_div: any): void;
export function cvjs_openRedlineSaveModal(f_div: any): void;
export function cvjs_openRedlineLoadModal(f_div: any): void;
export function cvjs_toggleBlackWhite(f_div: any): void;
export function cvjs_colorAllLayersInDrawing_OriginalColor_SVG(f_div: any): void;
export function cvjs_colorAllLayersInDrawing_InvertBackground_SVG(hexColor: any, bwMode: any, f_div: any): void;
export function cvjs_storeFillColors(): void;
export function cvjs_colorAllLayersInDrawing(f_div: any, hexColor: string): void;
export function cvjs_colorAllLayersInDrawing_InvertBackground(hexColor: any, f_div: any): void;
export function cvjs_setInsertImageObjectsRelativePath(path: string, serverPath: string): void;
export function cvjs_setInsertImageObjectsAbsolutePath(path: string, serverPath: string): void;
export function cvjs_setInsertImageObjectsAbsolutePath_FileName(
    path: string,
    serverPath: string,
    fileName: string,
): void;
export function cvjs_add_image(): void;
export function cvjs_loadAllImageLinks(f_div: string, custom_content: any): void;
export function cvjs_loadImageObjectTimer(): void;
export function cvjs_addInlineScript(cvjs_script: any): void;
export function cvjs_saveAllImageLinks(f_div: string, custom_content: any): void;
export function cvjs_clearAllImageLinks(f_div: string): void;
export function cvjs_loadDrawingsWithSpaceObjects(f_div: string): void;
export function cvjs_conversion_cleanFilesDirectory(): void;
export function cvjs_setSpaceObjectUserMode(mode: any): void;
export function cvjs_addRectangleSpaceObject(f_div: string): void;
export function cvjs_addRectangleSpaceObjectCore(f_div: any): void;
export function cvjs_addPolygonSpaceObject(f_div: string): void;
export function cvjs_addPolygonSpaceObjectCore(f_div: any): void;
export function cvjs_addCircleSpaceObject(f_div: string): void;
export function cvjs_addCircleSpaceObjectCore(f_div: any): void;
export function cvjs_copyCircleSpaceObject(f_div: string): void;
export function cvjs_clearSpaceObjects(f_div: string): void;
export function cvjs_deleteSpaceObject(f_div: string): void;
export function cvjs_changeSpaceObjectDisplayMode(f_div: string, displayModal: boolean): void;
export function cvjs_change_space(rmid: any): void;
export function cvjs_displaySpaceObjectsStructure(f_div: string): void;
export function cvjs_displaySpaceObjectsStructureInternal(
    f_div: any,
    userSiteName: any,
    dropFloor: any,
    dropFloorList: any,
    myCustomFunction: any,
): void;
export function cvjs_spaceObjectSettings(f_div: string): void;
export function cvjs_spaceObjectInputPanel(f_div: any, custom_content: any): void;
export function cvjs_addCircleAccessPointObject(): void;
export function cvjs_setLanguageIndexIncrement(): void;
export function cvjs_setLanguageIndex(languageIndex: any): void;
export function cvjs_ajaxPostCallbackVariable_thumbNails(callbackStatus: boolean): void;
export function cvjs_emailSettings_PDF_publish(
    from_name: string,
    from_mail: string,
    cc_mail: string,
    replyto: string,
): void;
export function cvjs_emailScreenAsPDFwithRedlines(f_div: string, custom_content: any): void;
export function cvjs_dragBackgroundToFront_SVG(f_div: string): void;
export function cvjs_dragBackgroundToBack_SVG(f_div: string): void;
export function cvjs_saveAsSVG(f_div: string): void;
export function cvjs_download_link(filename: any, filelocation: any): void;
export function cvjs_saveAsSVGOnServer(f_div: string, FileLocation: string, custom_content: any): void;
export function cvjs_getStickyNotesRedlineXML(stickynote_flag: boolean): string;
export function cvjs_getCurrentMeasurementUnit(): string;
export function cvjs_getSvgToWorldUnits(): number;
export function cvjs_setCurrentMeasurementUnits(f_div: string, units: string, svgToWorldUnit: number): void;
export function cvjs_resetInitialization_FloorplanDiv(): void;
export function cvjs_setDragBackgroundOnTop(f_div: string): void;
export function cvjs_setDragBackgroundToBack(f_div: string): void;
export function cvjs_creation_modal_show(f_div: any): void;
export function cvjs_creation_modal_hide(f_div: any): void;
export function cvjs_showCreationModeModal(f_div: any): void;
export function cvjs_drawEllipseViaButton(f_div: any): void;
export function cvjs_ellipse_modal_hide(f_div: any): void;
export function cvjs_drawRedlineEllipseCloud(f_div: any): void;
export function cvjs_buildFolderTree(FileLocation: string, DocumentLocation: string, f_div: string): string;
export function cvjs_CleanLayout(f_div: any): void;
export function cvjs_selectPageFromList(f_div: any): void;
export function cvjs_custom_jsTreeSelection(data: any, datalength: any): void;
export function cvjs_update_done_edit_location_fields(rmid: any): void;
export function cvjs_draw_space_any_names_on_spaces(): void;
export function cvjs_connectTextInstances(
    textString1: any,
    textInstance1: number,
    textString2: any,
    textInstance2: any,
    lengthfactor1: number,
    lengthfactor2: number,
): void;
export function cvjs_floodfill(
    cvjs_ctx: any,
    canv_width: any,
    canv_height: any,
    widthHeightFactorSVG: any,
    widthHeightFactorSVGless1: any,
): void;
export function cvjs_floodfillWrapper(
    x: any,
    y: any,
    text: any,
    canv_width: any,
    canv_height: any,
    cvjs_ctx: any,
    sizeWidth: any,
    sizeHeight: any,
): void;
export function cvjs_pngForSVG(htmlPrintFile: any): void;
export function cvjs_addPinMarker(
    f_div: string,
    spaceObjectId: string,
    spaceObjectName: string,
    spaceObjectType: string,
    spaceObjectLayer: any,
): void;
export function cvjs_drawSpaceObject_PinMarker(spaceObjectId: any, spaceObjectName: any, spaceObjectType: any): void;
export function cvjs_PinMarker(): void;
export function cvjs_mergeQR(f_div: any, custom_content: any): void;
export function cvjs_CompareFiles_setFileModalContent(custom_modal_dir_listing: any, floorPlan_div: string): void;
export function cvjs_createSpaceOutput_JSfile_Legacy(): string;
export function cvjs_createSpaceOutput_JSfile(): string;
export function cvjs_loadSpaceObjectsUser(f_div: any): void;
export function cvjs_setSpaceObjectsAbsolutePath(path: string, serverPath: string): void;
export function cvjs_setSpaceObjectUrl(file: string): void;
export function cvjs_loadSpaceObjects(f_div: string, custom_content: any): void;
export function cvjs_supressPopUpModalMode(modal_mode: boolean): void;
export function cvjs_supressSingleSpaceHighlight(modal_mode: boolean): void;
export function cvjs_addSpaceObjectDirectXY(
    f_div: string,
    path: string,
    jsonObject: any,
    c_flag: number,
    txt: any,
    sf: number,
    col: any,
    txtst: any,
    scl: any,
    tcol: any,
    left: number,
): void;
export function cvjs_addFixedSizeCustomSpaceObjectXY(
    f_div: string,
    image: string,
    jsonObject: any,
    c_flag: number,
    txt: any,
    scale: number,
    styles: any,
    tscale: any,
    col: any,
    left: number,
): void;
export function cvjs_moveFixedSizeCustomSpaceObjectXY(
    f_div: string,
    spaceObjectId: string,
    xcor: number,
    ycor: number,
): void;
export function cvjs_addFixedSizeCustomSpaceObject(
    f_div: string,
    svgImagePath: string,
    spaceObjectId: string,
    spaceObjectName: string,
    spaceObjectType: string,
    spaceObjectLayer: any,
): void;
export function cvjs_drawSpaceObject_FixedSize(
    svgImagePath: any,
    spaceObjectId: any,
    spaceObjectName: any,
    spaceObjectType: any,
): void;
export function cvjs_deleteSpaceImageObject(f_div: string): void;
export function cvjs_rotateSpaceObject(f_div: string): void;
export function cvjs_moveSpaceObject(f_div: string): void;
export function cvjs_resizeSpaceObject(f_div: string): void;
export function cvjs_resizeSpaceImageObject(f_div: string): void;
export function cvjs_resizeSpaceImageObject_core(f_div: any): void;
export function cvjs_addFixedSizeImageSpaceObjectXY(f_div: string, xcor: number, ycor: number): void;
export function cvjs_addFixedSizeImageSpaceObject_GlobalXY(f_div: string, xcor: number, ycor: number): void;
export function cvjs_addFixedSizeImageSpaceObject(f_div: string): void;
export function cvjs_addDragRectangleImageSpaceObject(f_div: string): void;
export function cvjs_initCADViewerPro_Section02(f_div: string): void;
export function cvjs_initCADViewerPro_Section03(f_div: string): void;
export function cvjs_initCADViewerPro_FileLoadModal(f_div: string): void;
export function cvjs_getStickyNotesRedlineDXF(): string;
export function cvjs_getStickyNotesRedlineJS(): string;
export function cvjs_getStickyNotesRedline(): string;
export function cvjs_saveSpaceObjects(f_div: string, filepath: string, custom_content: any): void;
export function cvjs_saveStickyNotesRedlines(f_div: string, display_modal: boolean, custom_content: any): void;
export function cvjs_drawRedline__Freehand(): void;
export function cvjs_setRedlineColor(f_div: string): void;
export function cvjs_color_modal_hide(f_div: any): void;
export function cvjs_setPublishPDF(f_div: string): void;
export function cvjs_publishPDF_modal_hide(f_div: any): void;
export function cvjs_setMergeDXF(f_div: string): void;
export function cvjs_mergeDXF_modal_hide(f_div: any): void;
export function cvjs_setGenericColor(): void;
export function cvjs_setRedlineThickness(f_div: string): void;
export function cvjs_setRedlineColorViaButton(f_div: any): void;
export function cvjs_setRedlineColorFromPicker(pickcolor: any): void;
export function cvjs_setRedlineThicknessViaButton(f_div: any): void;
export function cvjs_drawRedlineRectangle(f_div: string): void;
export function cvjs_drawRedlineTriangle(f_div: string): void;
export function cvjs_drawRedlineFilledRectangle(f_div: string): void;
export function cvjs_drawRedlineCloud(f_div: string): void;
export function cvjs_drawRedlineEllipse(f_div: string): void;
export function cvjs_drawRedlinePolyline(f_div: string): void;
export function cvjs_drawRedlineFilledPolygon(f_div: string): void;
export function cvjs_drawRedlineArrow(f_div: string): void;
export function cvjs_drawRedlineText(f_div: string): void;
export function cvjs_hide_redline_text_modal(f_div: any): void;
export function cvjs_setStickyNoteRedlineUrl(file: string): void;
export function cvjs_setStickyNoteSaveRedlineUrl(file: string): void;
export function cvjs_drawRedline_Freehand(f_div: string): void;
export function cvjs_drawRedline_Freehand_globalColorWidth(): void;
export function cvjs_drawRedline_Freehand_setValues(): void;
export function cvjs_drawStickyNote_setValues(): void;
export function cvjs_drawStickyNote(f_div: string): void;
export function cvjs_deleteLastRedline(f_div: string): void;
export function cvjs_undoDeleteLastRedline(f_div: string): void;
export function cvjs_deleteAllRedlines(): void;
export function cvjs_deleteAllStickyNotes(): void;
export function cvjs_loadStickyNotesRedlines(f_div: string, custom_content: any): void;
export function cvjs_loadStickyNotesRedlinesTimer(): void;
export function cvjs_deleteSingleRedline(f_div: string): void;
export function cvjs_saveScreenAsImage_UploadSharepointListItem(
    serverPath: any,
    image_fileName: any,
    user_name: any,
    list_name: any,
    record_id: any,
): void;
export function cvjs_batchConvertDrawingsToPDF(
    drawingFilesArray: any,
    pageOrint: any,
    pageSize: any,
    pageRes: any,
): void;
export function cvjs_batchConvertOnLoadEndCustomMethod(): void;
export function cvjs_clearDrawingSpaceObjects(): void;
export function cvjs_clearDrawing(): void;
export function cvjs_clearDrawingStickyNotes(): void;
export function cvjs_clearDrawingHyperlinks(): void;
export function cvjs_clearDrawingRedlines(): void;
export function cvjs_updateDrawingRedlines(redlineStickyNoteLayer: any): void;
export function cvjs_clearAllDrawing(): void;
export function cvjs_highlightURL(urlid: any, roomstyle: any, layer: string): void;
export function cvjs_highlightURL_layersort(rmid: any, roomstyle: any, layer: any, layer2: any): 1 | -1;
export function cvjs_highlightRoomCSS(rmid: any, roomstyle: any): void;
export function cvjs_highlightAllSpaceObjects(roomstyle: any, layer: string): void;
export function cvjs_highlightAllRooms_layer(roomstyle: any, layer: any): void;
export function cvjs_highlightSpaceObjectIdDiv(rmid: string, roomstyle: any, layer: string, f_div: string): void;
export function cvjs_highlightSpaceObjectId(rmid: string, roomstyle: any, layer: string): void;
export function cvjs_highlightRoomCSS_layer(rmid: string, roomstyle: any, layer: string): void;
export function cvjs_highlightRoomCSS_layersortDiv(rmid: string, roomstyle: any, layer: string, f_div: string): boolean;
export function cvjs_highlightRoomCSS_layersort(rmid: string, roomstyle: any, layer: string, layer2: string): 1 | -1;
export function cvjs_highlightSpaceBorderCSS_layersortDiv(
    rmid: string,
    roomstyle: any,
    layer: string,
    f_div: string,
    lineWeightFactor: number,
): boolean;
export function cvjs_highlightSpaceBorderCSS_layersort(
    rmid: any,
    roomstyle: any,
    layer: string,
    layer2: string,
    lineWeightFactor: number,
): 1 | -1;
export function cvjs_highlightFixtureCSS_layersort(
    rmid: any,
    roomstyle: any,
    layer: any,
    layer2: any,
    scale: any,
): 1 | -1;
export function cvjs_highlightRoomRGB(rmid: any, r: any, g: any, b: any): void;
export function cvjs_highlightRoomHex(rmid: any, hex: any): void;
export function cvjs_highlightRoomByIdHex(rmid: any, hex: any): void;
export function cvjs_highlightRoomImmediate(rmid: string, cleardrawing: boolean): string | number;
export function cvjs_highlightRoomImmediateHyperlinks(rmid: any): string | number;
export function cvjs_highlightRoomImmediateStickyNotes(rmid: any): string | number;
export function cvjs_highlightRoomImmediateNoClearDrawing(rmid: any): string | number;
export function cvjs_activateSpaceObjectModal_Id(rmid: string): void;
export function cvjs_activateSpaceObjectModal_Node(node: string): void;
export function cvjs_mysimple_encode(outputstring: any): string;
export function cvjs_setLicenseKeyPath(licensePath: string): void;
export function cvjs_setLicenseKeyDirect(licensekey: string): void;
export function cvjs_checkLicensePreThenLoad(
    f_div: any,
    originatingContent: any,
    originatingFileNameNoExtension: any,
    originatingUsername: any,
    originatingPassword: any,
): void;
export function cvjs_checkLicense(): void;
export function cvjs_LayerListSpaceObject(f_div: string, mode: number): void;
export function cvjs_LayerListSpaceClick(id: any): void;
export function cvjs_LayerTypeSpaceClick(id: any, mode: any): void;
export function cvjs_generateShareFileDrawingList(): void;
export function cvjs_buildShareFileDrawingSelector(): void;
export function cvjs_setQRCodeInsertion(
    PercentXFromLowerLeft: number,
    PercentYFromLowerLeft: number,
    widthPercent: any,
): void;
export function cvjs_setLoadMultipleRedlinesStickyNotes(mode: boolean): void;
export function cvjs_idObjectClicked(): string;
export function cvjs_IdObjectClicked(): string;
export function cvjs_NameObjectClicked(): string;
export function cvjs_NodeObjectClicked(): string;
export function cvjs_StickyNoteClicked(): string;
export function cvjs_resizeWindow_3D(model3D: string, floorplan: string): void;
export function cvjs_hidePop(): any;
export function cvjs_redrawPop(): void;
export function cvjs_pick_space(trigger: any): void;
export function cvjs_zoomHere(): void;
export function cvjs_zoomHere_ObjectId(rmid: string, factor: number): void;
export function cvjs_zoomHere_ObjectIdDiv(rmid: string, factor: number, f_div: string): void;
export function cvjs_zoomHere_Factor(node: string, factor: number): void;
export function cvjs_zoomHere_Handle(handle: string, factor: number, f_div: string): boolean;
export function cvjs_directDownloadStickyNotesRedlines(f_div: string, filename: string): void;
export function cvjs_clickElem(elem: any): void;
export function cvjs_directUploadStickyNotesRedlines(f_div: string): void;
export function cvjs_change_datamaps(mapNr: any): void;
export function cvjs_hide_image_note(imageNote: any): void;
export function cvjs_delete_image(imageNote: any, f_div: any): void;
export function cvjs_setGlobalSpaceImageObjectScaleFactor(factor: number): void;
export function cvjs_setDgnWorkSpace(workspace: string, workspacepath: string): void;
export function cvjs_setDgnWorkSpaceServerPath(workspacepath: string): void;
export function cvjs_addSingleSpaceObject(
    f_div: any,
    name: any,
    id: any,
    layer: any,
    group: any,
    atr: any,
    status: any,
    type: any,
    tags: any,
    occ: any,
    path: any,
): void;
export function cvjs_ObjectBoundingBox_ScreenCoord(rmid: number): any;
export function cvjs_highlightSpaceObjectDirect(f_div: string, anyID: string, colorany: any): void;
export function cvjs_clearHighlightSpaceObjectDirect(f_div: string, anyID: string): void;
export function cvjs_clearAllHighlightSpaceObjectDirect(f_div: string): void;
export function cvjs_modifySpaceObjectDirectXY(
    f_div: string,
    id: string,
    svgImagePath: string,
    texts: any,
    scale: number,
    styles: any,
    scaleText: any,
    colors: any,
    leftFactor: number,
): boolean;
export function cvjs_coreModifySpaceObjectDirectXY(
    xcor: any,
    ycor: any,
    this_Node_underbar: any,
    spaceObjectId: any,
): void;
export function cvjs_moveSpaceObjectDirectXY(
    f_div: string,
    anyID: string,
    coordinate_flag: number,
    xpos: any,
    ypos: any,
): boolean;
export function cvjs_getSpaceObjectDirectXYCoord(f_div: string, anyID: string, coordinate_flag: number): any;
export function cvjs_deleteSpaceObjectDirectXY(f_div: string, anyID: string): boolean;
export function cvjs_allSpaceObjectsOn(f_div: string): void;
export function cvjs_allSpaceObjectsOff(f_div: string): void;
export function cvjs_setSpaceObjectsDefaultLayer(f_div: string, layerName: string): void;
export function cvjs_getSpaceObjectDefaultLayer(f_div: string): string;
export function cvjs_getLayerForSpaceObject(f_div: string, ObjectID: string): string;
export function cvjs_getLayerOnSpaceObject(f_div: any, ObjectID: any): void;
export function cvjs_setSpaceObjectOnLayer(f_div: string, anyID: string, layerName: string): boolean;
export function cvjs_setSpaceObjectOnOff(f_div: string, anyID: string, displayStatus: string): boolean;
export function cvjs_returnAllSpaceObjectsOnLayer(f_div: string, layerName: string): any;
export function cvjs_spaceObjectLayerOnOff(f_div: string, layerName: string, displayStatus: string): void;
export function cvjs_returnActiveSpaceObjects(f_div: string): any;
export function cvjs_returnSpaceObjectClicked(): any;
export function cvjs_returnAllSpaceObjects(): any;
export function cvjs_returnSpaceObjectID(spaceID: string): any;
export function cvjs_setSpaceObjectDirect(jsonSpaceObject: any): boolean;
export function cvjs_changeSpaceObjectLayer(currentId: string, newLayer: string): boolean;
export function cvjs_changeSpaceObjectLinkStatus(currentId: string, linkFlag: boolean): boolean;
export function cvjs_changeSpaceObjectName(currentId: string, newName: string): boolean;
export function cvjs_changeSpaceObjectType(currentId: string, newType: string): boolean;
export function cvjs_changeSpaceObjectID(currentId: string, newId: string): boolean;
export function cvjs_clearAllHighlightHandleObjectStyles(): void;
export function cvjs_removeSingleHighlightHandleObjectStyles(id: any, handle: any): void;
export function cvjs_HighlightHandleObjectStyles(
    hexColor: string,
    lineWeightFactor: number,
    opacity: number,
    tooltip: boolean,
    id: string,
    customTooltip: string,
): void;
export function cvjs_mouseenter_handleObjectStyles(
    hexColor: string,
    lineWeightFactor: number,
    opacity: number,
    tooltip: boolean,
    id: string,
    handle: string,
    customTooltip: string,
): void;
export function cvjs_convertOrgToHex(styleString: any): any;
export function cvjs_rgbToHex(rgb: any): string;
export function cvjs_mouseout_handleObjectStyles(id: string, handle: string): void;
export function cvjs_highlightSpace(rmid: string, roomstyle: any): 1 | -1;
export function cvjs_clearSpaceLayer(): void;
export function cvjs_hatchSpace(rmid: string, graphicalPattern: string, colorHex: string, fillOpacity: number): number;
export function cvjs_clearAllCustomTooltips(): void;
export function cvjs_removeSelectedAndReturnOriginalStyle(rmid: string, _mySpaceArray: any): any;
export function cvjs_returnOriginalStyleAndRemoveSelected(rmid: string, mySpaceArray: any): any;
export function cvjs_returnIsSpaceMultipleSelected(rmid: string, spaceArray: any): boolean;
export function cvjs_addSelectedToOriginalStyles(rmid: string): void;
export function cvjs_returnSelectedOriginalStyles(rmid: string): any;
export function cvjs_currentSpaceSettings(): any;
export function cvjs_initMultiSelect(): void;
export function cvjs_exitMultiSelect(): void;
export function cvjs_getLengthOfSVGPath(path: any): number;
export function cvjs_emptyMainCanvasInAngular(floorPlan: any): void;
export function cvjs_emptyMainCanvas(f_div: string): void;
export function cvjs_setMultiSelect(multiSelect: boolean): void;
export function cvjs_getMultiSelect(): boolean;
export function cvjs_hideOnlyPop(): void;
export function cvjs_executeCustomCanvasMethod_drag(start_any: any, stop_any: any, move_any: any, init_any: any): void;
export function cvjs_executeCustomCanvasMethod_nodrag(
    mousemove_any: any,
    mousedown_any: any,
    mouseup_any: any,
    dblclick_any: any,
    init_any: any,
): void;
export function cvjs_executeCustomCanvasMethod_click(
    mousemove_any: any,
    mousedown_any: any,
    mouseup_any: any,
    dblclick_any: any,
    init_any: any,
): void;
export function cvjs_customCanvasMethod_globalScale(): void;
export function cvjs_SVG_x(x: number): number;
export function cvjs_SVG_y(y: number): number;
export function cvjs_rect_doOverlap(
    l1_x: number,
    l1_y: number,
    r1_x: number,
    r1_y: number,
    l2_x: number,
    l2_y: number,
    r2_x: number,
    r2_y: number,
): boolean;
export function cvjs_getSpaceObjectBoundingBox(id: string): any;
export function cvjs_addVqRoomsGraphics_newNode(cNode_underbar: string, graphicsObject: any): void;
export function cvjs_createSpaceObjectGroup(
    cNode_underbar: string,
    baseGraphics: any,
    id: string,
    name: string,
    type: string,
    layer: string,
    group: string,
): void;
export function cvjs_addGraphicsToSpaceObjectGroup(cNode_underbar: string, baseGraphics: any, anyTag: string): void;
export function cvjs_addObjectToSpaceObjectGroup(
    cNode_underbar: string,
    graphicsTag: string,
    anyTag: string,
    isGroup: boolean,
): void;
export function cvjs_makeGraphicsObjectOnCanvas(anyType: string, graphicsObject: string): any;
export function cvjs_removeCustomCanvasMethod(): void;
export function cvjs_setLastObj(space: any): void;
export function cvjs_sendCustomCanvasToFront(f_div: string): void;
export function cvjs_sendCustomCanvasToBack(f_div: string): void;
export function cvjs_makeTextObjectOnCanvas(x: number, y: number, textObject: string): any;
export function cvjs_setImageSpaceObjectParameters(
    loadSpaceImage_LocationOrbase64Object: string,
    loadSpaceImage_ID: string,
    loadSpaceImage_Type: string,
    loadSpaceImage_Layer: string,
): void;
export function cvjs_getSpaceObjectNodeList(): any;
export function cvjs_hideObjectInSpaceObjectGroup(id_node: string, anyTag: string, type: string): void;
export function cvjs_showObjectInSpaceObjectGroup(id_node: string, anyTag: string, type: string): void;
export function cvjs_showOnlyObjectInSpaceObjectGroup(id_node: string, anyTag: string, type: string): void;
export function cvjs_showOnlyObjectInAllSpaceObjectGroups(anyTag: string): void;
export function cvjs_setDisableClickDrag(flag: boolean): void;
export function cvjs_setInteractiveZoomWidthAdjustment(flag: boolean): void;
export function cvjs_adjustMinimumLineThickness_Value(minlinewidth: any): void;
export function cvjs_setCallbackMethod(callbackMethodName: string, callbackMethod: any): void;
export function cvjs_AddTextOnSpaceObject(
    txtLayer: string,
    Id: string,
    leftScale: number,
    textStringArr: any,
    styleArr: any,
    scaleArr: any,
    colorArr: any,
    clip: boolean,
    centering: boolean,
): void;
export function cvjs_setHandlers_FrontEnd(
    handlerType: string,
    frontEndType: string,
    f_div: string,
    controllerPath: string,
): void;
export function cvjs_setHandleObjectProcessing(hlallProcessing: boolean): void;
export function cvjs_HighlightHandle(hexColor: string, lineWeightFactor: number, opacity: number, handle: string): void;
export function cvjs_setLayerColor(layerName: string, layerHexColor: string): void;
export function cvjs_LoadDrawing_SVG_string(f_div: string, basestring: string, FileName: string, base64: boolean): void;
export function cvjs_searchTextNext(searchString: string, zoomFactor: number): void;
export function cvjs_setLeafletJS(mode: boolean): void;
export function cvjs_handleObjectsParceBlocks(flag: boolean): void;
export function cvjs_LoadTopIconMenuXML_preconfigured(f_div: string): void;
export function cvjs_overwritePDFOutputParameter(flag: boolean, param: string, value: string): void;
export function cvjs_regenerateTopIconMenuXML(f_div: string): void;
export function cvjs_DisplayCoordinatesMenu(f_div: string, displayFlag: boolean): void;
export function cvjs_setAllServerURLsLocation(
    ServerBackEndUrl: string,
    ServerUrl: string,
    ServerLocation: string,
): void;
export function cvjs_setReturnPathController(returnPathController: string): void;
export function cvjs_setAllServerPaths_and_Handlers(
    BackEndUrl: string,
    Url: string,
    ServerLocation: string,
    handlerType: string,
    frontEndType: string,
    f_div: string,
    ctrlPath: string,
): void;
export function cvjs_removeHandleFunc_Generic(): void;
export function cvjs_drawRedlineSingleLine(f_div: string): void;
export function setllccktrace(flag: any): void;
export function cvjs_spaceObjectClickHandlerControlID(onoff: boolean, spaceID: string): void;
export function cvjs_spaceObjectClickHandlerControlAll(onoff: boolean): void;
export function cvjs_addSpaceObject(
    f_div: any,
    ID: any,
    image_or64byte: any,
    scale: any,
    width: any,
    height: any,
    rotate: any,
    unit: any,
    jsonSpaceObject: any,
): void;
export function cvjs_addLayeredSpaceObject(
    f_div: any,
    ID: any,
    images_64byte: any,
    layerArr: any,
    scale: any,
    width: any,
    height: any,
    rotate: any,
    unit: any,
    jsonSpaceObject: any,
): void;
export function cvjs_createNewJSonSpaceObject(): any;
export function cvjsspace_createNewJSonSpaceObject(): any;
export function cvjsspace_changeSpaceObjectDisplayMode(f_div: string, displayModal: boolean): void;
export function cvjsspace_addHandleFunc_ResizeDragSpace(node: any, rmid: any, spc: any): void;
export function cvjsspace_resizeSpaceImageObject(f_div: string): void;
export function cvjsspace_resizeSpaceObject(f_div: string): void;
export function cvjsspace_moveSpaceObject(f_div: string): void;
export function cvjsspace_rotateSpaceObject(f_div: string): void;
export function cvjsspace_displaySpaceObjectsStructure(f_div: string): void;
export function cvjsspace_deleteSpaceObject(f_div: string): void;
export function cvjsspace_clearSpaceObjects(f_div: string): void;
export function cvjsspace_addPolygonSpaceObject(f_div: string): void;
export function cvjsspace_addRectangleSpaceObject(f_div: string): void;
export function cvjsspace_addCircleSpaceObject(f_div: string): void;
export function cvjsspace_copyCircleSpaceObject(f_div: string): void;
export function cvjs_replaceSpaceObjectPathWithImage(f_div: string, spaceID: string, imagelocation: string): boolean;
export function cvjs_loadSpaceObjectsDirect(f_div: string, spaceObjectUrl: string): void;
export function cvjs_setSpaceObjectsStructureDirect(f_div: string, spaceObjectStructure: string): void;
export function cvjs_setCustomConversionEndpointExtension(flag: boolean): void;
export function cvjs_extractSVGfromCanvas(f_div: string): string;
export function cvjs_downloadObjectAsFile(filename: string, any: string, binaryflag: boolean): void;
export function cvjs_setSpaceObjectProcessing(spaceProcessing: boolean): void;
export function cvjs_returnNonPreprocessedSVG(): string;
export function cvjs_restAPI_getSVGContentData(remainOnServer: boolean): string;
export function cvjs_setMouseTouchHandlers_SpaceObject(f_div: any, active_floorplan_div_nr: any, room: any): void;
export function cvjs_setSpaceObjectsCustomMenu(serverFolder: any, fileName: any, flag: any): void;
export function cvjs_setIconImageSize(f_div: string, pixelheight: any, pixelheight_large: any): void;
export function cvjs_changeSpaceObjectNode(currentNode: string, newNode: string): boolean;
export function cvjs_hideSpaceObjectID(spaceID: string): boolean;
export function cvjs_showSpaceObjectID(spaceID: string): boolean;
export function cvjs_setCADViewerInterfaceVersion(version: number): void;
export function cvjs_getSpaceObjectByType(getType: string): any;
export function cvjs_returnAllRedlineObjects(): any;
export function cvjs_returnAllStickyNoteObjects(): any;
export function cvjs_setAllRedlineStickyNoteObjects(jsonObject: any): void;
export function cvjs_setAllRedlineObjects(redlineObjects: any, clear: any): void;
export function cvjs_setAllStickyNoteObjects(stickyNoteObjects: any, clear: any): void;
export function cvjs_returnAllRedlineStickyNoteObjects(): any;
export function cvjs_setQtipZindex(zindex: number): void;
export function cvjs_setQtipLocation(qtip_location_my: number, qtip_location_at: number): void;
export function cvjs_changeSpaceFixedLocation(rmid: string): void;
export function cvjs_handleObjectsParceTextOnly(flag: boolean): void;
export function cvjs_processHandleObjects(): void;
export function cvjs_getTextOnId(id: string): string;
export function cvjs_setWatermarks(textline1: string, textline2: string, hexcolor: string, sendtoback: boolean): void;
export function cvjs_insertSpaceObjectsCustomMenu(jsonMenu: any): void;
export function cvjs_styleQTip_color(
    state: boolean,
    titlebar: string,
    content: string,
    header_1: string,
    header_info_1: string,
    header_info_2: string,
): void;
export function cvjs_setCADViewerSkin(skin: string): void;
export function cvjs_setRelativeConversionFilesFolder(converterfilespath: string, converterfilesurlpath: string): void;
export function cvjs_setZoomExtentsMode(mode: string): void;
