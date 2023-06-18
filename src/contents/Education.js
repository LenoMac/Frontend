import React from 'react'
import { Widjet } from './Widjet'

export const Education = () => {
  return (
    <div className='flex-grow overflow-y-auto'>
      <div className='p-[13px]'>
        <h3 className='text-lg font-semibold text-[#a057f3]'>Образование</h3>
      </div>
      <div className='p-[15px] flex flex-col gap-4'>
        <p className='font-medium text-[#888]'>Количество услуг: 12</p>
        <div className='flex justify-between'>
          <Widjet type="9" />
          <Widjet type="10" />
          <Widjet type="11" />
          <Widjet type="12" />
        </div>
        <div className='flex justify-between'>
          <Widjet type="13" />
          <Widjet type="14" />
          <Widjet type="15" />
          <Widjet type="16" />
        </div>
        <div className='flex justify-between'>
          <Widjet type="17" />
          <Widjet type="18" />
          <Widjet type="19" />
          <Widjet type="20" />
        </div>
      </div>
    </div>
  )
}
