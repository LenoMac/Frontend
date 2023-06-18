import React, { useState } from 'react'
import './forminput.css'

export const Formdata = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props
  const [focused, setFocused] = useState(false)

  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
    <div className='relative self-center flex flex-col'>
      <label className='bg-white transition-colors px-1 cursor-text text-[#24A472] text-[14px] left-[10px] top-[7px]'>{label}</label>
      <input
        focused={focused.toString()} 
        onBlur={handleFocus} 
        {...inputProps} 
        onChange={onChange} 
        onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
        className='text-[#24a472] border-gray-300 border-[1px] px-2 py-[6px] self-center w-[320px] rounded-[5px] outline-none text-[16px]'/>
      <span className='text-[12px] text-red-600 w-max max-w-[320px] px-2 py-1 hidden'>{errorMessage}</span>      
    </div>
  )
}

// label css: 

// input border: border-[#39d69a]
