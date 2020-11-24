import React, {Component} from 'react'


//in here must need "this" key word bcz this is class component
class Prop extends Component{
    render(){
        return(
            <div>
<h1 >Hello, {this.props.name} your pet is {this.props.pet}</h1>
{this.props.children}
</div>
        );
    }
}

export default Prop;