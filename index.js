import express from 'express'
import cors from 'cors'

const PORT = 8000
const app = express()

let seminars = [
  {
    id: 1,
    title: 'Новинки Kosmoteros',
    description: 'Обзор новых средств и методик от Kosmoteros.',
    date: '01.02.2025',
    time: '10:00',
    photo: 'https://picsum.photos/id/1/750/730',
  },
  {
    id: 2,
    title: 'Семинар по инновациям в косметологии',
    description:
      'Разбор новейших тенденций в косметологии и трендовых продуктов.',
    date: '03.02.2025',
    time: '11:00',
    photo: 'https://picsum.photos/id/2/750/730',
  },
  {
    id: 3,
    title: 'Технологии ухода за кожей',
    description:
      'Изучение современных методик ухода за кожей с применением новейших технологий.',
    date: '05.02.2025',
    time: '12:00',
    photo: 'https://picsum.photos/id/3/750/730',
  },
  {
    id: 4,
    title: 'Актуальные тренды в бьюти-индустрии',
    description: 'Обсуждение современных трендов и методик в бьюти-индустрии.',
    date: '07.02.2025',
    time: '13:00',
    photo: 'https://picsum.photos/id/4/750/730',
  },
]
app.use(express.json())
app.use(cors())

app.get('/api/v1/seminars', (req, res) => {
  res.status(200).json(seminars)
})

app.delete('/api/v1/seminars/:id', (req, res) => {
  seminars = seminars.filter((s) => s.id != req.params.id)
  res.status(200).json({ message: `Seminar for id:${req.params.id} deleted` })
})

app.put('/api/v1/seminars/:id', (req, res) => {
  const idx = seminars.findIndex((s) => s.id == req.params.id)
  seminars[idx] = req.body
  res.status(200).json({ newSeminar: req.body })
})

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`)
})
