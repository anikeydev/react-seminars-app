import CardSeminarApp from './CardSeminarApp'
import ModalUpdateApp from './ModalUpdateApp'
import { useSeminars } from '../SeminarsContext'
import ModalCreateApp from './ModalCreateApp'
//Компонент - Все семинары

export default function SimanarsApp() {
  //Используем глобальный контекст
  const { seminars, updateModal, createModal, setCreateModal, loading } =
    useSeminars()

  //Открыто обновление семинара
  if (updateModal) {
    return <ModalUpdateApp />
  }
  //Открыто создание нового семинара
  if (createModal) {
    return <ModalCreateApp />
  }
  //Вывод всех семинаров
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
      {loading && (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {seminars.length > 0 && (
        <div className="d-flex gap-3 justify-content-center align-items-startch flex-wrap">
          {seminars.map((s) => (
            <CardSeminarApp key={s.id} data={s} />
          ))}
        </div>
      )}
      {!loading && seminars.length === 0 && (
        <h2 className="text-light">Данных нет...</h2>
      )}
    </>
  )
}
