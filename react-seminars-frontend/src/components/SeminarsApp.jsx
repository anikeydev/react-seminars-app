import { useState } from 'react'
import CardSeminarApp from './CardSeminarApp'
import ModalUpdateApp from './ModalUpdateApp'
import { useSeminars } from '../SeminarsContext'
import ModalCreateApp from './ModalCreateApp'

const listStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  flexWrap: 'wrap',
  alignItems: 'stretch',
}

export default function SimanarsApp() {
  const { seminars, updateModal, createModal, setCreateModal } = useSeminars()

  if (updateModal) {
    return <ModalUpdateApp />
  }

  if (createModal) {
    return <ModalCreateApp />
  }

  return (
    <div>
      <button
        onClick={() => {
          setCreateModal(true)
        }}>
        Создать
      </button>
      <br />
      <ul style={listStyle}>
        {seminars.map((s) => (
          <CardSeminarApp key={s.id} data={s} />
        ))}
      </ul>
    </div>
  )
}
