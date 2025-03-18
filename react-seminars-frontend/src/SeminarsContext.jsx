import { createContext, useState, useContext, useEffect } from 'react'
import { getSeminarsB, deleteSeminarB, updateSeminarB } from './base'

const SeminarsContext = createContext({
  seminars: [],
  loading: false,
  updateModal: null,
  createModal: false,
})

export function SeminarsContextProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [updateModal, setUpdateModal] = useState(null)
  const [createModal, setCreateModal] = useState(true)
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
    result[idx] = data
    setSeminars(result)
    console.log(res)
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
        updateSeminar,
        setUpdateModal,
        updateModal,
        createModal,
      }}>
      {children}
    </SeminarsContext.Provider>
  )
}

export default SeminarsContext

export function useSeminars() {
  return useContext(SeminarsContext)
}
