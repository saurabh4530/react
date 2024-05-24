import React from 'react'

export default function ListDemo3() {
    let employees=[
        {eId:101,name:"saurabh",sal:5200},
        {eId:104,name:"tushar",sal:6200},
        {eId:103,name:"narendra",sal:8200},
        {eId:102,name:"mahesh",sal:5600},
    ]
  return (
    <>
    
    <h1 className='text-center bg-primary text-white'>Employees table</h1>
    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Eid</th>
                <th>name</th>
                <th>salary</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((emp ,ind)=>{
                return<tr key={ind}>
                    <td>{emp.eId}</td>
                    <td>{emp.name}</td>
                    <td>{emp.sal}</td>
                   
                </tr>
            })}
        </tbody>
    </table>
    
    </>
  )
}
