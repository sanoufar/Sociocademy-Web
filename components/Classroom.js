import { ChevronLeftIcon } from '@heroicons/react/outline'
import React from 'react'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'


function Classroom() {
    const [{ }, dispath] = useStateValue();

    const handleIncrease = (e) => {
        dispath({
            type: actionTypes.SET_CLASSROOM,
            classroom: null

        })
    }
    return (
        <div className='w-[70%] mb-10'>
            <div className='bg-white flex items-center p-3 space-x-3 
            rounded-xl shadow-lg ' onClick={() => handleIncrease()}>
                <ChevronLeftIcon className='h-9 cursor-pointer' />
                <p className='text-xl font-medium '>
                    Artificial Intelligence</p>
            </div>
            <div className='w-full rounded-lg bg-white h-fit mt-5 p-5 shadow-lg'>
            </div>
            <div className='pt-10'>

                {/* Left input */}
                <div className='bg-white rounded-t-lg border-b-2 rounded-b-lg shadow-lg border-x-2'>
                    <div className='bg-gray-200 px-4 py-2 rounded-t-lg mt-2'>

                        <textarea className='outline-none bg-transparent w-full h-[138px]'
                            placeholder="Say something to the class" />
                    </div>
                    <div className='flex justify-between p-6'>
                        <div className='flex space-x-2 '>
                            <div className='flex  space-x-2 items-center text-sm text-gray-600'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 7.66667V9.88889C11 10.1836 10.8829 10.4662 10.6746 10.6746C10.4662 10.8829 10.1836 11 9.88889 11H2.11111C1.81643 11 1.53381 10.8829 1.32544 10.6746C1.11706 10.4662 1 10.1836 1 9.88889V7.66667M8.77778 3.77778L6 1M6 1L3.22222 3.77778M6 1V7.66667" stroke="#616161" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Upload photo</p>
                            </div>
                            <div className='flex space-x-2 items-center text-sm text-gray-600'>
                                <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 11V4.75M4.75 11V1M1 11V7.25" stroke="#626262" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Create Poll</p>
                            </div>
                        </div>
                        <p className=' text-white w-fit  px-5
                    font-medium  text-lg rounded-xl cursor-pointer  bg-[#2A94F4] '>Post</p>
                    </div>
                </div>
                {/* Icon pack */}
                <div>

                </div>
            </div>

        </div>
    )
}

export default Classroom