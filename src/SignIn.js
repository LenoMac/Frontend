import React, { useState } from 'react'
import logo from './logo.png'
import googleImg from './google.png'
import facebook from './facebook.png'
import apple from './apple.png'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios';
// import GoogleSignInButton from './GoogleSignInButton'
// import { google } from 'googleapis'
import spinner from './snipper.png'

export const SignIn = () => {

    const [isBtnAnimate, setBtnAnimate] = useState(false)
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const goToHome = () => {
        // fetch(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=YOUR_API_KEY`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email,
        //     }),
        // })

        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         
        //     })

        //     .catch(error => {
        //         alert(new Error);
        //     });
        //     setBtnAnimate(true)
        navigate('Home')
    }


    const googleSign = () => {
        window.open("http://localhost:3000/auth/google", "_self")
    }

    const handleEmailChange = (event) => {
        // setEmail(event.target.value);
        const label = document.getElementById('label')
        label.style.transition = '0.3s'
        if (event.target.value) {
            label.style.cssText = 'transform: translate(0px, -18px); font-size: 12px; transition: 0.3s'
        } else {
            label.style.cssText = 'transform: translate(0px, 0px); font-size: 15px; transition: 0.3s'
        }
    }

    return (
        <div className='flex flex-col p-8 h-[90vh] flex-grow self-center'>
            <div className='flex flex-col self-center gap-2'>
                <div className='flex flex-col gap-2'>
                    <div className='w-[50px] self-center flex'>
                        <img src={logo} alt='' />
                    </div>
                    <h2 className='self-center text-[#24A472] text-[28px] font-semibold'>Welcome back</h2>
                </div>
                <from action='www.google.com' method='GET' className='relative flex flex-col gap-4'>
                    <div className='relative self-center'>
                        <label htmlFor='input' id='label' className='bg-white transition-colors px-1 cursor-text text-[#24A472] text-[15px] absolute left-[10px] top-[7px]'>Email address</label>
                        <input value={email} id='input' type='text' onChange={(e) => setEmail(e.target.value)} autoComplete='off' className='text-[#1f1f1f] border-[#39d69a] border-[1px] px-2 py-[6px] self-center w-[320px] rounded-[5px] outline-none text-[16px]' />
                    </div>
                    <small className='text-red-600 absolute  z-10 top- left-0'>Invalid email</small>
                    {!isBtnAnimate ? (
                        <button onClick={goToHome} type='submit' className='bg-[#24a472] relative hover:bg-[#34bd88] transition-colors text-white self-center w-[320px] h-[36px] rounded-[5px] px-2 py-[6px]'>Continue</button>
                    ) : (
                        <div className='bg-[#24a472] flex justify-center hover:bg-[#34bd88] transition-colors self-center w-[320px] rounded-[5px] px-2 h-[36px] py-[6px] cursor-no-drop'><img className={`animate-spin w-6 select-none self-center h-max transition-all ${isBtnAnimate && 'opacity-1'}`} alt='' src={spinner} /></div>
                    )}

                    <div className='flex justify-between w-[320px] self-center'>
                        <span className='w-[35%] h-[2px] self-center bg-gray-300'></span>
                        <small className='self-center text-gray-400'>OR</small>
                        <span className='w-[35%] h-[2px] self-center bg-gray-300'></span>
                    </div>
                </from>
            </div>

            <div className='flex flex-col self-center mt-8 gap-5'>
                <div className='flex flex-col self-center gap-[10px]'>
                    <button onClick={googleSign} className='w-[320px] self-center bg-transparent border-[1px] justify-center rounded-lg py-2  flex gap-2'>
                        <img src={googleImg} alt='' className='self-center' />
                        <p className='text-md self-center font-medium text-[14px]'>Continue with Google</p>
                    </button>
                    <button className='w-[320px] self-center bg-[#1877F2] flex gap-2 rounded-lg py-2 justify-center'>
                        <img src={facebook} alt='' className='self-center' />
                        <p className='text-md text-white self-center font-medium text-[14px]'>Continue with Facebook</p>
                    </button>
                    <button className='w-[320px] self-center bg-black flex gap-2 rounded-lg py-2 justify-center'>
                        <img src={apple} alt='' className='self-center w-[22px]' />
                        <p className='text-md text-white self-center font-medium text-[14px]'>Continue with Apple</p>
                    </button>
                </div>
            </div>
        </div>
    )

}