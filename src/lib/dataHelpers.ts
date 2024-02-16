let options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const formattedData = (data: any[]) =>
  data.map(nea => ({
    ...nea,
    discovery_date: new Intl.DateTimeFormat(undefined, options).format(
      new Date(nea.discovery_date)
    ),
    pha: nea.pha === 'Y' ? 'Yes' : nea.pha === 'N' ? 'No' : '',
  }));

export const dateComparator = (date1: string, date2: string) => {
  const date1Number = date1 ? new Date(date1).getTime() : null;
  const date2Number = date2 ? new Date(date2).getTime() : null;

  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date2Number === null) {
    return 1;
  }
  if (date1Number === null) {
    return -1;
  }
  return date1Number - date2Number;
};

export const numberComparator = (number1: string, number2: string) => {
  const num1 = isNaN(parseFloat(number1)) ? 0 : parseFloat(number1);
  const num2 = isNaN(parseFloat(number2)) ? 0 : parseFloat(number2);

  return num1 - num2;
};

export const textComparator = (text1: string, text2: string) => {
  if (text1 === null && text2 === null) {
    return 0;
  }
  if (text1 === null) {
    return -1;
  }
  if (text2 === null) {
    return 1;
  }

  return text1.localeCompare(text2);
};
