import React, { useState } from 'react'
import { Formdata } from './Formdata'
import spinner from './snipper.png'
export const SignUp = ({ setIsSignInOpen, setIsSignUpOpen, data, setData }) => {
    function onChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const inputs = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            placeholder: "First name",
            errorMessage: "Name should be 3-16 characters and shouldn't be any special character!",
            label: "First name",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$",
        },
        {
            id: 2,
            name: "lastName",
            type: "text",
            placeholder: "Last name",
            errorMessage: "Name should be 3-16 characters and shouldn't be any special character!",
            label: "Last name",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$",
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Email address",
            errorMessage: "It should be valid email",
            label: "Email address",
            required: true,
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and must include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            required: true,
            pattern: `^(?=.*[0-9])(?=.*[a-aA-Z])(?=.*[!@#$^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm password",
            errorMessage: "Passwords don't match",
            label: "Confirm password",
            required: true,
            pattern: values.password,
        }
    ]
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSignUpOpen(false)
        setIsSignInOpen(true)
        setData(values)
        console.log(values);
        setBtnAnimate(true)
    }
    const [isBtnAnimate, setBtnAnimate] = useState(false)
    return (
        <div className='p-8 h-max flex-grow self-center'>
            <div className='flex flex-col self-center gap-2'>
                <div className='flex flex-col gap-2'>
                    <div className='w-[50px] self-center flex'>
                        <img src={''} alt='' />
                    </div>
                    <h2 className='self-center text-[#24A472] text-[28px] font-semibold'>Create Your Account</h2>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    {inputs.map((input) => (
                        <Formdata key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                    ))}
                    {!isBtnAnimate ? (
                        <button type='submit' className='bg-[#24a472] hover:bg-[#34bd88] transition-colors text-white self-center w-[320px] rounded-[5px] px-2 py-[6px]'>Create Account</button>
                    ) : (
                        <div className='bg-[#24a472] flex justify-center hover:bg-[#34bd88] transition-colors self-center w-[320px] rounded-[5px] px-2 h-[36px] py-[6px]'><img className={`animate-spin w-6 select-none self-center h-max transition-all ${isBtnAnimate && 'opacity-1'}`} alt='' src={spinner} /></div>
                    )}
                </form>
            </div>

        </div>
    )
}
