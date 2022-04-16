export const mergeSearchParams = (
  oldSearchParams: URLSearchParams,
  newSearchParams: Record<string, string>,
) => {
  return { ...Object.fromEntries(oldSearchParams), ...newSearchParams };
};
