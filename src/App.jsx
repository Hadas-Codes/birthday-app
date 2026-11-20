import ChooseLanguage from './components/ChooseLanguage'
import BirthDate from './components/BirthDate'
import GreetingsList from './components/GreetingsList'
import { I18nProvider } from './context/I18nContext'
import './App.css'

function App() {
  return (

    <I18nProvider>

      <h1>Birthday App</h1>
     
      <ChooseLanguage />

     <BirthDate birthDate={new Date(2015, 10, 20)} />

     <GreetingsList
  greetings={[
    "יום הולדת שמח!",
    "המון מזל טוב!",
    "שתהיה לך שנה נפלאה!"
  ]}
/>

    </I18nProvider>

  )
}

export default App
