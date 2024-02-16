import { useState } from 'react'

const Header = ({text}) => {
  return (<h1>{text}</h1>)
}

const Button = ({text, handler}) => {
  return (<button onClick={handler}>{text}</button>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback'/>
      <Button text='good' handler={() => setGood(good + 1)}/>
      <Button text='neutral' handler={() => setNeutral(neutral + 1)}/>
      <Button text='bad' handler={() => setBad(bad + 1)}/>
      <Header text='statistics'/>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  )
}

export default App