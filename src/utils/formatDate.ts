export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat("es-CL").format(date);
}
