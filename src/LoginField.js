import React from 'react'
import log_img from './log_img.png'
import { useState } from 'react'
// import GoogleSignInButton from './GoogleSignInButton'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

export const LoginField = ({ user, setUser }) => {

    const [isSignInOpen, setIsSignInOpen] = useState(true);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const handleSignUpClick = () => {
        setIsSignInOpen(false);
        setIsSignUpOpen(true);
    }
    const handleSignInClick = () => {
        setIsSignInOpen(true);
        setIsSignUpOpen(false);
    }
    return (
        <div className='w-full h-[100vh] flex overflow-y-hidden'>
            <div id='blur' className='w-[60%] h-[102vh] self-center overflow-hidden relative mb-2'>
                <img src={log_img} alt='' className='w-full' />
                <h1 className='absolute bottom-6 left-6 z-10 text-[35px] text-white font-bold'>Виртуальное объединение для роста и развития!</h1>
            </div>
            {isSignInOpen ? (
                <div className={`flex flex-col transition-colors flex-grow ${isSignInOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <SignIn setUser={setUser} user={user}/>
                    <p className='self-center mb-28 text-gray-500 text-[14px]'>Don't have an account? <span onClick={handleSignUpClick} className='text-black font-semibold cursor-pointer'>Sign up</span></p>
                </div>
            ) : (
                <div className={`flex flex-col transition-colors flex-grow ${isSignInOpen ? 'opacity-0' : 'opacity-100'}`}>
                    <SignUp/>
                    <p className='self-center mb-[250px] text-gray-500 text-[14px]'>Already have an account? <span onClick={handleSignInClick} className='text-black font-semibold cursor-pointer'>Sign in</span></p>
                </div>
            )}
        </div>
    )
}
