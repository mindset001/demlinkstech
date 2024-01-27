import React from 'react'
import "../../css/Navbar.css"
const Button = ({
    text,
    size,
    handleClick
}) => {
  return (
    <div className='inline-block'>
      <button onClick={handleClick} className={` cursor-pointer ${size === 'large' ? 'px-[48px] py-[20px]' : 'px-[1.5rem] py-[0.5rem]'}`}>{ text }</button>
    </div>
  )
}

export default Button
