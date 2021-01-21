import React,{useState,useEffect} from 'react'

function UseEffectHook() {
    const [count, setcount] = useState(0);
    const [name, setname] = useState(" ");
useEffect(() => {
  document.title = `Title up ${count}`

//   conditionally run effect
  console.log(' useEffect - updating document title');
},[count])


    return (
        <div>
            <input value={name} onChange={e=>setname(e.target.value)}></input>
            <button onClick={()=>setcount(count+1)}>Click {count}</button>


        </div>
    )
}

export default UseEffectHook;
