function updateSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");

  sheet.appendRow([
    new Date(),
    "Sample Record",
    "Completed"
  ]);
}
