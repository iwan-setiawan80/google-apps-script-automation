function onFormSubmit(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Responses");

  Logger.log("New response received.");

  sheet.getRange(sheet.getLastRow(), 4).setValue("Processed");
}
