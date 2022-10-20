import React from 'react'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'

function ContentTypes({ type }) {
    return (
        <p className='bg-[#6D7F9C] text-white 
         w-[110px] p-2 text-center'>{type}</p>
    )
}

function LectureCard({ title, author }) {
    const [{ }, dispath] = useStateValue();

    const handleIncrease = (e) => {
        dispath({
            type: actionTypes.SET_NOW_PLAYING,
            now_playing: {
                title: e
            }

        })
    }


    return (
        <div className='flex space-x-3 mb-4'>
            <div className='h-[130px]
             bg-cyan-500 w-[210px] rounded-xl'>

            </div>
            <div>
                <p className='text-lg' onClick={() => handleIncrease(title)}>{title}</p>
                <p className='text-sm'>{author}</p>
                <p className='bg-[#3A63A9]
                w-fit text-white p-2 mt-8'>3 Lessons</p>
            </div>
        </div>
    )
}

function CommunityContent() {
    return (
        <div className=' w-full my-4 p-5 max-w-[60%]'>

            <div className='flex space-x-3
             items-center '>
                <svg width="4" height="32" viewBox="0 0 4 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="4" height="32" fill="#7B2CBF" />
                </svg>

                <p className='text-xl font-medium'>Contents</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.75C3 6.16421 3.33579 6.5 3.75 6.5L20.25 6.5C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5H3.75C3.33579 5 3 5.33579 3 5.75ZM3 14.75C3 15.1642 3.33579 15.5 3.75 15.5H20.25C20.6642 15.5 21 15.1642 21 14.75C21 14.3358 20.6642 14 20.25 14H3.75C3.33579 14 3 14.3358 3 14.75ZM3.75 11C3.33579 11 3 10.6642 3 10.25C3 9.83579 3.33579 9.5 3.75 9.5L15.25 9.5C15.6642 9.5 16 9.83579 16 10.25C16 10.6642 15.6642 11 15.25 11L3.75 11ZM3 19.25C3 19.6642 3.33579 20 3.75 20L11.25 20C11.6642 20 12 19.6642 12 19.25C12 18.8358 11.6642 18.5 11.25 18.5L3.75 18.5C3.33579 18.5 3 18.8358 3 19.25Z" fill="#384E85" />
                </svg>
            </div>
            <div className='flex space-x-1 py-5'>
                <ContentTypes type="Lectures" />
                <ContentTypes type="Books" />
                <ContentTypes type="Files" />
                <ContentTypes type="MarkerSpace" />
            </div>
            <div>
                <LectureCard title="Programing Using Python" author="Abhijith" />
                <LectureCard title="Wireframing Using Figma" author="Abhijith" />
                <LectureCard title="Preparation of BRD" author="Abhijith" />
                <LectureCard title="Application Testing" author="Abhijith" />
            </div>
        </div>
    )
}

export default CommunityContent