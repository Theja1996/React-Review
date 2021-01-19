import React,{useState} from 'react'

function UseStateObjectHook() {
const [item, setitem] = useState({electric:" ", automobile:" "});

    return (
        <div>
            <form>

<input type="text" value={item.electric} onChange={e=>setitem({...item, electric: e.target.value})} />
<h1> Electrical Item Name:{item.electric}</h1>
{/* <button onClick="{item.electric}"> Electrical Item Add:</button> */}
<input type="text" value={item.automobile} onChange={e=>setitem({...item, automobile: e.target.value})} />
<h1>Automobile Item Name :{item.automobile}</h1>

            </form>
           
        </div>
    )
}

export default UseStateObjectHook;
