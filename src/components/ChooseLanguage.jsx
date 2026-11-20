
import { useI18nContext } from '../context/I18nContext'

function ChooseLanguage() {
  const { setLanguage } = useI18nContext()

  return (
    <div>
      <label htmlFor="language">בחרי שפה:</label>

      <select
        id="language"
        defaultValue="he"
        onChange={(event) => setLanguage(event.target.value)}
      >
        <option value="he">עברית</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  )
}

export default ChooseLanguage
