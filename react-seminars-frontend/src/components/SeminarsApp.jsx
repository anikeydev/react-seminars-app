import CardSeminarApp from './CardSeminarApp'
import ModalUpdateApp from './ModalUpdateApp'
import { useSeminars } from '../SeminarsContext'
import ModalCreateApp from './ModalCreateApp'

export default function SimanarsApp() {
  const { seminars, updateModal, createModal, setCreateModal } = useSeminars()

  if (updateModal) {
    return <ModalUpdateApp />
  }

  if (createModal) {
    return <ModalCreateApp />
  }

  return (
    <>
      <div className="p-3 mb-3 bg-white d-flex justify-content-between align-items-center rounded">
        <h1>React Seminars App</h1>
        <button
          className="btn btn-outline-primary"
          onClick={() => setCreateModal(true)}>
          Новый семинар
        </button>
      </div>
      <div className="d-flex gap-3 justify-content-center align-items-startch flex-wrap">
        {seminars.map((s) => (
          <CardSeminarApp key={s.id} data={s} />
        ))}
      </div>
    </>
  )
}
