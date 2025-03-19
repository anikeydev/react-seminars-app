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

export default function ModalUpdateApp() {
  const { upSeminar, setUpdateModal, updateSeminar } = useSeminars()

  return (
    <div style={styles.containerForm}>
      <FormApp
        config={{
          title: 'Редактировать семинар',
          actionBtnName: 'Редактировать',
          actionClose: setUpdateModal,
          actionForm: updateSeminar,
          upSeminar,
        }}
      />
    </div>
  )
}
