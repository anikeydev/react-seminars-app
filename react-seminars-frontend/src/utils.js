export function formatDate(date) {
  return date.split('.').reverse().join('-')
}

export function unformatDate(date) {
  return date.split('-').reverse().join('.')
}
