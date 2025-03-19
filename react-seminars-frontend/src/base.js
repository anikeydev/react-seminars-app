//Axios для запросов
import axios from 'axios'

//Запрос на получение всех семинаров
export async function getSeminarsB() {
  return await axios
    .get('/api/v1/seminars/')
    .then((response) => {
      return response.data
    })
    .catch(() => {
      console.log('Не удалось загрузить семинары')
    })
}

//Запрос на удаление по ID
export async function deleteSeminarB(id) {
  return await axios
    .delete(`/api/v1/seminars/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      console.log('Не удалось удалить семинар' + e.message)
    })
}

//Запрос на создание
export async function createSeminarB(data) {
  return await axios
    .post('/api/v1/seminars/', {
      ...data,
    })
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      console.log(`Filed created new seminar - ${e.message}`)
    })
}

//Запрос на обновление по ID
export async function updateSeminarB(id, data) {
  return await axios
    .put(`/api/v1/seminars/${id}`, {
      ...data,
    })
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      console.log('Не удалось изменить семинар' + e.message)
    })
}
