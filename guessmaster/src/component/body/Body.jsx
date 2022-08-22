import React from 'react';
import "./Body.css"
import Level from '../level/Level';
import Inputbox from '../inputbox/Inputbox';
import {useState} from "react";
import Win from '../win/Win';
import Lose from '../lose/Lose';


//child to parent:value transfer through function argument.
//parent to child : value transfer through props.

const Body = () => {


  const [vbody,setvbody]=useState(<Level handleChange={handleChange}/>)
  
  
  function handleChange(levelvalue,initailchancevalue){
    const currentlevel=levelvalue;
    const initchance=initailchancevalue;
    
    setvbody(<Inputbox curlevel={currentlevel} curinitchance={initchance} result1={handleresult1} result2={handleresult2}/>)

  }
  function handleresult1(value1,value2){
    setvbody(<Win chances={value1} leftchances={value2}/>)
    
  }
  function handleresult2(){
    setvbody(<Lose/>)
    
  }
  
   

  
  
  

  return (
    <div className="body">
      <h2>Show Us your Guessing Ability.</h2>
      <h4>You have to guess a no. between 1 to 100</h4>
      
      {vbody}

    </div>
  )
}

export default Body