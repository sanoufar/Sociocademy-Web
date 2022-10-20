import { AcademicCapIcon } from '@heroicons/react/outline'
import React from 'react'

function RightSide() {
    return (
        <div className='w-96 '>

            <p className='text-lg py-3 font-medium'>To-do</p>
            <div className='bg-white 
                shadow-xl rounded-2xl
                w-[90%] p-5'>

                <div className='flex justify-between'>
                    <AcademicCapIcon className='h-12 p-2 
                    text-[#7737FF] rounded-full bg-[#F4F8FA] ' />
                    <div className=''>
                        <p className='font-semibold'>Due Date</p>
                        <p className='text-gray-400'>Oct 02,2022</p>
                    </div>
                </div>
                <div className='p-3'>
                    <p className='text-gray-400'>Assignment 04</p>
                    <p>Nisi, venenatis id cursus volutpat cursus interdum enim mauris.
                    </p>
                </div>
            </div>
            <p className='text-lg pt-7 py-3 font-medium'>Day Planner</p>
            <div className='bg-white 
                shadow-xl rounded-2xl
                w-[90%] p-5 text-[#AD4328]'>
                <p className='font-medium text-lg'>01:33:58 minutes</p>
                <p>Today training time</p>
            </div>
        </div>
    )
}

export default RightSide