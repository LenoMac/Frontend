import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { LoginField } from './LoginField'

export const Login = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginField />} />
        <Route path='Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )

}


// className='w-full h-[100vh] flex overflow-y-hidden