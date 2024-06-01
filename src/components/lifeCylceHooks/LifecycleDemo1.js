import React, { Component } from 'react'

export default class LifecycleDemo1 extends Component {
    constructor(props) {
      super(props)// parent class's constructor
    console.log("construtor.........");
      this.state = {
         name:"saurabh"
      }
    }
    static getDerivedStateFromProps(props,state){
      console.log("getDerivedStateFromProps");
      return{name:props.name  || state.name}
    }
    f1(){
        console.log("i am f1.... ");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
  render() {
    console.log("Render..........");
    return (<>
    <div>LifecycleDemo1</div>
    <div>Name is-{this.state.name}</div> 
    <button onClick={()=>{this.setState({name:"ram"})}}>changeName</button>
    
    </>
    )
  }
}
