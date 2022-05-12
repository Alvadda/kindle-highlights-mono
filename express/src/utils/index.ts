export function isNumber(number: any) {
  if (typeof number === 'undefined') return false
  if (Number.isNaN(Number(number))) return false

  return true
}

export function isNill(value: any) {
  if (typeof value === 'undefined') return true
  if (typeof value === null) return true

  return false
}
