import { createContext, useState, useContext, useEffect } from 'react'
import {
  getSeminarsB,
  deleteSeminarB,
  updateSeminarB,
  createSeminarB,
} from './base'

//Определяем голабльный контекст
const SeminarsContext = createContext({
  seminars: [],
  loading: false,
  updateModal: null,
  createModal: false,
})

//Определяем компонент провайдер
export function SeminarsContextProvider({ children }) {
  //Определяем глобальный стейт
  //Стадия загрузки
  const [loading, setLoading] = useState(false)
  //Текущий семинар для обновления
  const [upSeminar, setUpSeminar] = useState(null)
  //Открыто обновление
  const [updateModal, setUpdateModal] = useState(false)
  //Открыто создание
  const [createModal, setCreateModal] = useState(false)
  //Все семинары
  const [seminars, setSeminars] = useState([])

  //Удалить семинар по ID
  async function deleteSeminar(id) {
    const { message } = await deleteSeminarB(id)
    setSeminars(seminars.filter((s) => s.id != id))
    console.log(message)
  }

  //Обновить семинар по ID
  async function updateSeminar(id, data) {
    const { message, updateSeminar } = await updateSeminarB(id, data)
    const result = seminars
    const idx = result.findIndex((r) => r.id == id)
    result[idx] = {
      ...updateSeminar,
      id,
    }
    setSeminars(result)
    console.log(message)
  }

  //Создать новый семинар
  async function createSeminar(id = '', data) {
    const { message, newSeminar } = await createSeminarB(data)
    setSeminars([...seminars, newSeminar])
    console.log(message)
  }

  //Загружаем базу с сервера
  useEffect(() => {
    async function preload() {
      setLoading(true)
      const result = await getSeminarsB()
      setSeminars(result)
      setLoading(false)
    }

    preload()
  }, [])

  //Возвращаем в провайдер
  return (
    <SeminarsContext.Provider
      value={{
        loading,
        seminars,
        deleteSeminar,
        upSeminar,
        setUpSeminar,
        updateSeminar,
        createSeminar,
        setUpdateModal,
        updateModal,
        createModal,
        setCreateModal,
      }}>
      {children}
    </SeminarsContext.Provider>
  )
}

export default SeminarsContext

//Кастомный хук для простоты использования глобального контекста
export function useSeminars() {
  return useContext(SeminarsContext)
}
