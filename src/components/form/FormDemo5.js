import React, { useState } from "react";

export default function FormDemo5() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [fNameErrorMsg, setFNameErrorMsg] = useState("");
  const [lNameErrorMsg, setLNameErrorMsg] = useState("");
  const [hasError, setHasError] = useState(false);

  const changeHandler = (e) => {
    if (e.target.name === "fname") {
      setFname(e.target.value);
      if (!e.target.value) {
        setFNameErrorMsg("firstName should not be empty.......!");
        setHasError(true);
      } else if (e.target.value.length < 5) {
        setFNameErrorMsg("firstName should contain 5 letter !");
        setHasError(true);
      } else {
        setFNameErrorMsg("");
        setHasError(false);
      }
    } else if (e.target.name === "lname") {
      setLname(e.target.value);
      if (!e.target.value) {
        setLNameErrorMsg("lastName should not be empty........!");
        setHasError(true);
      } else if (e.target.value.length < 5) {
        setLNameErrorMsg("lastName should contain 5 letter !");
        setHasError(true);
      } else {
        setLNameErrorMsg("");
        setHasError(false);
      }
    } else {
    }
  };

  const sumitHandler = (e) => {
    e.preventDefault();
    alert(`${fname}   ${lname}`);
  };
  return (
    <>
      <div className="text-center">
        <div>FormDemo5 , form Validation while typing </div>
        <form onSubmit={sumitHandler}>
          FirstName:
          <input name="fname" value={fname} onChange={changeHandler} />
          <p className="text-danger">{fNameErrorMsg}</p>
          
          
          LastName:
          <input name="lname" value={lname} onChange={changeHandler} />
          <p className="text-danger">{lNameErrorMsg}</p>
          
          <button className="btn btn-success" disabled={hasError}>
            submit
          </button>
        </form>
      </div>
    </>
  );
}
