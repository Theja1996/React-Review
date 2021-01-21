import React,{useEffect,useState} from 'react'

function RunEffectOnlyOne() {
const [X, setX] = useState(0);
const [Y, setY] = useState(0);
const logMousePosition =e=>{
    console.log("mouse Event");
    setX(e.clientX);
    setY(e.clientY);
}

useEffect(() => {
   console.log("Effect called");
window.addEventListener('mousemove',logMousePosition);
  
},[] )

    return (
        <div>
            Hook Y - {X} Y - {Y}
        </div>
    )
}

export default RunEffectOnlyOne;
