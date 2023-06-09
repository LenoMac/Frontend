import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { LoginField } from './LoginField'
import { useState, useEffect } from 'react'

export const Login = () => {

  const [user, setUser] = useState(null)


  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })

      .then((response) => {
        if(response.status === 200) return alert();
        throw new Error("authentication has been failed!")
      })
      .then((resObj) => {
        setUser(resObj.user);
      })
      .catch((err) => {
        console.log(err);
      })
    }
    getUser();
  }, []);
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