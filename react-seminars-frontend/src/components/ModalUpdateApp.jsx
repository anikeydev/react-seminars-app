import { useSeminars } from '../SeminarsContext'
import FormApp from './FormApp'

//Компонент - Окно обновления семинара
export default function ModalUpdateApp() {
  //Используем глобальный стейт для обновления
  const { upSeminar, setUpdateModal, updateSeminar } = useSeminars()

  return (
    <div className="card p-3">
      <div className="d-flex justify-content-between align-items-center">
        <h3>Изменить семинар - id:{upSeminar.id}</h3>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => setUpdateModal(false)}>
          Выйти
        </button>
      </div>
      <div className="card-body" style={{ width: '100%', textAlign: 'start' }}>
        <FormApp
          config={{
            actionBtnName: 'Редактировать',
            actionClose: setUpdateModal,
            actionForm: updateSeminar,
            upSeminar,
          }}
        />
      </div>
    </div>
  )
}
