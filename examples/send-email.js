function sendNotification() {
  MailApp.sendEmail({
    to: "example@example.com",
    subject: "Notification",
    body: "This is a sample notification email."
  });
}
