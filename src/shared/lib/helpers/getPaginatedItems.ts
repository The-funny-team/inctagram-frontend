export function getPaginatedItems<T>(array: T[], page: number, pageSize: number): T[] {
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize

  return array.slice(startIndex, endIndex)
}
