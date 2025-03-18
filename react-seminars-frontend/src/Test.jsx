export default function Test(props) {
  function handleClick() {
    props.changeData('Hello from button')
  }

  return (
    <>
      <h1>{props.data}</h1>
      <button onClick={handleClick}>Изменить</button>
    </>
  )
}
