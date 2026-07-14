export function containsSearch(
  value: string | string[] | undefined,
  query: string
) {
  if (!value) return false;

  const search = query.trim().toLowerCase();

  if (Array.isArray(value)) {
    return value.some((item) =>
      item.toLowerCase().includes(search)
    );
  }

  return value.toLowerCase().includes(search);
}