import React from 'react'
import log_img from './log_img.png'
import { useState } from 'react'
// import GoogleSignInButton from './GoogleSignInButton'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import './loginField.css'
import './scroll.css'

export const LoginField = (propses) => {
    const [isSignInOpen, setIsSignInOpen] = useState(true);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const handleSignUpClick = () => {
        setTimeout(() => {
            setIsSignInOpen(false);
            setIsSignUpOpen(true);
        }, 500)

    }
    const handleSignInClick = () => {
        setTimeout(() => {
            setIsSignInOpen(true);
            setIsSignUpOpen(false);
        }, 500)
    }
    return (
        <div className='w-full h-[100vh] flex overflow-y-hidden'>
            <div id='blur' className='w-[60%] h-[102vh] self-center overflow-hidden relative mb-2'>
                <img src={log_img} alt='' className='w-full' />
                <h1 className='absolute bottom-6 left-6 z-10 text-[35px] text-white font-bold'>Виртуальное объединение для роста и развития!</h1>
            </div>
            {isSignInOpen ? (
                <div className={`flex flex-col transition-colors flex-grow ${isSignInOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <SignIn data={propses.data} setData={propses.setData} setUser={propses.setUser} user={propses.user} />
                    <p className='self-center mb-28 text-gray-500 text-[14px]'>Don't have an account? <span onClick={handleSignUpClick} className='text-black font-semibold cursor-pointer'>Sign up</span></p>
                </div>
            ) : (
                <div id='scroll' className={` flex flex-col gap-1 overflow-y-auto transition-colors flex-grow ${isSignInOpen ? 'opacity-0' : 'opacity-100'}`}>
                    <SignUp data={propses.data} setData={propses.setData} setIsSignUpOpen={setIsSignUpOpen} setIsSignInOpen={setIsSignInOpen} />
                    <p className='self-center mb-[250px] text-gray-500 text-[14px]'>Already have an account? <span onClick={handleSignInClick} className='text-black font-semibold cursor-pointer'>Sign in</span></p>
                </div>
            )}
        </div>
    )
}
