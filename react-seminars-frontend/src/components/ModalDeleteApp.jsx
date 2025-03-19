//Компонент - Окно удаления семинара
export default function ModalDeleteApp(props) {
  return (
    <div className="card-body d-flex flex-column justify-content-between">
      <h4 className="mb-3">Уверены что хотите удалить?</h4>
      <div className="d-flex gap-2 justify-content-center">
        <button className="btn btn-danger btn-sm" onClick={props.delete}>
          Удалить
        </button>
        <button className="btn btn-primary btn-sm" onClick={props.open}>
          Закрыть
        </button>
      </div>
    </div>
  )
}
