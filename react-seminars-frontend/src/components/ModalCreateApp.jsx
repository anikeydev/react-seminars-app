import { useSeminars } from '../SeminarsContext'
import FormApp from './FormApp'

const styles = {
  containerForm: {
    width: '100%',
    alignItems: 'center',
    background: '#fff',
    padding: '1rem',
    borderRadius: '10px',
  },
}

export default function ModalCreateApp() {
  const { setCreateModal, createSeminar } = useSeminars()

  return (
    <div style={styles.containerForm}>
      <FormApp
        config={{
          title: 'Создать семинар',
          actionBtnName: 'Создать',
          actionClose: setCreateModal,
          actionForm: createSeminar,
          upSeminar: {},
        }}
      />
    </div>
  )
}
