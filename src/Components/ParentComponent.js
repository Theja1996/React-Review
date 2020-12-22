import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         ParentName:'React life'
    }
   this.greetingParent = this.greetingParent.bind(this)
}

greetingParent(ChildName){
    alert(`hello ${this.state.ParentName} from ${ChildName}`)
}



    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetingParent}/>
            </div>
        )
    }
}

export default ParentComponent
