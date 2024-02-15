const Header = ({title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({total}) => {
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header title={course}/> 
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App