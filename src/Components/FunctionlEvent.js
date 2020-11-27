import React from 'react'

function FunEvent() {
  function  EventHandle()  {
      console.log('click is working')
  }
  
      
    return (
        <div>
            <button onClick={EventHandle}>Click</button>
            
        </div>
    )
}

export default FunEvent;
