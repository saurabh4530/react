import React, { useState } from 'react';
import  Modal  from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export default function ModalDemo2() {
  //   const [show ,setShow]=useState(false)
  //   const handleClose=()=>{
  //       setShow(false)
  //   }
  //   const handleShow=()=>{
  //       setShow(true)
  //   }
  // return (<>
  // <div>modalDemo2</div>

  //     <Modal show={show} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Modal heading</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Close
  //         </Button>
  //         <Button variant="primary" onClick={handleClose}>
  //           Save Changes
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  // <Button  onClick={handleShow}>
  //     click me
  //     </Button>
  
  
  // </>
  // )
//............................................//


const [flag1,setFlag1]=useState(false)
const [flag2,setFlag2 ]=useState(false)
function openModal1(){
  setFlag1(true)
}
function closeModal1(){
  setFlag1(false)
}
function openModal2(){
  setFlag2(true)
}
function closeModal2(){ 
  setFlag2(false)
}
return(
  <>
  <Button className='m-1' onClick={openModal1}>Table inside Modal </Button>
  <Button className='m-1' onClick={openModal2}> Form inside Modal </Button>

<Modal show={flag1} onHide={closeModal1}>
  <Modal.Header closeButton>
    this is Modal Header
  </Modal.Header>
  <Modal.Body>
  <table className='table table-bordered table-striped '>
      <tr>
        <td>data1</td>
        <td>data2</td>
        <td>data3</td>
        <td>data4</td>
        <td>data5</td>
      </tr>
      <tr>
        <td>data1</td>
        <td>data2</td>
        <td>data3</td>
        <td>data4</td>
        <td>data5</td>
      </tr>
      <tr>
        <td>data1</td>
        <td>data2</td>
        <td>data3</td>
        <td>data4</td>
        <td>data5</td>
      </tr>
      <tr>
        <td>data1</td>
        <td>data2</td>
        <td>data3</td>
        <td>data4</td>
        <td>data5</td>
      </tr>
      <tr>
        <td>data1</td>
        <td>data2</td>
        <td>data3</td>
        <td>data4</td>
        <td>data5</td>
      </tr>
    </table>
  </Modal.Body>

  <Modal.Footer><h1>this is my Footer</h1>
<Button variant='secondary' onClick={closeModal1}>close</Button>
  </Modal.Footer>
</Modal>


<Modal show={flag2} onHide={closeModal2}>
  <Modal.Header closeButton>
    this is Modal Header
  </Modal.Header>
  <Modal.Body>
  <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </Modal.Body>

  <Modal.Footer>
<Button variant='secondary' onClick={closeModal2}>close</Button>
  </Modal.Footer>
</Modal>
  </>
)


}
