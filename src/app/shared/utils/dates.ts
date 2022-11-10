export function dateBeforeMins(date : Date, mins : number) {
  return new Date(date.getTime() - mins * 60000);
}
