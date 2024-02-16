let options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const formattedDataDate = data =>
  data.map(nea => ({
    ...nea,
    discovery_date: new Intl.DateTimeFormat(undefined, options).format(
      new Date(nea.discovery_date)
    ),
  }));
