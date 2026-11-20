
import { useEffect, useState } from 'react'
import { useI18nContext } from '../context/I18nContext'
import { translateText } from '../utils/translateText'

function BirthDate({ birthDate }) {
  const { language } = useI18nContext()

  const currentYear = new Date().getFullYear()
  const birthYear = birthDate.getFullYear()
  const age = currentYear - birthYear

  const [translatedMessage, setTranslatedMessage] = useState(
    `מזל טוב! אתה בן ${age}. תאריך הלידה שלך הוא:`
  )

  useEffect(() => {
    async function translateMessage() {
      const message = `מזל טוב! אתה בן ${age}. תאריך הלידה שלך הוא:`

      try {
        const result = await translateText(message, language)
        setTranslatedMessage(result)
      } catch (error) {
        console.error('Translation error:', error)
        setTranslatedMessage(message)
      }
    }

    translateMessage()
  }, [language, age])

  const locale = {
    he: 'he-IL',
    en: 'en-US',
    fr: 'fr-FR'
  }[language]

  return (
    <div>
      <h2>{translatedMessage}</h2>

      <p>{birthDate.toLocaleDateString(locale)}</p>
    </div>
  )
}

export default BirthDate
