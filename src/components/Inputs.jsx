import React from 'react'

function Inputs({type = "text",placeholder="enter your input",handleInput,disabled=false,css}) {
  return (
    <input type={type} placeholder={placeholder} className={`w-full  h-10 bg-transparent  border-2 border-stone-700 rounded-lg placeholder:text-white py-1 px-2 outline-none focus:border-yellow-500 ${css}`} onChange={handleInput}   />
  )
}

export default Inputs