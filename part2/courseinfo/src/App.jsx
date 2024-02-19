const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map(p => <Part key={p.id} name={p.name} exercises={p.exercises}/>)}
    </>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({ parts }) => {
  return (
    <p>Number of exercises {parts.reduce((sum, value) => sum + value.exercises, 0)}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10, 
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7, 
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14, 
      id: 3
    }]
  }

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App