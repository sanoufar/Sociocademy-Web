import { ChevronLeftIcon } from '@heroicons/react/outline'
import React from 'react'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'
import Image from 'next/image';


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
            <div className='w-fit rounded-full flex items-center space-x-3 ml-auto mr-auto   bg-white h-fit mt-5 p-5 shadow-lg'>
                <div className='bg-[#edf0f9] p-3 rounded-full'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99996 14.3333C9.44767 14.3333 8.99996 13.8856 8.99996 13.3333V11H6.66663C6.11434 11 5.66663 10.5523 5.66663 10C5.66663 9.44772 6.11434 9 6.66663 9H8.99996V6.66667C8.99996 6.11438 9.44767 5.66667 9.99996 5.66667C10.5522 5.66667 11 6.11438 11 6.66667V9H13.3333C13.8856 9 14.3333 9.44772 14.3333 10C14.3333 10.5523 13.8856 11 13.3333 11H11V13.3333C11 13.8856 10.5522 14.3333 9.99996 14.3333Z" fill="#4E65C2" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z" fill="#4E65C2" />
                    </svg>
                </div>

                <div className='flex space-x-3'>
                    <div>
                        <Image src='https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png'
                            className='rounded-full'
                            height={50} width={50} />
                    </div>
                    <div>
                        <Image src='https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png'
                            className='rounded-full'
                            height={50} width={50} />
                    </div>
                    <div>
                        <Image src='https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png'
                            className='rounded-full'
                            height={50} width={50} />
                    </div>
                    <div>
                        <Image src='https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png'
                            className='rounded-full'
                            height={50} width={50} />
                    </div>
                    <div>
                        <Image src='https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png'
                            className='rounded-full'
                            height={50} width={50} />
                    </div>


                </div>

            </div>
            <div className='pt-10 flex '>

                {/* Left input */}
                <div className='bg-white rounded-t-lg 
                border-b-2 w-[60%] rounded-b-lg shadow-lg  border-x-2'>
                    <div className='bg-gray-200 px-4 py-2 rounded-t-lg '>

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
                <div className='flex  bg-white m-3
                w-[43%]  flex-wrap  rounded-lg shadow-lg p-5'>
                    <div className='w-fit  p-3'>
                        <div className='bg-[#C5F1FF] p-5 rounded-full'>
                            <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4444 6.77778C15.4444 5.24542 14.8357 3.77582 13.7522 2.69227C12.6686 1.60873 11.199 1 9.66667 1H1V22.6667H11.1111C12.2604 22.6667 13.3626 23.1232 14.1752 23.9359C14.9879 24.7485 15.4444 25.8507 15.4444 27M15.4444 6.77778V27M15.4444 6.77778C15.4444 5.24542 16.0532 3.77582 17.1367 2.69227C18.2203 1.60873 19.6899 1 21.2222 1H29.8889V22.6667H19.7778C18.6285 22.6667 17.5263 23.1232 16.7136 23.9359C15.901 24.7485 15.4444 25.8507 15.4444 27" stroke="url(#paint0_linear_484_2250)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_484_2250" x1="-2.5" y1="-2" x2="38.5" y2="28.5" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#00BEBE" />
                                        <stop offset="1" stop-color="#0066FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p className='text-xs text-center'>Notes</p>


                    </div>
                    <div className='w-fit  p-3'>
                        <div className='bg-[#C5F1FF] p-5 rounded-full'>
                            <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1H3.6C2.91044 1 2.24912 1.27393 1.76152 1.76152C1.27393 2.24912 1 2.91044 1 3.6V24.4C1 25.0896 1.27393 25.7509 1.76152 26.2385C2.24912 26.7261 2.91044 27 3.6 27H19.2C19.8896 27 20.5509 26.7261 21.0385 26.2385C21.5261 25.7509 21.8 25.0896 21.8 24.4V8.8M14 1L21.8 8.8M14 1V8.8H21.8M16.6 15.3H6.2M16.6 20.5H6.2M8.8 10.1H6.2" stroke="url(#paint0_linear_484_2267)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_484_2267" x1="-2.5" y1="1" x2="24.5" y2="32.5" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#00B6C4" />
                                        <stop offset="1" stop-color="#007BEF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p className='text-xs text-center'>Assignments</p>
                    </div>
                    <div className='w-fit  p-3'>
                        <div className='bg-[#C5F1FF] p-5 rounded-full'>
                            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 16.4286L8.71429 8.71429L1 1M11.2857 19H21.5714" stroke="url(#paint0_linear_484_2268)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_484_2268" x1="-4" y1="-4" x2="26" y2="21.5" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#00B6C4" />
                                        <stop offset="1" stop-color="#0077F3" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p className='text-xs text-center'>Lab</p>
                    </div>
                    <div className='w-fit  p-3'>
                        <div className='bg-[#C5F1FF] p-5 rounded-full'>
                            <svg width="30" height="25" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.8571 4.71429L28.8571 14L41.8571 23.2857V4.71429Z" stroke="url(#paint0_linear_488_2218)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25.1429 1H4.71429C2.66294 1 1 2.66294 1 4.71429V23.2857C1 25.3371 2.66294 27 4.71429 27H25.1429C27.1942 27 28.8571 25.3371 28.8571 23.2857V4.71429C28.8571 2.66294 27.1942 1 25.1429 1Z" stroke="url(#paint1_linear_488_2218)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_488_2218" x1="-4" y1="1" x2="45" y2="27" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#00B7C3" />
                                        <stop offset="1" stop-color="#007AF1" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_488_2218" x1="-4" y1="1" x2="45" y2="27" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#00B7C3" />
                                        <stop offset="1" stop-color="#007AF1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p className='text-xs text-center'>Recordings</p>
                    </div>
                    <div className='w-fit  p-3'>
                        <div className='bg-[#C5F1FF] p-5 rounded-full'>

                            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6672 27H28.3343M21.5008 1.94352C22.1049 1.33939 22.9243 1 23.7786 1C24.2017 1 24.6205 1.08332 25.0114 1.24521C25.4022 1.4071 25.7573 1.64439 26.0565 1.94352C26.3556 2.24265 26.5929 2.59778 26.7548 2.98861C26.9167 3.37945 27 3.79834 27 4.22138C27 4.64442 26.9167 5.06332 26.7548 5.45415C26.5929 5.84499 26.3556 6.20011 26.0565 6.49924L7.0743 25.4814L1 27L2.51857 20.9257L21.5008 1.94352Z" stroke="url(#paint0_linear_488_2222)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_488_2222" x1="-1" y1="-1.5" x2="29" y2="26.5" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.226016" stop-color="#00B1C8" />
                                        <stop offset="1" stop-color="#0080ED" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p className='text-xs text-center'>Tests</p>
                    </div>
                    <div className='w-fit  p-3'>
                        <div className='bg-[#C5F1FF] p-5 rounded-full'>

                            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6672 27H28.3343M21.5008 1.94352C22.1049 1.33939 22.9243 1 23.7786 1C24.2017 1 24.6205 1.08332 25.0114 1.24521C25.4022 1.4071 25.7573 1.64439 26.0565 1.94352C26.3556 2.24265 26.5929 2.59778 26.7548 2.98861C26.9167 3.37945 27 3.79834 27 4.22138C27 4.64442 26.9167 5.06332 26.7548 5.45415C26.5929 5.84499 26.3556 6.20011 26.0565 6.49924L7.0743 25.4814L1 27L2.51857 20.9257L21.5008 1.94352Z" stroke="url(#paint0_linear_715_2273)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_715_2273" x1="-1" y1="-1.5" x2="29" y2="26.5" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.226016" stop-color="#00B1C8" />
                                        <stop offset="1" stop-color="#0080ED" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p className='text-xs text-center'>Performance</p>
                    </div>

                </div>
            </div>
            <div className='bg-white my-5 shadow-lg rounded-lg'>
                <div className='flex justify-between items-center p-5 space-x-3'>
                    <div className='flex items-center space-x-3'>
                        <Image src='https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png'
                            className='rounded-full'
                            height={50} width={50} />
                        <p className='font-semibold'>Dr. Arnold Leonardo</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>Oct 02,2022</p>
                    </div>

                </div>
                <div>
                    <p className='p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae luctus ex, sollicitudin imperdiet dui. Praesent erat purus, mattis sed metus ut, tristique condimentum diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed varius in nunc eu consequat. In fringilla mi velit, at gravida eros sodales vel. Praesent ultrices varius ante nec molestie. Nam at tellus in ex varius tincidunt vitae quis risus. Phasellus vitae faucibus nunc. Sed vestibulum venenatis pulvinar. Fusce eu aliquam erat. </p>
                </div>

            </div>

        </div>
    )
}

export default Classroom