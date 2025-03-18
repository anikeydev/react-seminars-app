import SeminarsApp from './components/SeminarsApp'
import { SeminarsContextProvider } from './SeminarsContext'

export default function App() {
  return (
    <SeminarsContextProvider>
      <SeminarsApp />
    </SeminarsContextProvider>
  )
}
