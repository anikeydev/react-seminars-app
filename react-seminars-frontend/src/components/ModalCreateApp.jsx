import { useSeminars } from '../SeminarsContext'
import FormApp from './FormApp'

export default function ModalCreateApp() {
  const { setCreateModal, createSeminar } = useSeminars()

  return (
    <div className="card p-3">
      <div className="d-flex justify-content-between">
        <h3>Создать новый семинар</h3>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => setCreateModal(false)}>
          Выйти
        </button>
      </div>
      <div className="card-body" style={{ width: '100%', textAlign: 'start' }}>
        <FormApp
          config={{
            actionBtnName: 'Создать',
            actionForm: createSeminar,
            actionClose: setCreateModal,
            upSeminar: {},
          }}
        />
      </div>
    </div>
  )
}
