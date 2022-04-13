export const hasSearchParams = (searchParams: URLSearchParams): Boolean => {
  return Boolean(Object.keys(Object.fromEntries(searchParams)).length);
};
