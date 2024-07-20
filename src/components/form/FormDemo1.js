import React, { useState } from "react";

export default function FormDemo1() {
  const [fName, setFname] = useState("");
  const [LName, setLname] = useState("");

  const changeHandler = (e) => {
    // if (e.target.name==="Fname") {
    //     setFname(e.target.value)

    // } else {
    //     setLname(e.target.value)

    // }
    e.target.name === "Fname"
      ? setFname(e.target.value)
      : setLname(e.target.value);
  };

  const submitMyForm = (e) => {
    e.preventDefault();
    console.log(fName, "  ", LName);
  };
  return (
    <>
      <h1>Form Demo1 also example of controlled form</h1>
      <form onSubmit={submitMyForm}>
        <p>
          First name:
          <input name="Fname" onChange={changeHandler} />
        </p>
        <p>
          Last name:
          <input name="Lname" onChange={changeHandler} />
        </p>

        <input type="reset" value="clear" />
        <input type="submit" value="login" className="ms-1" />
      </form>

      <p>firstname:{fName}</p>
      <p>Lastname:{LName}</p>
    </>
  );
}
