export const snakeToCamel = (string: string): string => {
  return string
    .split('_')
    .map((part: string, index: number) => {
      if (index === 0) {
        return part;
      }
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join('');
};

export const toSnakeCase = (string: { match: (arg0: RegExp) => string[] }) =>
  string &&
  string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

export const pluralize = (count: number | string, string: string) => {
  if (string.toLowerCase() === 'person' && count > 1) {
    return `${count} people`;
  }

  if (count > 1) {
    return `${count} ${string}s`;
  }

  return `${count} ${string}`;
};
