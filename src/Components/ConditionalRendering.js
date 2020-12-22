import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {

// Fourth approach : short circuit operator

return this.state.isLogin && <div>Admin In</div>


// Third approach :Ternary conditional operator

    // return this.state.isLogin ? 
    // <div>Admin In</div> :
    //  <div>User In</div>;


// Second approach : element variable

    //         let msg
    //         if(this.state.isLogin){
    //           msg=  <div>Admin In</div>
    //         } else{
    //             msg=<div>User In</div>
    //         }
    // return <div>{msg}</div>

// first approch: if-else starement


    // if(this.state.isLogin){
    //     return <div>Admin In</div>
    // }else{
    //     return <div>User In</div>
    // }
  }
}

export default ConditionalRendering;
