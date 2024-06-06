import React, { useState } from "react";

function ObjUseState() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
 
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]:event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    console.log( formData);
  };

  return (
    <div>
        <div>ObjUseState</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /> <br />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message" id="message"
          value={formData.message}
          onChange={handleChange}
        
        />
        <br />
        <button type="submit" style={{backgroundColor:"green" ,color:"white"}}>SUBMIT</button>
      </form>
    </div>
  );
}

export default ObjUseState;