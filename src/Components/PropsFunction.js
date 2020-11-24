import React from 'react'


//not need "this " key word bcz this is functional component
const Pro=(props)=>{
    console.log(props);
    return(
<div>
    <h1>hi , {props.name} with {props.hero}</h1>
    {props.children}
</div>
    );
}
export default Pro;