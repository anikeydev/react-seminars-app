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
  return (
    <div style={styles.containerForm}>
      <FormApp />
    </div>
  )
}
