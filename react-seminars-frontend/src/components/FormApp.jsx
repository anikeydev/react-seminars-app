import { useForm } from 'react-hook-form'
import { createSeminarB } from '../base'

const styles = {
  form: {
    width: '50%',
    padding: '1rem',
    borderRadius: '10px',
    border: '1px solid #000',
  },
}

export default function FormApp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })

  async function onSubmit(data) {
    const res = await createSeminarB(data)
    console.log(res)
  }

  return (
    <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="photo">Ссылка на фото: </label>
        <input
          {...register('photo')}
          type="text"
          name="photo"
          //   style={{ borderColor: errors.title && 'red' }}
        />
      </div>
      <div>
        <label htmlFor="title">Название: </label>
        <input
          {...register('title')}
          type="text"
          name="title"
          //   style={{ borderColor: errors.title && 'red' }}
        />
      </div>
      <div>
        <label htmlFor="description">Описание: </label>
        <input
          {...register('description')}
          type="text"
          name="description"
          //   style={{ borderColor: errors.title && 'red' }}
        />
      </div>
      <div>
        <label htmlFor="date">Дата проведения: </label>
        <input
          {...register('date')}
          type="date"
          name="date"
          //   style={{ borderColor: errors.title && 'red' }}
        />
      </div>
      <div>
        <label htmlFor="time">Время проведения: </label>
        <input
          {...register('time')}
          type="time"
          name="time"
          //   style={{ borderColor: errors.title && 'red' }}
        />
      </div>
      <button type="submit">Создать</button>
    </form>
  )
}
