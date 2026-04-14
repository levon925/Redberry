import React from 'react'
import Close from '../assets/modal/x.png'
import { useState } from 'react'
import { register } from '../API/authService'

function Modal({showModal, setShowModal}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [step, setStep] = useState(1)
    const [error, setError] = useState('')

    const handleRegister = async () => {
        try {
            const res = await register({email, password})
            localStorage.setItem('token', res.data.token)
            setShowModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if(!value) {
            setError('Email is required')
        } else if(!validateEmail(value)) {
            setError('Invalid email format')
        } else {
            setError('')
        }
    }
    
    
  return (
    <div className={`bg-[#00000040] w-full h-[100vh] ${showModal ? 'fixed' : 'hidden'} z-50 flex items-center justify-center inset-0`}>
        <div className="relative bg-[#FFFFFF] w-[460px] p-[50px] flex flex-col gap-[16px] rounded-[12px]">
            <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[6px]">
                    <h2 className='font-semibold text-[#141414] text-[32px] leading-[39px] m-auto'>Create Account</h2>
                    <p className='font-medium text-[#666666] text-[14px] leading-[17px] m-auto'>Join and start learning today</p>
                </div>
                <div className="flex justify-between">
                    <div className="w-[114px] h-[8px] rounded-[30px] bg-[#B7B3F4]"></div>
                    <div className="w-[114px] h-[8px] rounded-[30px] bg-[#EEEDFC]"></div>
                    <div className="w-[114px] h-[8px] rounded-[30px] bg-[#EEEDFC]"></div>
                </div>
                <div className={`flex flex-col gap-[8px] ${step === 1 ? 'block' : 'hidden'}`}>
                    <label htmlFor="email" className='text-[#3D3D3D] text-[14px] font-medium leading-[17px]'>Email*</label>
                    <input className='border-[1.5px] px-[14px] py-[13px] rounded-[8px] border-[#D1D1D1] text-[14px] font-medium leading-[100%] h-[48px] placeholder-[#8A8A8A]' id='email' type="email" placeholder='you@example.com' onChange={ handleChange}/>
                    <span className='text-[12px] text-[#F4161A] font-normal'>{error}</span>
                </div>
                <div className={`flex flex-col gap-[8px] ${step === 2 ? 'block' : 'hidden'}`}>
                    <label htmlFor="password" className='text-[#3D3D3D] text-[14px] font-medium leading-[17px]'>Password*</label>
                    <input className='border-[1.5px] px-[14px] py-[13px] rounded-[8px] border-[#D1D1D1] text-[14px] font-medium leading-[100%] h-[48px] placeholder-[#8A8A8A]' id='password' type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className={`flex flex-col gap-[8px] ${step === 2 ? 'block' : 'hidden'}`}>
                    <label htmlFor="confirm-password" className='text-[#3D3D3D] text-[14px] font-medium leading-[17px]'>Confirm Password*</label>
                    <input className='border-[1.5px] px-[14px] py-[13px] rounded-[8px] border-[#D1D1D1] text-[14px] font-medium leading-[100%] h-[48px] placeholder-[#8A8A8A]' id='confirm-password' type="password" placeholder='Confirm Password'/>
                </div>
                <div className={`flex flex-col gap-[8px] ${step === 3 ? 'block' : 'hidden'}`}>
                    <label htmlFor="username" className='text-[#3D3D3D] text-[14px] font-medium leading-[17px]'>Username*</label>
                    <input className='border-[1.5px] px-[14px] py-[13px] rounded-[8px] border-[#D1D1D1] text-[14px] font-medium leading-[100%] h-[48px] placeholder-[#8A8A8A]' id='username' type="text" placeholder='Username'/>
                </div>
            </div>
            <button className='py-[11.5px] bg-[#4F46E5] rounded-[8px] text-white font-medium text-[16px] leading-[24px] cursor-pointer disabled' onClick={() => setStep(step+1)}>Next</button>
            <div className="flex flex-col gap-[8px]">
                <div className="flex items-center gap-[8px]">
                    <div className='flex-1 h-[0.5px] bg-[#D1D1D1]'/>
                    <div className="font-medium text-[14px] text-[#8A8A8A] leading-[24px]">or</div>
                    <div className='flex-1 h-[0.5px] bg-[#D1D1D1]'/>
                </div>
                <div className="flex gap-[8px] leading-[17px] m-auto">
                    <span className='font-normal text-[12px] text-[#666666]'>Already have an account?</span>
                    <span className='font-medium text-[14px] text-[#141414] underline cursor-pointer'>Log In</span>
                </div>
            </div>

            <img src={Close} className="absolute top-[20px] right-[15px] cursor-pointer" onClick={() => setShowModal(false)}/>
        </div>
    </div>
  )
}

export default Modal

