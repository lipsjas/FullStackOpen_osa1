import React, { useState } from 'react'

const Button = ( props ) => {
  return (
    <button onClick={ props.handleClick }>
    { props.label }
    </button>
  )
}

const App = () => {
  const [ counterGood, setCounterGood ] = useState(0)
  const [ counterNeutral, setCounterNeutral ] = useState(0)
  const [ counterBad, setCounterBad ] = useState(0)
  const [ counterAll, setCounterAll ] = useState(0)
  const [ totalValue, setTotalValue ] = useState(0)

  const functionGood = ( props ) => {
    setCounterGood( counterGood + 1 )
    setCounterAll( counterAll + 1 )
    setTotalValue( totalValue + 1 )
  }

  const functionNeutral = ( props ) => {
    setCounterNeutral( counterNeutral + 1 )
    setCounterAll( counterAll + 1 )
    setTotalValue( totalValue + 0 )
  }

  const functionBad = ( props ) => {
    setCounterBad( counterBad + 1 )
    setCounterAll( counterAll + 1 )
    setTotalValue( totalValue - 1 )
  }

const StatisticsLine = ( props ) => {
    return (
          <tr>
            <td>{ props.label }</td>
            <td>{+( Math.round( props.value + "e+2" ) + "e-2" )} { props.percent }</td>
          </tr>
      )
}
  const Page = () => {
    return (
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={ functionGood } label="Good" value="1"/>
        <Button handleClick={ functionNeutral } label="Neutral" value="0"/>
        <Button handleClick={ functionBad } label="Bad" value="-1"/>
      </div>
      )
  }
  
  const Tulostaulu = () => { 
    if( counterAll === 0 ) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticsLine label="Goods:" value={ counterGood }/>
            <StatisticsLine label="Neutrals:" value={ counterNeutral }/>
            <StatisticsLine label="Bads:" value={ counterBad }/>
            <StatisticsLine label="All:" value={ counterAll }/>
            <StatisticsLine label="Average:" value={ totalValue / counterAll }/>
            <StatisticsLine label="Positive:" value={ counterGood / counterAll * 100 } percent="%"/>
          </tbody>
        </table>
      </div>
      )
    }
  }

  return (
    <div>
      <Page />
      <Tulostaulu />
    </div>
  )
}

export default App
