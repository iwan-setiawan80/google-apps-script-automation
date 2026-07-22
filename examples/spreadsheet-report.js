function generateReport() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const lastRow = sheet.getLastRow();

  Logger.log("Total rows: " + lastRow);
}
