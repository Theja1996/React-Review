import React,{useState} from 'react'

function UseStateArrayHook() {
const [items, setitems] = useState([]);


const AddItem=()=>{
    setitems([...items,{
        id: items.length,
        value:Math.floor(Math.random()*10)+1,
    }])
}

    return (
        <div>
            <button onClick={AddItem}>ADD ITEM</button>
            <ul>
                {items.map(item=>(<li key={item.id}>{item.value}</li>))}
            </ul>
        </div>
    )
}

export default UseStateArrayHook;
