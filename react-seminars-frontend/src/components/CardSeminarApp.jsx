import { useState } from 'react'
import ModalDeleteApp from './ModalDeleteApp'
import { useSeminars } from '../SeminarsContext'

//Компонент - Один семинар
export default function CardSeminarApp(props) {
  //Подключаем глобальный стейт
  const { deleteSeminar, setUpdateModal, setUpSeminar } = useSeminars()

  //Открыто удаление семинара
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)

  //Обработчик события удаления
  function handleDelete() {
    deleteSeminar(props.data.id)
  }

  //Обработчик открытия и закрытия удаления
  function handleToggleModal() {
    setIsOpenModalDelete(!isOpenModalDelete)
  }

  //Обработчик открытия обновления
  function handleUpdateModal() {
    //Сохраняем текущий элемент обновления глобально
    setUpSeminar(props.data)
    //Открываем окно обновления
    setUpdateModal(true)
  }

  //Открыто удаление семинара
  if (isOpenModalDelete) {
    return (
      <div className="card p-2" style={{ width: '30%' }}>
        <ModalDeleteApp open={handleToggleModal} delete={handleDelete} />
      </div>
    )
  }

  return (
    <div className="card p-2" style={{ width: '30%' }}>
      {/* <img src={props.data.photo} style={cardImgStyle} /> */}
      <div className="card-body d-flex flex-column justify-content-between">
        <h3 className="card-title">{props.data.title}</h3>
        <p className="card-text">{props.data.description}</p>
        <strong style={{ marginBottom: '.5rem' }}>
          {props.data.date} / {props.data.time}
        </strong>
        <div className="d-flex gap-2 justify-content-center">
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={handleToggleModal}>
            Delete
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={handleUpdateModal}>
            Update
          </button>
        </div>
      </div>
    </div>
  )
}
