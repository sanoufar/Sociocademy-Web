import React from 'react'
import Image from 'next/image'
import { CalendarIcon, ClockIcon } from '@heroicons/react/outline'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'

function LectureCard({ myclass }) {
    const [{ }, dispath] = useStateValue();

    const handleIncrease = (e) => {
        dispath({
            type: actionTypes.SET_CLASSROOM,
            classroom: e

        })
    }
    return (
        <div onClick={() => handleIncrease("Artificial Intelligence")} className='border-2 cursor-pointer m-3 shadow-md rounded-xl w-[46%] p-3'>
            <div className='flex items-start justify-between'>
                <div className='text-center'>
                    <Image src='https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png' className='rounded-full'
                        height={50} width={50} />
                    <p className='text-sm '>Dr.Arnold</p>
                </div>
                <div>
                    <p className='font-medium pt-3'>Artificial Intelligence</p>
                    {
                        myclass && <p className='bg-[#169513] text-white  cursor-pointer w-fit
                        mt-2 px-4 rounded-2xl'>Enroll</p>
                    }
                </div>


            </div>
            <div className='mt-2 flex justify-end items-center'>
                {
                    !myclass && <p className='bg-[#F395BA] w-fit px-2 rounded-lg'>3 Class Left</p>
                }
                <CalendarIcon className='h-6 text-[#EC502C] ml-3' />
                <p className='text-sm text-gray-500'>Today</p>
                <ClockIcon className='h-6 text-[#EC502C] ml-3 ' />
                <p className='text-sm text-gray-500'>2 pm</p>
            </div>

        </div>
    )
}

function LectureHall() {
    return (
        <div className=' min-w-[55%] mb-10 '>
            <div className='bg-white'>
                <p className='p-2 text-xl font-medium '>
                    Lecure Hall</p>
            </div>
            <div className='ml-5 max-w-96 '>
                <p className='bg-[#E4C7C7] p-2 my-5 font-medium ' >My Class</p>
                <div className='flex  flex-wrap '>
                    <LectureCard />
                    <LectureCard />
                    <LectureCard />
                    <LectureCard />
                </div>
            </div>
            <div className='my-20 max-w-96 '>
                <p className='bg-[#E4C7C7] p-2 my-5 font-medium ' >Classes you are yet to join</p>
                <div className='flex flex-wrap'>
                    <LectureCard myclass />
                    <LectureCard myclass />
                    <LectureCard myclass />
                </div>
            </div>
        </div>
    )
}

export default LectureHall