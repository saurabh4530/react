import React from 'react'

export default function ListEmployee({employees,deleteEmp}) {



  return (
   <>
   <h4 className='text-center'>Employee Table</h4>
   <table className='table table-bordered table-striped'>
    <thead>
        <tr>
            <th>eid</th>
            <th>name</th>
            <th>salary</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {employees.map((emp,ind)=>{
      return <tr key={ind}>
            <td>{emp.eId}</td>
            <td>{emp.name}</td>
            <td>{emp.sal}</td>
        <td>
            <button className='btn btn-danger' onClick={()=>deleteEmp(emp.eId)}>Delete</button>
            </td>
      </tr>
        })}
    </tbody>
   </table>
   </>
  )
}
