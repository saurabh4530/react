import React from 'react'
import Modal from 'react-modal'

export default function  ModelDemo1() {
    const [modalIsOpen, setIsOpen]=React.useState(false)
    function openModel(){
            setIsOpen(true)
    }
    function closeModel(){
            setIsOpen(false)
    }
  return (
    <>
    <div>ModelDemo1</div>
    
    <button onClick={openModel}>Open Model</button>

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModel}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}

>
    <button onClick={closeModel}>close</button>
     <div>i am model</div>
     <div>i am div</div>
    </Modal>
    </>
  )
}
