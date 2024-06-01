//@ts-nocheck
import React, { Component } from 'react'
// https://jsonplaceholder.typicode.com/users
export default class LifecycleDemo2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          users:[{
            "id": 1001,
            "name": "saurabh kakade",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          },]
      }
    }
    getUsers=async()=>{
        const users=await fetch("https://jsonplaceholder.typicode.com/users")
    const finalData=await users.json();
this.setState({users:[...this.state.users,...finalData]})//if u requried both from user and api
// this.setState({users:finalData}) 
}
    componentDidMount(){
        console.log("componentDidMount");
        this.getUsers();
    }
  render() {
    return (<>
    <div className='text-center'>LifecycleDemo2</div>
<h1 className='text-center'> User List</h1>
    <table className='table table-bordered table-striped' >
<thead>
<tr>
              <th>Name</th>
              <th>Email</th>
              <th>phone</th>
              <th>city</th>
              <th>Pin code</th>
            </tr>
</thead>
<tbody>
    {
        this.state.users.map((user, ind)=>{
           return <tr key={ind}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.zipcode}</td>
           </tr> 
        })
    }
</tbody>
    </table>
    </>
    )
  }
}
