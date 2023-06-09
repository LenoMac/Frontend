import React from 'react'
import { BrowserRouter, useNavigate, Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './Home'
import { LoginField } from './LoginField'
import { useState } from 'react'

export const Login = () => {

  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={user !== null ? (<Navigate to='Home' replace={true} />) :
            (
              <LoginField setUser={setUser} user={user} />
            )} />
        <Route path='Home' element = { user !== null ? (<Home setUser={setUser} user={user}/>) : (<Navigate to='/' replace={true}/>) }/>
      </Routes>
    </BrowserRouter>
  )
}