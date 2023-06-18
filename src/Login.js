import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './Home'
import { LoginField } from './LoginField'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = ({ dark, setDark }) => {

  // const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [data, setData] = useState({})
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home setUser={setUser} user={user} data={data} setData={setData} />} />
        <Route path='Login' element={<LoginField data={data} setData={setData} setUser={setUser} user={user} />} />
      </Routes>
    </BrowserRouter>
  )
}
