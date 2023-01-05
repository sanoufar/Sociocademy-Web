import Image from 'next/image'
import React from 'react'

function Profile() {
    return (
        <div className='ml-auto 
          w-[80%]
           mx-7'>
            <div className=' w-[70%] '>
                <div className='bg-white my-4'>
                    <p className='p-5 text-xl font-medium '>
                        Profile</p>
                </div>
                <div>
                    <div className='bg-[#1b0d56] rounded-xl p-5'>
                        <div className='flex items-center space-x-3 text-center'>
                            <div>
                                <Image src='https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png' className='rounded-full'
                                    height={90} width={90} />
                            </div>

                            <div>
                                <p className='text-xl text-white'>John Doe</p>
                                <p className='text-xs text-white'>California, USA</p>

                            </div>
                        </div>
                        <div className='flex space-x-2 text-white text-sm pt-5'>
                            <p>23k Following</p>
                            <p>120k Followers</p>
                        </div>

                    </div>
                    <div className='bg-white shadow-lg rounded-lg my-5 mx-10 p-5'>
                        <div className='flex justify-between border-b items-center'>
                            <div className='flex items-center space-x-1 pb-2 '>
                                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.0505 17.5001C32.0505 25.14 25.8571 31.3334 18.2171 31.3334C10.5772 31.3334 4.38379 25.14 4.38379 17.5001C4.38379 9.86011 10.5772 3.66672 18.2171 3.66672C25.8571 3.66672 32.0505 9.86011 32.0505 17.5001Z" stroke="#150B3D" stroke-width="1.5" />
                                    <circle cx="18.2171" cy="13.6875" r="5.08333" stroke="#150B3D" stroke-width="1.5" />
                                    <path d="M27.864 26.9792C25.7641 23.898 22.2266 21.875 18.2167 21.875C14.2067 21.875 10.6693 23.898 8.56934 26.9792" stroke="#150B3D" stroke-width="1.5" />
                                </svg>
                                <p className='font-semibold'>About me</p>
                            </div>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3979 3.78483C18.3501 4.73698 18.3501 6.28072 17.3979 7.23287L9.51502 15.1158C9.11668 15.5141 8.62165 15.8021 8.07847 15.9514L4.57564 16.9144C4.38868 16.9658 4.21691 16.7941 4.26831 16.6071L5.23135 13.1043C5.38068 12.5611 5.66864 12.0661 6.06697 11.6677L13.9499 3.78483C14.902 2.83268 16.4458 2.83268 17.3979 3.78483Z" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M13.332 4.76907L16.514 7.95105" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M3.82422 20.0001H21.8242" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                            </svg>



                        </div>

                        <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus id commodo egestas metus interdum dolor.</p>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg my-5 mx-10 p-5'>
                        <div className='flex items-center space-x-1 pb-2 border-b '>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.2168 15.1983L31.2168 14.4483L29.7168 14.4483L29.7168 15.1983L31.2168 15.1983ZM29.7168 21.6244C29.7168 22.0386 30.0526 22.3744 30.4668 22.3744C30.881 22.3744 31.2168 22.0386 31.2168 21.6244L29.7168 21.6244ZM29.7168 15.1983L29.7168 21.6244L31.2168 21.6244L31.2168 15.1983L29.7168 15.1983Z" fill="#150B3D" />
                                <path d="M9.2168 16.4835V25.8279V25.8279C14.1988 29.7672 21.2348 29.7672 26.2168 25.8279V25.8279V16.4835" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M15.2156 9.35525C16.7866 8.62735 18.647 8.62735 20.218 9.35525L31.579 14.6195L20.218 19.8837C18.647 20.6116 16.7866 20.6116 15.2156 19.8837L3.8546 14.6195L15.2156 9.35525ZM32.0356 14.4079L32.0352 14.4081L32.0356 14.4079ZM3.39801 14.4079C3.39812 14.4079 3.39823 14.408 3.39835 14.4081L3.39801 14.4079Z" stroke="#150B3D" stroke-width="1.5" />
                            </svg>

                            <p className='font-semibold'>Education</p>
                        </div>

                        <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus id commodo egestas metus interdum dolor.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile