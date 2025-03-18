import { useForm } from 'react-hook-form'

const styles = {
  form: {
    background: '#000',
    width: 400,
  },
}

export default function FormApp() {
  const { register } = useForm()

  return (
    <form style={styles.form}>
      <input type="text" placeholder="name" />
    </form>
  )
}
