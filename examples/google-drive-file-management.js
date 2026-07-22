function listFiles() {
  const files = DriveApp.getFiles();

  while (files.hasNext()) {
    const file = files.next();
    Logger.log(file.getName());
  }
}
