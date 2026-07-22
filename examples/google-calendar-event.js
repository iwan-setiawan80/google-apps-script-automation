function createCalendarEvent() {
  const calendar = CalendarApp.getDefaultCalendar();

  calendar.createEvent(
    "Sample Meeting",
    new Date(),
    new Date(new Date().getTime() + 60 * 60 * 1000)
  );
}
