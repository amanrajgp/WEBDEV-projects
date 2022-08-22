import React from 'react'

const Win = (props) => {
  function handleclick(){
    window.location.reload()
  }
  return (
    <div>
      <h1>CONGRATULATIONS! You Won</h1>
      <h3>You Guessed in {props.chances} chances</h3>
      <h3>Chances Left :{props.leftchances+1} </h3>
      <button onClick={handleclick}>PLAY AGAIN</button>

    </div>
  )
}

export default Win