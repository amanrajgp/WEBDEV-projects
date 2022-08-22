import React from 'react'
import {solution } from '../inputbox/Inputbox'

const Lose = (props) => {
  function handleclick(){
    window.location.reload()
  }
  return (
    <div>
      <h1>OOPs! You Lose</h1>
      <h3>Better Luck! Next time  </h3>
      <h3>Correct Guess:{solution}</h3>
      <button onClick={handleclick}>TRY AGAIN</button>

    </div>
  )
}

export default Lose;