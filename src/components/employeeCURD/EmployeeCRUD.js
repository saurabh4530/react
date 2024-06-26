import React, { useState } from "react";
import ListEmployee from "../employeeCURD/ListEmployee";
import AddEmployee from "./AddEmployee";

export default function EmployeeCRUD() {
  const initialEmployees = [
    { eId: 101, name: "saurabh", sal: 5000 },
    { eId: 104, name: "devendra", sal: 5000 },
    { eId: 103, name: "eknath", sal: 5000 },
    { eId: 102, name: "ajit", sal: 5000 },
  ];
  const [employees, setEmployees] = useState(initialEmployees);

  const deleteEmp = (eidToDelete) => {
    const tempArray = employees.filter((emp) => {
      return emp.eId !== eidToDelete;
    });
    setEmployees(tempArray);
  };
const addEmp=  (empObj)=>{
setEmployees([...employees,empObj])
} 
  return ( 
    <>
      <h1 className="text-center bg-primary text-white p-2">
        this is Employee CRUD Example{" "}
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <ListEmployee employees={employees} deleteEmp={deleteEmp}  />
          </div>
          <div className="col-sm-4">
            <AddEmployee addEmp={addEmp} />
          </div>
        </div>
      </div>
    </>
  );
}
