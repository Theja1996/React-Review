import React,{useState} from 'react'

function HooksCountMore() {
    const initialCount = 0;
const [count, setcount] = useState(initialCount);

const IncrementFive =()=>{
for(let i ;i<5;i++){
    setcount(prevCount => prevCount+1);
}

}

    return (
        <div>
            Count :{count}
            <button onClick={()=>setcount(initialCount)}>Re-Set</button>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            <button onClick={()=>setcount(count-1)}>Decrement</button>
            <button onClick={IncrementFive} >Increment 5</button>

        </div>
    )
}

export default HooksCountMore
