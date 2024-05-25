import React from 'react'

export default function category(props) {
  let {img_src,name}=props.category
  return (
    <div className='text-center category'>
      <img src={img_src} alt="abc"  />
<div><span>{name}</span></div>
    </div>
  )
}
