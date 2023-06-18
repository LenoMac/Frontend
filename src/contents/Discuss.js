import React, { useState } from 'react'
import { Widjet } from './Widjet'

export const Discuss = () => {
  const [chat, setChat] = useState({
    message: "",
    profile: "",
    time: ""
  })

  const sendMessage = (e) => {
    e.preventDefault()
  }
  return (
    <div className='flex-grow overflow-y-auto p-3'>
      <div className='p-[13px]'>
        <h3 className='text-lg font-semibold text-[#a057f3]'>Обсуждение</h3>
      </div>
      <div className='flex flex-col justify-between gap-1 w-[90%]'>
        <div id='chat' className='flex flex-col gap-2 h-[70vh] self-center w-[90%] rounded-md border-[0.5px] p-3'>
          <div className='p-3 self-end flex gap-1'>
            <p className='p-3 bg-gray-200 rounded-md'>Всем привет, это блог выживших пацанов</p>
            <div className='h-max self-center'><img src='https://www.w3schools.com/w3images/avatar2.png' className='w-[40px] rounded-full' alt=''/></div>
          </div>
        </div>
        <form onSubmit={sendMessage} className='flex gap-2 w-[90%] self-center'>
          <input id='id' type='text' className='px-3 py-2 rounded-md outline-none border-[0.5px] flex-grow' placeholder='Введите текст' />
          <button><i className="fa-solid fa-paper-plane cursor-pointer text-[#9151f8] text-[23px]"></i></button>
        </form>
      </div>
    </div>
  )
}
