import React from 'react'
import {useState} from "react"
import "./Inputbox.css";

const solution=Math.floor((Math.random()+1) * 10);
console.log(solution);


const Inputbox = (props) => {
  const [status,setstatus]=React.useState("NOT GUESSED YET")
  const [count,setcount]=useState(1)
  
  console.log(solution);
  function handleclick(e){
    setcount(count+1)
    e.preventDefault();
    const userguess=e.target[0].value;
    if (props.curinitchance-count!==0){
      if (userguess>solution){
        setstatus("TOO HIGH")
        
        
  
      }
         
      else if (userguess<solution){
        setstatus("TOO LOW")
        
        
      }
        
      else{
        setstatus("Correct")
        props.result1(count,props.curinitchance-count-1)
        
      
      }
         

    }else{
      props.result2()
    }

    

    
    
    
  }

  return (
    
    <div className="inputs">
          <pre>Level:  {props.curlevel}</pre>
        
          <form onSubmit={handleclick}>
            <input type="text" className="guessinput" placeholder="Guess the number"/>
            <button type="submit">Check</button>
            

          </form>
          <pre>your guess : {status}</pre>
          <pre>Chances Left:{props.curinitchance-count+1}</pre>
    </div>
  )
}

export {Inputbox as default,solution}
