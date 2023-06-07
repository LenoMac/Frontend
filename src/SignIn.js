import React from 'react'
import logo from './logo.png'
import google from './google.png'
import facebook from './facebook.png'
import apple from './apple.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


export const SignIn = () => {
    const navigate = useNavigate();

    function goToHome() {
        let username = document.getElementById('input').value
        const tryAccountExists = async (username) => {
            try {
                const response = await axios.get(`/api/check-accout/${username}`);
                return response.data.exists;
            } catch {
                console.log(new Error);
            }
        }
        tryAccountExists(username)
            .then((exists) => {
                if (exists) {
                    navigate('Home')
                    username = ''
                } else {
                    alert('Oops!')
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function change(e) {
        const label = document.getElementById('label')
        label.style.transition = '0.3s'
        if (e.target.value) {
            label.style.cssText = 'transform: translate(0px, -18px); font-size: 12px; transition: 0.3s'
        } else {
            label.style.cssText = 'transform: translate(0px, 0px); font-size: 15px; transition: 0.3s'
        }
    }


    function withGoogle() { }
    function withFacebook() { }
    function withApple() { }

    function signUp() { }
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
                        <input id='input' type='text' onChange={change} autoComplete='off' className='text-[#24a472] border-[#39d69a] border-[1px] px-2 py-[6px] self-center w-[320px] rounded-[5px] outline-none text-[16px]' />
                    </div>
                    <small className='text-red-600 absolute  z-10 top- left-0'>Invalid email</small>
                    {/* <Link to='Home'> */}
                    <button onClick={goToHome} type='submit' className='bg-[#24a472] hover:bg-[#34bd88] transition-colors text-white self-center w-[320px] rounded-[5px] px-2 py-[6px]'>Continue</button>
                    {/* </Link> */}
                    <div className='flex justify-between w-[320px] self-center'>
                        <span className='w-[35%] h-[2px] self-center bg-gray-300'></span>
                        <small className='self-center text-gray-400'>OR</small>
                        <span className='w-[35%] h-[2px] self-center bg-gray-300'></span>
                    </div>
                </from>
            </div>

            <div className='flex flex-col self-center mt-8 gap-5'>
                <div className='flex flex-col self-center gap-[10px]'>
                    <button onClick={withGoogle} className='w-[320px] self-center bg-transparent border-[1px] justify-center rounded-lg py-2  flex gap-2'>
                        <img src={google} alt='' className='self-center' />
                        <p className='text-md self-center font-medium text-[14px]'>Continue with Google</p>
                    </button>
                    <button onClick={withFacebook} className='w-[320px] self-center bg-[#1877F2] flex gap-2 rounded-lg py-2 justify-center'>
                        <img src={facebook} alt='' className='self-center' />
                        <p className='text-md text-white self-center font-medium text-[14px]'>Continue with Facebook</p>
                    </button>
                    <button onClick={withApple} className='w-[320px] self-center bg-black flex gap-2 rounded-lg py-2 justify-center'>
                        <img src={apple} alt='' className='self-center w-[22px]' />
                        <p className='text-md text-white self-center font-medium text-[14px]'>Continue with Apple</p>
                    </button>
                    {/* <GoogleSignInButton/> */}
                </div>
            </div>
        </div>
    )
}
