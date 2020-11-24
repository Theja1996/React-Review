import React, {Component} from 'react'

class St extends Component{

    constructor(){
        super();
        this.state={
            msg:"This is 'state' using in class component"
        }
    }

    changeMsg(){
        this.setState({
            msg:"changing with 'setState' method"
        })
    }


    render(){
        return(
<div>
    <h1>
{this.state.msg}
    </h1>
    <button onClick={()=>this.changeMsg()}>Change State</button>
</div>
        );
    }
}



export default St;