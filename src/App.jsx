import ChooseLanguage from './components/ChooseLanguage'
import { I18nProvider } from './context/I18nContext'
import './App.css'

function App() {
  return (
    <I18nProvider>

      <h1>Birthday App</h1>
      <ChooseLanguage />

    </I18nProvider>
  )
}

export default App
