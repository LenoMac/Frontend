import React, { useEffect, useState } from 'react'
import logo from './logo.png'
// import googleImg from './google.png''
import facebook from './facebook.png'
import apple from './apple.png'
import { json, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import spinner from './snipper.png'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode'
export const SignIn = (props) => {

    const [isBtnAnimate, setBtnAnimate] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [isFocused, setFocused] = useState(false)
    const [isValid, setValid] = useState(false)

    const navigate = useNavigate();
    const goToHome = () => {
        let address = document.getElementById('input').value,
            pass = document.getElementById('password').value
        setBtnAnimate(true)
        setTimeout(() => {
            if (address !== props.data.email || pass !== props.data.password) {
                alert('Oops!')
                setBtnAnimate(false)
                return
            }
            navigate('/', { replace: true })
        }, 1000)

    }

    const handle = (e) => {
        if (e.target.id === 'input') {
            alert()
            const label1 = document.getElementById('label')
            label1.style.cssText = 'transform: translate(0px, 0px); font-size: 15px; transition: 0.3s'
        }
        // const input = document.getElementById('input')
        // label.style.cssText = 'transform: translate(0px, -18px); font-size: 12px; transition: 0.3s; text-[#24a472]'
        // label.style.transition = '0.3s'
        // input.style.cssText = 'border-[#24a472]'
    }
    const handleFocus = () => {
        setFocused(true)
    }

    const handleFileChange = (event) => {
        const file = event.target.value
        setSelectedFile(file)
    }
    const handleBlur = () => {
        setFocused(false)
    }
    return (
        <div className='flex flex-col p-8 h-[90vh] flex-grow self-center'>
            <div className='flex flex-col self-center gap-5'>
                <div className='flex flex-col gap-2'>
                    <div className='w-[50px] self-center flex'>
                        <img src={logo} alt='' />
                    </div>
                    <h2 className='self-center text-[#9151f8] text-[28px] font-semibold'>Welcome back</h2>
                </div>
                <div className='relative flex flex-col gap-4'>
                    <div className='relative self-center'>
                        <label htmlFor='input' id='label' className={`${isFocused || selectedFile ? 'translate-y-[-18px] transition-all text-[12px] text-[#9151f8]' : 'translate-[0px, 0px] text-[15px] text-gray-400 '}  bg-white transition-all px-1 cursor-text absolute left-[10px] top-[7px]`}>Email address</label>
                        <input onFocus={handleFocus} onChange={handleFileChange} onBlur={handleBlur} id='input' type='text' autoComplete='off' className={`${isFocused || selectedFile ? 'border-[#9151f8]' : 'border-gray-300'} text-[#1f1f1f] border-[1px] px-2 py-[6px] self-center w-[320px] rounded-[5px] outline-none text-[16px] transition-colors`} />
                    </div>

                    <div className='relative self-center'>
                        <label htmlFor='password' id='label' onClick={handle} className={`${isFocused || selectedFile ? 'translate-y-[-18px] transition-all text-[12px] text-[#9151f8]' : 'translate-[0px, 0px] text-[15px] text-gray-400 '} bg-white transition-all px-1 cursor-text absolute left-[10px] top-[7px]`}>Password</label>
                        <input id='password' type='password' autoComplete='off' className={`focus:border-[#9151f8] text-[#1f1f1f] border-gray-300 border-[1px] px-2 py-[6px] self-center w-[320px] rounded-[5px] outline-none text-[16px] transition-colors`} />
                    </div>
                    {!isBtnAnimate ? (
                        <button type='submit' onClick={goToHome} className='bg-[#9152f8] relative hover:bg-[#ac79ff] transition-colors text-white self-center w-[320px] h-[36px] rounded-[5px] px-2 font-semibold py-[6px]'>Continue</button>
                    ) : (
                        <div className='bg-[#24a472] flex justify-center hover:bg-[#34bd88] transition-colors self-center w-[320px] rounded-[5px] px-2 h-[36px] py-[6px]'><img className={`animate-spin w-6 select-none self-center h-max transition-all ${isBtnAnimate && 'opacity-1'}`} alt='' src={spinner} /></div>
                    )}

                    <div className='flex justify-between w-[320px] self-center'>
                        <span className='w-[35%] h-[2px] self-center bg-gray-300'></span>
                        <small className='self-center text-gray-400'>OR</small>
                        <span className='w-[35%] h-[2px] self-center bg-gray-300'></span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col self-center mt-8 gap-5'>
                <div className='flex flex-col self-center gap-[10px]'>
                    <button className='w-[320px] self-center bg-transparent border-[1px] justify-center rounded-lg py-2  flex gap-2'>
                        <GoogleOAuthProvider clientId="10487143437-pfidq6c4j2bd1h1m73sov707puc8rhtd.apps.googleusercontent.com">
                            <GoogleLogin className='bg-red-600 text-[40px]'
                                onSuccess={credentialResponse => {
                                    const details = jwtDecode(credentialResponse.credential)
                                    props.setUser(details)
                                    navigate('/', { replace: true })

                                }}
                                onError={() => {
                                    alert("При входе возникла ошибка :(")
                                }}
                            />
                        </GoogleOAuthProvider>
                        {/* <img src={googleImg} alt='' className='self-center' />
                        <p className='text-md self-center font-medium text-[14px]'>Continue with Google</p> */}
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