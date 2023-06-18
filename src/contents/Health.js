import React, { useEffect } from 'react'
import { Widjet } from './Widjet'
import { useState } from 'react'
import axios from 'axios'

// import { json } from 'react-router-dom'
export const Health = ({ user }) => {


  const [logined, setLogin] = useState([
    {
      id: 1,
      login: 'hafizbey',
      password: 2004,
      block: true,
    },
    {
      id: 2,
      login: 'abatai',
      password: 2003,
      block: false,
    },
    {
      id: 2,
      login: 'other',
      password: 2002,
      block: false,
    },
  ])

  useEffect(() => {
    axios.get('http://192.168.141.174:8888/api/login/',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then(response => {
        console.log(JSON.stringify(response.data))
        setLogin(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  // const [{ login, password }] = logined;
  const [loginUser, setLoginUser] = useState(null)
  const [handleHealth, setHanleHealth] = useState('sertificate')
  const [handlePopup, setHandlePopup] = useState(false)
  const [isSertificate, setSertificate] = useState(false)
  const [sertificateData, setSertificateData] = useState({})

  const myFunc = (dotted) => {
    setHanleHealth(dotted)
  }

  const getDataFromBack = (e) => {
    e.preventDefault()

    let first = document.getElementById('login').value,
      second = document.getElementById('pass').value

    if ((logined[0].login === first && logined[0].password === second) || (logined[1].login === first && logined[1].password === second) || (logined[2].login === first && logined[2].password === second)) {
      if ((logined[0].is_block === false) || (logined[1].is_block === false) || (logined[2].is_block === false)) {
        alert("Yes")
        setSertificate(true)
        axios.get('http://192.168.141.174:8888/api/sertificate/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(req => {
            console.log(JSON.stringify(req.data));
            setSertificateData(req.data)
          })
      }
      else {
        alert("You are blocked")
      }
    } else {
      alert("Неверный логин или пароль")
    }
    first = ''
    second = ''
    console.log(logined);

  }

  function CheckSertificate(e) {
    e.preventDefault()
    let pin = document.getElementById('pin').value,
        passSeries = document.getElementById('passSeries').value
    if ((sertificateData[0].pin === pin && sertificateData[0].passport_series === passSeries) || (sertificateData[1].pin === pin && sertificateData[1].passport_series === passSeries) || (sertificateData[2].pin === pin && sertificateData[2].passport_series === passSeries)){
      if((sertificateData[0].is_exist === true) || (sertificateData[1].is_exist === true) || (sertificateData[1].is_exist === true)){
        alert('У вас есть сертификат')
      } else{
        alert("У вас нет сертификат")
      }
    } else{
      alert("Неправильный ПИН или серия паспорта")
    }
  }

  return (
    <div className='flex-grow overflow-hidden relative'>
      <div className='p-[13px]'>
        <h3 className='text-lg text-[#a057f3] font-semibold'>Здоровье</h3>
      </div>
      <div className='p-[15px] flex flex-col gap-4'>
        <p className='font-medium'>Количество услуг: 8</p>
        <div className='flex justify-between'>
          <div onClick={() => myFunc('sertificate')}>
            <Widjet setHandlePopup={setHandlePopup} type="1" />
          </div>
          <div onClick={() => myFunc('info')}>
            <Widjet setHandlePopup={setHandlePopup} type="2" />
          </div>
          <div onClick={() => myFunc('spravka')}>
            <Widjet setHandlePopup={setHandlePopup} type="3" />
          </div>
          <div onClick={() => myFunc('other')}>
            <Widjet setHandlePopup={setHandlePopup} type="4" />
          </div>
        </div>
        <div className='flex justify-between'>

          <div onClick={() => myFunc("other-1")}>
            <Widjet setHandlePopup={setHandlePopup} type="5" />
          </div>
          <div onClick={() => myFunc("other-2")} >
            <Widjet setHandlePopup={setHandlePopup} type="6" />
          </div>
          <div onClick={() => myFunc("other-3")}>
            <Widjet setHandlePopup={setHandlePopup} type="7" />
          </div>
          <div onClick={() => myFunc("other-4")}>
            <Widjet setHandlePopup={setHandlePopup} type="8" />
          </div>
        </div>
      </div>

      <div className={`${handlePopup ? 'top-0 left-0 opacity-1 z-10' : 'top-[100%] opacity-0 -z-10'} transition-all bg-white w-full h-full flex flex-col p-3 absolute`}>
        <span onClick={() => setHandlePopup(false)} className='self-end'><i class="fa-solid cursor-pointer fa-xmark"></i></span>
        {user ?
           <form onSubmit={isSertificate ? CheckSertificate : getDataFromBack} className='flex flex-col gap-2 self-center mt-[200px] '>
            <div className='flex justify-between gap-2'>
              <p className='text-[17px]  self-center font-semibold text-[#333]'>{isSertificate ? 'ПИН' : 'Login'}</p>
              <input id={isSertificate ? 'pin' : 'login'} className='rounded-[5px] outline-none max-w-[400px] w-[300px] border-[1px] focus:border-[#9151f8] transition-all p-1' type='text' />
            </div>
            <div className='flex justify-between gap-2'>
              <p className='text-[17px] self-center font-semibold text-[#333]'>{ isSertificate ? 'Серия паспорта' : 'Пароль'}</p>
              <input id={isSertificate ? 'passSeries' : 'pass'} className='rounded-[5px] outline-none max-w-[400px] w-[300px] border-[1px] focus:border-[#9151f8] transition-all p-1' type={isSertificate ? 'text' : 'password'} />
            </div>
            <div className='self-end justify-between gap-2'>
              <button className='bg-[#9151f8] text-white py-1 px-2 rounded-[4px] cursor-pointer font-bold hover:shadow-lg hover:shadow-gray-200'>{isSertificate ? 'Проверить' : 'Войти'}</button>
            </div>
          </form>
          : (
            <div className='font-semibold self-center mt-[100px]'>Проверить выдача сертификатов доступна тольк для зарегистрированных :( </div>
          )}
      </div>
    </div>
  )
}
