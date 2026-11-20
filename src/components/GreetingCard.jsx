
import { useEffect, useState } from 'react'
import { useI18nContext } from '../context/I18nContext'
import { translateText } from '../utils/translateText'

function GreetingCard({ greeting }) {
  const { language } = useI18nContext()

  const [translatedGreeting, setTranslatedGreeting] = useState(greeting)

  useEffect(() => {
    async function translateGreeting() {
      try {
        const result = await translateText(greeting, language)
        setTranslatedGreeting(result)
      } catch (error) {
        console.error('Translation error:', error)
        setTranslatedGreeting(greeting)
      }
    }

    translateGreeting()
  }, [greeting, language])

  return (
    <div>
      {translatedGreeting}
    </div>
  )
}

export default GreetingCard
