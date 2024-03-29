import { useState } from 'react'

const Header = ({ text }) => {
  return (<h1>{text}</h1>)
}

const Button = ({ text, handler }) => {
  return (<button onClick={handler}>{text}</button>)
}

const StatisticLine = ({text, value}) => {
  return (<tr><td>{text}</td> <td>{value}</td></tr>)
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : good / all
  if (all === 0) {
    return (<p>No feedback given</p>)
  } else {
    return (
      <>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={all}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='positive' value={positive}/>
      </>
    )
  }

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <Header text='give feedback' />
      <Button text='good' handler={() => setGood(good + 1)} />
      <Button text='neutral' handler={() => setNeutral(neutral + 1)} />
      <Button text='bad' handler={() => setBad(bad + 1)} />
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App