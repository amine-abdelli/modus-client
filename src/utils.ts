function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR').format(new Date(date));
}

function formatDateToCalendar(date: Date): string {
  const dateString = new Date(date);
  dateString.setDate(dateString.getDate());
  return `${dateString.getFullYear()}-${(`0${dateString.getMonth() + 1}`).slice(-2)}-${(`0${dateString.getDate()}`).slice(-2)}`;
}

export { formatDate, formatDateToCalendar };
