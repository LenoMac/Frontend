import React from 'react'
import logo from './logo.png'


export const SignUp = () => {

    function change(e) {
        const label = document.getElementById('label'),
            label1 = document.getElementById('label1'),
            label2 = document.getElementById('label2'),
            label3 = document.getElementById('label3')
        label.style.transition = '0.3s'
        if (e.target.value) {
            label.style.cssText = 'transform: translate(0px, -18px); font-size: 12px; transition: 0.3s'
            label1.style.cssText = 'transform: translate(0px, -18px); font-size: 12px; transition: 0.3s'
            label2.style.cssText = 'transform: translate(0px, -18px); font-size: 12px; transition: 0.3s'
            label3.style.cssText = 'transform: translate(0px, -18px); font-size: 12px; transition: 0.3s'
        } else {
            label.style.cssText = 'transform: translate(0px, 0px); font-size: 15px; transition: 0.3s'
            label1.style.cssText = 'transform: translate(0px, 0px); font-size: 15px; transition: 0.3s'
            label2.style.cssText = 'transform: translate(0px, 0px); font-size: 15px; transition: 0.3s'
            label3.style.cssText = 'transform: translate(0px, 0px); font-size: 15px; transition: 0.3s'
        }
    }

    return (
        <div className='p-8 h-[90vh] flex-grow self-center'>
            <div className='flex flex-col self-center gap-2'>
                <div className='flex flex-col gap-2'>
                    <div className='w-[50px] self-center flex'>
                        <img src={logo} alt='' />
                    </div>
                    <h2 className='self-center text-[#24A472] text-[28px] font-semibold'>Create Your Account</h2>
                </div>
                <from action='www.google.com' method='GET' className='flex flex-col gap-4'>
                    <div className='relative self-center'>
                        <label htmlFor='input' id='label' className='bg-white transition-colors px-1 cursor-text text-[#24A472] text-[15px] absolute left-[10px] top-[7px]'>First name</label>
                        <input id='input' type='text' onChange={change} autoComplete='off' className='text-[#24a472] border-[#39d69a] border-[1px] px-2 py-[6px] self-center w-[320px] rounded-[5px] outline-none text-[16px]' />
                    </div>

                    <div className='relative self-center'>
                        <label htmlFor='input1' id='label1' className='bg-white transition-colors px-1 cursor-text text-[#24A472] text-[15px] absolute left-[10px] top-[7px]'>Last Name</label>
                        <input id='input1' type='text' onChange={change} autoComplete='off' className='text-[#24a472] border-[#39d69a] border-[1px] px-2 py-[6px] self-center w-[320px] rounded-[5px] outline-none text-[16px]' />
                    </div>

                    <div className='relative self-center'>
                        <label htmlFor='input2' id='label2' className='bg-white transition-colors px-1 cursor-text text-[#24A472] text-[15px] absolute left-[10px] top-[7px]'>Email</label>
                        <input id='input2' type='email' onChange={change} autoComplete='off' className='border-[#39d69a] text-[#24a472] border-[1px] px-2 py-[6px] self-center w-[320px] rounded-[5px] outline-none text-[16px]' />
                    </div>

                    <div className='relative self-center'>
                        <label htmlFor='input3' id='label3' className='bg-white transition-colors px-1 cursor-text text-[#24A472] text-[15px] absolute left-[10px] top-[7px]'>Password</label>
                        <input id='input3' type='password' onChange={change} autoComplete='off' className='text-[#24a472] border-[#39d69a] border-[1px] px-2 py-[6px] self-center w-[320px] rounded-[5px] outline-none text-[16px]' />
                    </div>
                    <button type='submit' className='bg-[#24a472] hover:bg-[#34bd88] transition-colors text-white self-center w-[320px] rounded-[5px] px-2 py-[6px]'>Create Account</button>
                </from>
            </div>

        </div>
    )
}
