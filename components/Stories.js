import React from 'react'
import StoryCard from './StoryCard'
import Image from 'next/image'
import { PlusIcon } from '@heroicons/react/outline'



const stories = [
    {
        name: 'Abhijith B',
        src: 'https://links.papareact.com/zof',
        profile: 'https://links.papareact.com/l4v'
    },
    {
        name: 'Elon Musk',
        src: 'https://links.papareact.com/4zn',
        profile: 'https://links.papareact.com/kxk'
    },
    {
        name: 'Jeff Bezoz',
        src: 'https://links.papareact.com/k2j',
        profile: 'https://links.papareact.com/f0p'
    },
    {
        name: 'Mark Zuckerberg',
        src: 'https://links.papareact.com/xql',
        profile: 'https://links.papareact.com/snf'
    },
    {
        name: 'Bill Gates',
        src: 'https://links.papareact.com/4u4',
        profile: 'https://links.papareact.com/zvy'
    }
]

function Stories() {
    return (
        <div className='bg-white pb-10'>

            <p className='p-5  text-xl font-semibold'>Moments</p>
            <div className='flex space-x-3 px-10 items-center'>
                <div className='relative '>
                    <div className='h-[78px] p-1 rounded-full 
                     bg-gradient-to-r  from-[#a87dd3] to-[#ff0080] w-[78px]'>
                        <div className='border-solid border-2 border-white rounded-full basis-[13%] sm:mr-10
                     min-w-[70px]'>
                            <Image src="/storyavatar.jpeg"
                                className='rounded-full '
                                layout="responsive"
                                width={70} height={70} objectFit='cover' />

                        </div>
                    </div>
                    <PlusIcon className='h-6
                     rounded-full absolute  bottom-0 z-20 text-white bg-blue-800 right-0 ' />

                </div>

                <StoryCard name="DUK" />
                <StoryCard name="Ted" />
                <StoryCard name="Harward" />
                <StoryCard name="AICTE" />
                <StoryCard name="Oxford" />
            </div>
        </div >
    )
}

export default Stories