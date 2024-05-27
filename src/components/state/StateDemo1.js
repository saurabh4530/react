import React, { Component } from 'react'

export default class StateDemo1 extends Component {
    //every state change UI is re-render 
    state={counter:0};
    increment=()=>{
        // to update the state call setstate
        this.setState ({ counter:this.state.counter+1});
        console.log(this.state.counter);
    }
  render() {
      return (<>
        <div>StateDemo1</div>

        <div>counter is :{this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
    </>
    )
  }
}
