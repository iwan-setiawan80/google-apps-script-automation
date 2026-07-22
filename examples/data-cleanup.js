function removeEmptyRows() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const data = sheet.getDataRange().getValues();

  Logger.log("Rows loaded: " + data.length);
}
