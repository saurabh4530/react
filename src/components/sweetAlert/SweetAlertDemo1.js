import React from 'react';
import Swal from 'sweetalert2';

export default function SweetAlertDemo1() {
    const alertDemo1=()=>{
        alert("hello");
    }
    const alertDemo2=()=>{
       Swal.fire("Good Job", "you clicked the button!","success")
    }
    const alertDemo3=()=>{
       Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/4  00/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      }) 
    }
    const alertDemo4=()=>{
       Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      }) 
    }
  return (<>
  <div>SweetAlertDemo1</div>
  <button className='m-1' onClick={alertDemo1}>Js Alert</button> 
  <button onClick={alertDemo2}>Sweet Alert</button>
  <button className='m-1' onClick={alertDemo3}>Sweet Alert</button> 
  <button className='m-1' onClick={alertDemo4}>Confirmation</button> 
  
  </>
  )
}
