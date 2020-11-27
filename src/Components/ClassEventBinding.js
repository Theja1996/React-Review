import React, { Component } from 'react'

export class ClzEventBinding extends Component {

constructor(props) {
    super(props)

    this.state = {
        // {/* state msg calling */}
         msg:"Hi This is event binding learning session"
    }
    this.HandleEvent = this.HandleEvent.bind(this)
}

HandleEvent(){
    this.setState({
        // first method event bind
        msg:"Event Change without using arrow function"
    })
}



    render() {
        return (
            <div>
{/* state msg calling */}

                <div>{this.state.msg}</div>
                {/* first method event bind */}
                <button onClick={this.HandleEvent.bind(this)}>Button</button>
                {/* second method event bind */}
                <button onClick={this.HandleEvent}>Button</button>
                {/* third nethod event bind */}
                <button onClick={()=>this.HandleEvent()}>Button</button>
            </div>
        )
    }
}

export default ClzEventBinding
