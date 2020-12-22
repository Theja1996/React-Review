import React from 'react'

function List() {
 const names = ['toyota','kia','honda','alto']
const nameList = names.map(name=><h1>{name}</h1>)

const persons = [
    {
        id: 1,
        name:'hais',
        age:20,
        skill:'vue',
    },
    {
        id:2,
        name:'hiha',
        age:25,
        skill:'react',
    }, {
        id:3,
        name:'tia',
        age:26,
        skill:'anguler',
    }, {
        id:4,
        name:'llia',
        age:24,
        skill:'go',
    }, {
        id:5,
        name:'kia',
        age:20,
        skill:'node',
    },
]


const personList = persons.map(person=><p>I am {person.name} I am {person.age} years old ,I know {person.skill}</p>) 
    return (
        <div>
{nameList}

{personList}
{/* {names.map(name => <h1>{name}</h1>)} */}



        {/* <h1> {names[0] }</h1>  
        <h1>{names[1]}  </h1>  
        <h1> {names[2] }</h1>  
        <h1>{names[3]}  </h1>   */}
        </div>
    )
}

export default List
