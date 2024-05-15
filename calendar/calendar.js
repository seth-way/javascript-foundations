function createEvent(title, month, day) {
  if (day < 1 || day > 31) return `Error: ${day} is not a valid day`;
  return { title, month, day };
}

function createCalendar(owner, events) {
  return { owner, events };
}

function reportMonthlyEvents(calendar, month) {
  const events = [];

  for (let i = 0; i < calendar.events.length; i += 1) {
    if (calendar.events[i].month === month) events.push(calendar.events[i]);
  }

  return events;
}

module.exports = { createEvent, createCalendar, reportMonthlyEvents };
