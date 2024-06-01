import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class PureCompDemo1 extends PureComponent {
    state={
        name:"saurabh"
    }
    changeName=()=>{
        this.setState({name:"Saurabh"})
    }
  render() {
    console.log("render is called");
    return (
        <>
        <div>PureCompDemo1</div>
        <div>name:{this.state.name}</div>
        <button onClick={this.changeName}>Change</button>
        
        </>
    )
  }
}

