export function isDateExpired(dateString: string): boolean {
  const targetDate = new Date(dateString);
  const currentDate = new Date();
  if (targetDate.getTime() <= currentDate.getTime()) {
    return true;
  } else {
    return false;
  }
}
