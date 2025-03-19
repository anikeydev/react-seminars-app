import { createContext, useState, useContext, useEffect } from 'react'
import {
  getSeminarsB,
  deleteSeminarB,
  updateSeminarB,
  createSeminarB,
} from './base'

const SeminarsContext = createContext({
  seminars: [],
  loading: false,
  updateModal: null,
  createModal: false,
})

export function SeminarsContextProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [upSeminar, setUpSeminar] = useState(null)
  const [updateModal, setUpdateModal] = useState(false)
  const [createModal, setCreateModal] = useState(false)
  const [seminars, setSeminars] = useState([])

  async function deleteSeminar(id) {
    const res = await deleteSeminarB(id)
    setSeminars(seminars.filter((s) => s.id != id))
    console.log(res)
  }

  async function updateSeminar(id, data) {
    const res = await updateSeminarB(id, data)
    const result = seminars
    const idx = result.findIndex((r) => r.id == id)
    result[idx] = {
      ...data,
      id,
    }
    setSeminars(result)
  }

  async function createSeminar(id = '', data) {
    const newSeminar = await createSeminarB(data)
    setSeminars([...seminars, newSeminar])
  }

  useEffect(() => {
    async function preload() {
      setLoading(true)
      const result = await getSeminarsB()
      setSeminars(result)
      setLoading(false)
    }

    preload()
  }, [])

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

export function useSeminars() {
  return useContext(SeminarsContext)
}
