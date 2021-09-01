function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR').format(new Date(date));
}

export { formatDate };
