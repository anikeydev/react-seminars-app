import axios from 'axios'

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

console.log(
  await updateSeminarB(2, {
    id: 2,
    title: 'Hello',
    description:
      'Разбор новейших тенденций в косметологии и трендовых продуктов.',
    date: '03.02.2025',
    time: '11:00',
    photo: 'https://picsum.photos/id/2/750/730',
  })
)
