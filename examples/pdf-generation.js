function createPdf() {
  const doc = DocumentApp.create("Sample Report");
  doc.getBody().appendParagraph("Automation Report");
  doc.saveAndClose();

  Logger.log("PDF source document created.");
}
