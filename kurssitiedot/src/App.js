import React from 'react'

// Alustukset sekä vakioiden/muuttujien määritykset
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

// Komponenttien määritykset
const Header = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
    )
}
const Content = () => {
  return (
    <div>
      <p>{parts[0].name} lkm: {parts[0].exercises}</p>
      <p>{parts[1].name} lkm: {parts[1].exercises}</p>
      <p>{parts[2].name} lkm: {parts[2].exercises}</p>
   </div>
    )
}
const Total = () => {
  return (
    <div>
      {parts.map( summa => 
        console.log( summa.exercises )
        )}

      <p>Number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
    )
}

return (
  <div>
    <Header kurssi={course} />
    <Content />
    <Total />
  </div>
  )
}

export default App
