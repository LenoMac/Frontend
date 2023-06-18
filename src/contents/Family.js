import React from 'react'
import { Widjet } from './Widjet'

export const Family = () => {
  return (
    <div className='flex-grow overflow-y-auto'>
      <div className='p-[13px]'>
        <h3 className='text-lg font-semibold text-[#a057f3]'>Семья</h3>
      </div>
      <div className='p-[15px] flex flex-col gap-4'>
        <p className='font-medium text-[#888]'>Количество услуг: 4</p>
        <div className='flex justify-between'>
          <Widjet type="1" />
          <Widjet type="2" />
          <Widjet type="3" />
          <Widjet type="4" />
        </div>
        <div className='flex justify-between'>
          <Widjet type="5" />
          <Widjet type="6" />
          <Widjet type="7" />
          <Widjet type="8" />
        </div>
      </div>
    </div>
  )
}
