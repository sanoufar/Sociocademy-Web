import React from 'react'
import { BellIcon, ChartBarIcon, CogIcon, FlagIcon, MoonIcon, PlayIcon, PlusCircleIcon, PlusIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import App from 'next/app'
import { useStateValue } from './StateProvider';

function Header() {
    const [{ user }, dispath] = useStateValue();

    console.log('siccess', user)
    return (
        <div className='flex justify-between items-center'>
            <div className='flex space-x-20 items-center m-5'>
                <div className='bg-pink-100 p-2 border border-gray-300 rounded-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div>
                    <Image src="/socio.jpeg" width="150" height="64" layout="fixed" />
                </div>

            </div>
            <div className='flex-1    '>
                <div className='space-x-5 pl-5 border border-gray-400 flex ml-2 items-center m-5 rounded-full  p-2'>
                    <SearchIcon className='h-6 ' />
                    <input className='flex-1  items-center bg-transparent outline-none placeholder-gray-500'
                        placeholder='Search for People, Institutions and Courses' />
                    <Image src={user?.photoURL} width="40" height="40" className='rounded-full' layout="fixed" />

                </div>

            </div>
            <div className='flex  w-96   items-center justify-between'>

                <div className=' bg-pink-100 p-2 border border-gray-300 rounded-2xl'>
                    <div className='bg-blue-500 rounded-full'>
                        <PlusIcon className='h-6 text-white' />

                    </div>
                </div>

                <div className='flex  w-[60%] mr-10 justify-between'>
                    <BellIcon className='h-8 ' />
                    <QuestionMarkCircleIcon className='h-8 ' />
                    <CogIcon className='h-8 ' />
                    <MoonIcon className='h-8 ' />

                </div>
            </div>
        </div>
    )
}

export default Header