import React, { Component } from 'react'

 class Deprop extends Component {
   
    render() {
        const {name,hero}= this.props
        return (
            <div>
                <h1>One of TV series {name} FBI agent {hero}</h1>
            </div>
        )
    }
}

export default Deprop
