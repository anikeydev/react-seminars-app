import express from 'express'
import cors from 'cors'
import { v4 } from 'uuid'

const PORT = 8000
const app = express()

//Текущая БД
let seminars = [
  {
    id: 1,
    title: 'Новинки Kosmoteros',
    description: 'Обзор новых средств и методик от Kosmoteros.',
    date: '01.02.2025',
    time: '10:00',
    photo:
      'https://avatars.mds.yandex.net/i?id=992a0bb22c4efe6e8ac3f2d12747b4fc_l-5656190-images-thumbs&n=13',
  },
  {
    id: 2,
    title: 'Семинар по инновациям в косметологии',
    description:
      'Разбор новейших тенденций в косметологии и трендовых продуктов.',
    date: '03.02.2025',
    time: '11:00',
    photo:
      'https://avatars.mds.yandex.net/i?id=c18d23e9bf25a6833bd47528e203f699_l-8496938-images-thumbs&n=13',
  },
  {
    id: 3,
    title: 'Технологии ухода за кожей',
    description:
      'Изучение современных методик ухода за кожей с применением новейших технологий.',
    date: '05.02.2025',
    time: '12:00',
    photo: 'https://cdn.culture.ru/images/2bedcf8b-a9da-56f9-82c4-edddfe41e6ef',
  },
  {
    id: 4,
    title: 'Актуальные тренды в бьюти-индустрии',
    description: 'Обсуждение современных трендов и методик в бьюти-индустрии.',
    date: '07.02.2025',
    time: '13:00',
    photo:
      'https://avatars.mds.yandex.net/get-altay/4544819/2a00000179e2cba3089fa1720e4845b2ad3d/XXL_height',
  },
  {
    id: 5,
    title: 'Секреты профессионалов Kosmoteros',
    description:
      'Семинар с участием ведущих специалистов по использованию средств Kosmoteros.',
    date: '09.02.2025',
    time: '14:00',
    photo: 'https://cdn.culture.ru/images/2bedcf8b-a9da-56f9-82c4-edddfe41e6ef',
  },
  {
    id: 6,
    title: 'Эффективные методики омоложения',
    description: 'Обучение современным методикам омоложения и ухода за кожей.',
    date: '11.02.2025',
    time: '15:00',
    photo: 'https://cdn.culture.ru/images/2bedcf8b-a9da-56f9-82c4-edddfe41e6ef',
  },
  {
    id: 7,
    title: 'Инновационные средства Kosmoteros',
    description:
      'Демонстрация новых продуктов Kosmoteros и их уникальных свойств.',
    date: '13.02.2025',
    time: '16:00',
    photo:
      'https://avatars.mds.yandex.net/i?id=c18d23e9bf25a6833bd47528e203f699_l-8496938-images-thumbs&n=13',
  },
  {
    id: 8,
    title: 'Современные тренды в уходе за кожей',
    description:
      'Семинар о новейших трендах в уходе за кожей и эффективных методах лечения.',
    date: '15.02.2025',
    time: '17:00',
    photo:
      'https://avatars.mds.yandex.net/i?id=c18d23e9bf25a6833bd47528e203f699_l-8496938-images-thumbs&n=13',
  },
  {
    id: 9,
    title: 'Мастер-класс от Kosmoteros',
    description:
      'Практический мастер-класс по использованию инновационных косметических средств.',
    date: '17.02.2025',
    time: '18:00',
    photo:
      'https://avatars.mds.yandex.net/i?id=992a0bb22c4efe6e8ac3f2d12747b4fc_l-5656190-images-thumbs&n=13',
  },
  {
    id: 10,
    title: 'Будущее косметологии с Kosmoteros',
    description:
      'Обсуждение перспектив развития косметологии и роли инноваций.',
    date: '19.02.2025',
    time: '19:00',
    photo:
      'https://avatars.mds.yandex.net/i?id=992a0bb22c4efe6e8ac3f2d12747b4fc_l-5656190-images-thumbs&n=13',
  },
]
//Используем окружение
app.use(express.json())
app.use(cors())
//Статически используем фронт для удобства
app.use(express.static('./react-seminars-frontend/dist'))

// API

//GET SEMINARS
app.get('/api/v1/seminars', (req, res) => {
  res.status(200).json(seminars)
})

//DELETE SEMINAR
app.delete('/api/v1/seminars/:id', (req, res) => {
  seminars = seminars.filter((s) => s.id != req.params.id)
  res.status(200).json({ message: `Seminar deleted with ID: ${req.params.id}` })
})

//PUT SEMINAR
app.put('/api/v1/seminars/:id', (req, res) => {
  const idx = seminars.findIndex((s) => s.id == req.params.id)
  const updateSeminar = (seminars[idx] = req.body)
  res.status(200).json({
    updateSeminar,
    message: `Updated seminar with ID: ${req.params.id}`,
  })
})

//POST SEMINAR
app.post('/api/v1/seminars/', (req, res) => {
  const newSeminar = {
    ...req.body,
    id: v4(),
  }
  seminars.push(newSeminar)
  res.status(200).json({
    newSeminar,
    message: `Created new seminar with ID ${newSeminar.id}`,
  })
})

//Запускаем сервер на порте
app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`)
})
