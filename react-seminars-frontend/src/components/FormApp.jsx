import { useForm } from 'react-hook-form'
import { formatDate, validateTrim } from '../utils'

//Компоненты формы
export default function FormApp(props) {
  //Конфигурация формы для ее переиспользования
  const { id, title, photo, description, date, time } = props.config.upSeminar

  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  })

  //Обработчик события Submit
  async function onSubmit(data) {
    props.config.actionForm(id, data)
    props.config.actionBtnName === 'Создать' && reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label htmlFor="photo" className="form-label">
          Ссылка на фото:{' '}
        </label>
        <input
          className="form-control"
          {...register('photo')}
          type="text"
          name="photo"
          defaultValue={photo}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="title" className="form-label">
          Название:{' '}
        </label>
        <input
          className="form-control"
          {...register('title', {
            required: true,
            validate: validateTrim,
          })}
          type="text"
          name="title"
          defaultValue={title}
          style={{ borderColor: errors.title && '#dc3545' }}
        />
        {errors.title && (
          <span className="text-danger">* - Обязательное поле</span>
        )}
      </div>
      <div className="mb-2">
        <label htmlFor="description" className="form-label">
          Описание:{' '}
        </label>
        <input
          className="form-control"
          {...register('description', {
            required: true,
            validate: validateTrim,
          })}
          type="text"
          name="description"
          defaultValue={description}
          style={{ borderColor: errors.description && '#dc3545' }}
        />
        {errors.description && (
          <span className="text-danger">* - Обязательное поле</span>
        )}
      </div>
      <div className="mb-2">
        <label htmlFor="date" className="form-label">
          Дата проведения:{' '}
        </label>
        <input
          className="form-control"
          {...register('date', { required: true, validate: validateTrim })}
          type="date"
          name="date"
          defaultValue={date && formatDate(date)}
          style={{ borderColor: errors.date && '#dc3545' }}
        />
        {errors.date && (
          <span className="text-danger">* - Обязательное поле</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="form-label">
          Время проведения:{' '}
        </label>
        <input
          className="form-control"
          {...register('time', { required: true, validate: validateTrim })}
          type="time"
          name="time"
          defaultValue={time}
          style={{ borderColor: errors.time && '#dc3545' }}
        />
        {errors.time && (
          <span className="text-danger">* - Обязательное поле</span>
        )}
      </div>
      <button type="submit" className="btn btn-success">
        {props.config.actionBtnName}
      </button>
    </form>
  )
}
