export default function ModalDeleteApp(props) {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Уверены что хотите удалить?</h2>
      <div>
        <button onClick={props.delete}>Удалить</button>
        <button onClick={props.open}>Закрыть</button>
      </div>
    </>
  )
}
