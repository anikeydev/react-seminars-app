import { useForm } from 'react-hook-form'
import { useSeminars } from '../SeminarsContext'
import { formatDate, validateTrim } from '../utils'

const styles = {
  form: {
    width: '50%',
    padding: '1rem',
    borderRadius: '10px',
    border: '1px solid #000',
  },
}

export default function FormApp(props) {
  const { id, title, photo, description, date, time } = props.config.upSeminar

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  })

  async function onSubmit(data) {
    props.config.actionForm(id, data)
    reset()
  }

  return (
    <div>
      <h2>{props.config.title}</h2>
      <button onClick={() => props.config.actionClose(false)}>Закрыть</button>
      <br />
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="photo">Ссылка на фото: </label>
          <input
            {...register('photo')}
            type="text"
            name="photo"
            defaultValue={photo}
          />
        </div>
        <div>
          <label htmlFor="title">Название: </label>
          <input
            {...register('title', {
              required: true,
              validate: validateTrim,
            })}
            type="text"
            name="title"
            defaultValue={title}
            style={{ borderColor: errors.title && 'red' }}
          />
          {errors.title && 'Обязательное поле'}
        </div>
        <div>
          <label htmlFor="description">Описание: </label>
          <input
            {...register('description', {
              required: true,
              validate: validateTrim,
            })}
            type="text"
            name="description"
            defaultValue={description}
            style={{ borderColor: errors.description && 'red' }}
          />
          {errors.description && 'Обязательное поле'}
        </div>
        <div>
          <label htmlFor="date">Дата проведения: </label>
          <input
            {...register('date', { required: true, validate: validateTrim })}
            type="date"
            name="date"
            defaultValue={date && formatDate(date)}
            style={{ borderColor: errors.date && 'red' }}
          />
          {errors.date && 'Обязательное поле'}
        </div>
        <div>
          <label htmlFor="time">Время проведения: </label>
          <input
            {...register('time', { required: true, validate: validateTrim })}
            type="time"
            name="time"
            defaultValue={time}
            style={{ borderColor: errors.time && 'red' }}
          />
          {errors.time && 'Обязательное поле'}
        </div>
        <button type="submit">{props.config.actionBtnName}</button>
      </form>
    </div>
  )
}
