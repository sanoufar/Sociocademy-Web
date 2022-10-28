import { ShareIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { useState, useRef } from 'react'


function Poll({ title }) {
    return (
        <div className='cursor-pointer'>
            <p className='border border-[#7737FF] bg-[#F2ECFF] p-2 pl-4
            rounded-xl font-normal text-base'>{title}</p>
        </div>
    )
}

function Post({ timestamp, name, title, message, image, postImage, poll, options }) {
    const [liked, setLiked] = useState(false)
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-md'>
                <div className='flex items-center space-x-2'>
                    <Image src={image}
                        height={60} width={60} className="rounded-full" alt="" />
                    <div>
                        <p className="font-medium">{name}</p>
                        <p className='text-xs text-gray-400'>
                            {new Date(timestamp?.toDate()).toLocaleString()}
                        </p>
                    </div>
                </div >
                {
                    poll ? <div className='space-y-3 mt-3 mb-4'>
                        <p className='font-semibold mt-3 mb-4'>{title}</p>
                        {
                            options?.map(op => (
                                <Poll title={op.option} />
                            ))
                        }

                    </div> : <div className='max-w-2xl pt-4 px-1'>
                        <p className='font-semibold'>{title}</p>
                        <p className='pt-3 font-normal'>{message}</p>
                    </div>
                }


            </div >
            {
                postImage && (
                    <div className='relative  md:h-96 bg-white'>
                        <Image src={postImage}
                            objectFit='contain' layout='fill' />
                    </div>
                )
            }
            <div className='flex justify-between bg-[#ede7fd]
            shadow-md text-black  p-5 rounded-b-3xl'>

                <div className='flex space-x-4 items-center'>
                    <div className='flex space-x-2 items-center'>

                        {
                            !liked ? <><svg className='cursor-pointer' onClick={() => setLiked(!liked)} width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.25 13.1053C6.05512 13.1053 6.82727 12.828 7.39657 12.3345C7.96588 11.841 8.28571 11.1716 8.28571 10.4737C8.28571 9.02105 7.67857 8.36842 7.07143 7.31579C5.76971 5.06 6.79943 3.04842 9.5 1C10.1071 3.63158 11.9286 6.15789 14.3571 7.84211C16.7857 9.52632 18 11.5263 18 13.6316C18 14.5992 17.7801 15.5574 17.353 16.4514C16.9258 17.3453 16.2997 18.1576 15.5104 18.8418C14.7211 19.5261 13.7841 20.0688 12.7528 20.4391C11.7215 20.8094 10.6162 21 9.5 21C8.38376 21 7.27846 20.8094 6.24719 20.4391C5.21592 20.0688 4.27889 19.5261 3.48959 18.8418C2.70029 18.1576 2.07419 17.3453 1.64702 16.4514C1.21986 15.5574 1 14.5992 1 13.6316C1 12.4179 1.52579 11.2168 2.21429 10.4737C2.21429 11.1716 2.53412 11.841 3.10343 12.3345C3.67273 12.828 4.44488 13.1053 5.25 13.1053V13.1053Z" stroke="#FF4D46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></> :
                                <><svg className='cursor-pointer' onClick={() => setLiked(!liked)} width="19" height="22" viewBox="0 0 19 22" fill="#FF9446" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.25 13.1053C6.05512 13.1053 6.82727 12.828 7.39657 12.3345C7.96588 11.841 8.28571 11.1716 8.28571 10.4737C8.28571 9.02105 7.67857 8.36842 7.07143 7.31579C5.76971 5.06 6.79943 3.04842 9.5 1C10.1071 3.63158 11.9286 6.15789 14.3571 7.84211C16.7857 9.52632 18 11.5263 18 13.6316C18 14.5992 17.7801 15.5574 17.353 16.4514C16.9258 17.3453 16.2997 18.1576 15.5104 18.8418C14.7211 19.5261 13.7841 20.0688 12.7528 20.4391C11.7215 20.8094 10.6162 21 9.5 21C8.38376 21 7.27846 20.8094 6.24719 20.4391C5.21592 20.0688 4.27889 19.5261 3.48959 18.8418C2.70029 18.1576 2.07419 17.3453 1.64702 16.4514C1.21986 15.5574 1 14.5992 1 13.6316C1 12.4179 1.52579 11.2168 2.21429 10.4737C2.21429 11.1716 2.53412 11.841 3.10343 12.3345C3.67273 12.828 4.44488 13.1053 5.25 13.1053V13.1053Z" stroke="#FF4D46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></>
                        }

                        <p>45</p>
                    </div>

                    <div className='flex space-x-2 items-center'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 14.25H9.7122L9.49828 14.4425L5.75 17.816V15V14.25H5H4C2.20507 14.25 0.75 12.7949 0.75 11V4C0.75 2.20507 2.20507 0.75 4 0.75H16C17.7949 0.75 19.25 2.20507 19.25 4V11C19.25 12.7949 17.7949 14.25 16 14.25H10Z" stroke="#6F6B80" stroke-width="1.5" />
                        </svg>
                        <p>10</p>
                    </div>

                    <div className='flex space-x-2 items-center'>
                        <ShareIcon className='h-6' />
                        <p>3</p>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </div>



            </div>
        </div >
    )
}

export default Post