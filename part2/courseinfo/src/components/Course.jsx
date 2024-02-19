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
  
  const Course = ({course}) => {
    return (
      <div>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

  export default Course