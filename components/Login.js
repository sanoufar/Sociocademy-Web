import React from 'react'
import Image from 'next/image'


function Login({ signIn }) {
    return (
        <div className='bg-[#f6f9fd] h-[100vh]
        '>
            <div className='ml-auto mr-auto h-[100vh] relative
              w-[50%] text-center flex-col '>
                <Image src="/socio.jpeg" width={200} height={120} objectFit="contain" />
                <h1 className='text-3xl pb-5 font-bold font-sans'>Enter your email to start</h1>
                <p className='text-base'>We suggest using the
                    <span className='font-medium'> email address you use at your Institution.</span></p>

                <div className='w-[50%] ml-auto mr-auto my-5 space-y-5'>
                    {/* <input className='w-full 
                    pl-3
                    outline-none
                    border-[1px] rounded-md border-[#1554F6] h-10' /> */}
                    <h1
                        onClick={signIn}
                        className='p-4 h-fit
                         bg-[#3A3885] rounded-lg
                          text-lg
                         text-white text-center 
                         cursor-pointer '>Signin with Google</h1>
                    <p className='text-left font-medium text-sm'>By continuing, you’re agreeing to our Customer Terms of
                        Service, User Terms of Service, Privacy Policy, and Cookie
                        Policy.</p>
                </div>
                <div className='
                 flex w-full justify-center
                 absolute bottom-0 p-10 space-x-8 font-medium 
                text-sm  '>
                    <p>Privacy & Terms</p>
                    <p>Contact Us</p>
                    <p>Change region</p>
                </div>
            </div>
        </div>

    )
}

export default Login