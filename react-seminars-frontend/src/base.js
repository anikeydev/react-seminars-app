import axios from 'axios'

export async function request(url, method = 'GET', data = null) {
  try {
    const headers = {}
    let body

    if (data) {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(data)
    }

    const response = await fetch(url, {
      method,
      headers,
      body,
    })

    return await response.json()
  } catch (e) {
    console.warn(`Error: ${e.message}`)
  }
}

export async function getSeminarsB() {
  return await axios
    .get('http://localhost:8000/api/v1/seminars/')
    .then((response) => {
      return response.data // Сохраняем данные в состояние
    })
    .catch(() => {
      console.log('Не удалось загрузить семинары')
    })
}

export async function deleteSeminarB(id) {
  return await axios
    .delete(`http://localhost:8000/api/v1/seminars/${id}`)
    .then((response) => {
      console.log(`${response.data.message} with ID ${id}`)
      return response.data
    })
    .catch((e) => {
      console.log('Не удалось удалить семинар' + e.message)
    })
}

export async function updateSeminarB(id, data) {
  return await axios
    .put(`http://localhost:8000/api/v1/seminars/${id}`, {
      ...data,
    })
    .then((response) => {
      console.log(`Update with ID ${id}`)
      return response.data
    })
    .catch((e) => {
      console.log('Не удалось изменить семинар' + e.message)
    })
}
