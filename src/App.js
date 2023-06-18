import React from 'react'
import './Dark.css'
import { Login } from './Login';
import { useState } from 'react';

function App(){
  const [dark, setDark] = useState(false)
  return (
    <div id={dark && 'id'} className='w-full h-full'>
      <Login dark={dark} setDark={setDark}/>
    </div>
  )
}

export default App;