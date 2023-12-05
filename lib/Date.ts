export function parseDate(inputDate: string): string {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
    const dateArray = inputDate.split('-').map(Number);
    const parsedDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    return parsedDate.toLocaleDateString('en-US', options);
}