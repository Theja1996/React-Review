import React from 'react'

//with jxs
const Hello =()=>{
    // return(
    //     <div className="with-jxs">
    //     <h1>learning jxs format </h1>
    //     </div>
    // );
    
    
    
    //without jsx use React.createElement('tag','attribute','property')
return(
    // React.createElement('div','null','without jxs');
    // React.createElement('div','id:"hello"','hi')
    React.createElement('div','id:"hello"',React.createElement('h1','null','without jxs'))


) 
}





export default Hello;