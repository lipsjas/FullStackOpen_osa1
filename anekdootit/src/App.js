import React, { useState } from 'react'

const voteArrayComponent = Array.apply( null, new Array( 7 )).map( Number.prototype.valueOf, 0 )

const copyArray = [...voteArrayComponent]

const compareNumbers = (a,b) =>
{
  return a - b
}

const Button = ( props ) => {
  return( 
  <button onClick={props.buttonValue}>{props.label}</button>
  )
}

const App = () => {
  const anecdotesList = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [ selected, setSelected ] = useState( 0 ) // indexNr of current handled value
  const [ selectedValue, setSelectedValue ] = useState( 0 ) // current handled value
  const [ selectedWinner, setSelectedWinner ] = useState( 0 ) // indexNr for biggest value
  const [ selectedWinnerValue, setSelectedWinnerValue ] = useState( 0 ) // biggest value
  
  const nextAnecdote = () => {
    
    let anecdoteIdNumber = Math.floor( Math.random() * anecdotesList.length )  
      if( anecdoteIdNumber === selected ) {
        // Refreshing the function in case randomized number is the same as earlier
        nextAnecdote()
      }
      else {
        setSelected( anecdoteIdNumber )
        setSelectedValue( copyArray[ anecdoteIdNumber ])
      }
  }

  const voteAnecdote = () => {
    copyArray[ selected ] += 1
    setSelectedValue( copyArray[ selected ])

    const topRatedArray = [...copyArray]
    topRatedArray.sort( compareNumbers )

    const topRatedValue = topRatedArray[ 6 ]
    setSelectedWinnerValue( topRatedValue )

    let topRatedIndexNumber = copyArray.indexOf( topRatedValue )
    setSelectedWinner( topRatedIndexNumber )
  }

  const AnecdoteViewer = () => {
    return(
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotesList[ selected ]}</p>
      </div>
    )
  }

  const VoteCountViewer = () => {
    return(
      <div>
        <p>has {selectedValue} votes</p>
      </div>
    )
  }

  const ButtonList = () => {
    return(
      <div>
        <Button label="Next anecdote" buttonValue={nextAnecdote}/>
        <Button label="Vote" buttonValue={voteAnecdote}/>
      </div>
    )
  }

  const VotedWinnerViewer = () => {
    return(
      <div>
        <h2>Anecdote with most votes:</h2>
        <p>{anecdotesList[ selectedWinner ]}</p>
        <p> has most votes: {selectedWinnerValue}</p>
      </div>
    )
  }
  
  return (
    <div>
      <AnecdoteViewer/>
      <VoteCountViewer/>
      <ButtonList/>
      <VotedWinnerViewer/>
    </div>
  )
}

export default App