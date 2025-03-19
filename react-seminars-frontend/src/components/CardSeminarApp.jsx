import { useState } from 'react'
import ModalDeleteApp from './ModalDeleteApp'
import { useSeminars } from '../SeminarsContext'

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '30%',
  padding: '1rem',
  background: '#fff',
  borderRadius: 10,
}

const cardTitleStyle = {
  width: '100%',
  textAlign: 'center',
  margin: 0,
  paddingBottom: '1rem',
  borderBottom: '1px solid #000',
}

const cardImgStyle = {
  width: '100%',
  marginBottom: '1rem',
  borderRadius: '10px',
}
export default function CardSeminarApp(props) {
  const { deleteSeminar, setUpdateModal, setUpSeminar } = useSeminars()
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)

  function handleDelete() {
    deleteSeminar(props.data.id)
  }

  function handleToggleModal() {
    setIsOpenModalDelete(!isOpenModalDelete)
  }

  function handleUpdateModal() {
    setUpSeminar(props.data)
    setUpdateModal(true)
  }

  if (isOpenModalDelete) {
    return (
      <div style={cardStyle}>
        <ModalDeleteApp open={handleToggleModal} delete={handleDelete} />
      </div>
    )
  }
  return (
    <div style={cardStyle}>
      {/* <img src={props.data.photo} style={cardImgStyle} /> */}
      <h2 style={cardTitleStyle}>{props.data.title}</h2>
      <p>{props.data.description}</p>
      <strong>
        {props.data.date} / {props.data.time}
      </strong>
      <div>
        <button onClick={handleToggleModal}>Delete</button>
        <button onClick={handleUpdateModal}>Update</button>
      </div>
    </div>
  )
}
