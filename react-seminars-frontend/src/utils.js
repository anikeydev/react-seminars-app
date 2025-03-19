//Вспомогающие функции
//Форматирование даты для вывода в инпуте
export function formatDate(date) {
  return date.split('.').reverse().join('-')
}

export function unformatDate(date) {
  return date.split('-').reverse().join('.')
}

// Валидация пробелов
export function validateTrim(value) {
  return value.trim() ? true : false
}
