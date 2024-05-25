import React, { Component } from 'react'

export default class GreetDemo2 extends Component {
  render() {
    return (
        <>
        <div>GreetDemo2</div>
<div>hello {this.props.name}, {this.props.msg}</div>

        </>
    )
  }
}
