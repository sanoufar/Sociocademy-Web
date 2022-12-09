import React from 'react'
import Image from 'next/image'


function StoryCard({ name }) {

    const colors = ['#F395BA', '#4FBECB', '#7CC39E']
    return (
        <div className='h-[84px] p-[3px] rounded-lg
        bg-gradient-to-r  from-[#a87dd3] to-[#ff0080] w-[75px]'>
            <div className='border-solid border-1 border-white 
            rounded-lg  sm:mr-10
        min-w-[70px]'>
                <Image src="/storyblank.jpe"
                    className='rounded-lg '

                    width={90} height={100} objectFit='cover' />
            </div>
            <div className='flex space-x-1'>
                {
                    [...Array(3)].map((e, i) => <div className='
                    w-5 h-[3px]' style={{ 'background-color': `${colors[i]}` }} key={i}></div>)
                }

            </div>
            <p className='text-center mt-1 text-sm font-medium'>{name} </p>
        </div>

    )
}

export default StoryCard