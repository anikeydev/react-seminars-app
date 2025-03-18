import { useState } from 'react'
import { useSeminars } from '../SeminarsContext'
import { formatDate, unformatDate } from '../utils'

export default function ModalUpdateApp() {
  const { updateModal, setUpdateModal, updateSeminar } = useSeminars()
  const [photo, setPhoto] = useState(updateModal.photo)
  const [title, setTitle] = useState(updateModal.title)
  const [description, setDesciption] = useState(updateModal.description)
  const [date, setDate] = useState(formatDate(updateModal.date))
  const [time, setTime] = useState(updateModal.time)

  function handleCloseModal() {
    setUpdateModal(null)
  }

  async function handleUpdate(e) {
    e.preventDefault()
    await updateSeminar(updateModal.id, {
      ...updateModal,
      title,
      photo,
      description,
      date: unformatDate(date),
      time,
    })
    handleCloseModal()
  }

  return (
    <div style={{ background: '#fff' }}>
      <button onClick={handleCloseModal}>Закрыть окно</button>
      <form>
        <div>
          <label htmlFor="photo">Ссылка на картинку:</label>
          <input
            type="text"
            name="photo"
            defaultValue={photo}
            onInput={(event) => {
              setPhoto(event.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="title">Название:</label>
          <input
            type="text"
            name="title"
            defaultValue={title}
            onInput={(event) => {
              setTitle(event.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="description">Описание:</label>
          <input
            type="text"
            name="description"
            defaultValue={description}
            onInput={(event) => {
              setDesciption(event.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="date">Дата:</label>
          <input
            type="date"
            name="date"
            defaultValue={date}
            onInput={(event) => {
              setDate(event.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="time">Время:</label>
          <input
            type="time"
            name="time"
            defaultValue={time}
            onInput={(event) => {
              setTime(event.target.value)
            }}
          />
        </div>
        <button onClick={handleUpdate}>Изменить</button>
      </form>
    </div>
  )
}
