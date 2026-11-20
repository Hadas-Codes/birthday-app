
function BirthDate({ birthDate }) {
  const currentYear = new Date().getFullYear()

  const birthYear = birthDate.getFullYear()

  const age = currentYear - birthYear

  return (
    <div>
      <h2>מזל טוב! אתה בן {age}</h2>

      <p>
        תאריך הלידה שלך הוא:
        {' '}
        {birthDate.toLocaleDateString('he-IL')}
      </p>
    </div>
  )
}

export default BirthDate
