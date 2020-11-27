import React, { Component } from 'react'

 class ClzEvent extends Component {
    HandleEvent(){
        console.log("Clike me is working");
    }
    render() {
        return (
            <div>
                <button onClick={this.HandleEvent}>Click me</button>
            </div>
        )
    }
}

export default ClzEvent;
