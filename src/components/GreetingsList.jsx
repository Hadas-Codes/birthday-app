
import GreetingCard from './GreetingCard'

function GreetingsList({ greetings }) {
  return (
    <div>
      <h2>הברכות שקיבלתי:</h2>

      {greetings.map((greeting, index) => (
        <GreetingCard
          key={index}
          greeting={greeting}
        />
      ))}
    </div>
  )
}

export default GreetingsList
