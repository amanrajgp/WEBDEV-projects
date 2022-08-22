import React from 'react'



const Level = (props) => {
    
    function handleclick( e){
       const levels=e.target.name;
       if(levels==="Easy"){
        const initialchances=6
        e.preventDefault();
        props.handleChange(levels,initialchances)

       }else if(levels==="Medium"){
        const initialchances=5
        e.preventDefault();
        props.handleChange(levels,initialchances)

       }else if(levels==="Hard"){
        const initialchances=4
        e.preventDefault();
        props.handleChange(levels,initialchances)

       }
          
      

      
        
        
    }
    
    
  return (
    <div>
            <h3> Looking Easy ..Aah.. Let's See</h3>

            <h2>Choose Your Difficulty Level</h2>
            <div className="diff_level">
                
                <button onClick={handleclick} className="dif" name="Easy">Easy</button>
                <button onClick={handleclick} className="dif" name="Medium">Medium</button>
                <button onClick={handleclick} className="dif" name="Hard">Hard</button>

        </div>
    </div>
    
  )
}

export default Level;