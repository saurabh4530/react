import React, { Component } from 'react'

export default class ErrorBoundaries extends Component {
    constructor(props){
        super(props)
        this.state={hasError:false}

    }
    static getDerivedStateFromError(error){
       return {hasError:true}
    }
    componentDidCatch(error,errorInfo){
        console.error("Error caught by error boundaries:",error,errorInfo);
    }
  render() {if (this.state.hasError) {
    return <h1>Something went Wrong.......................!</h1>
    
  }

    return this.props.children    
  }
}
