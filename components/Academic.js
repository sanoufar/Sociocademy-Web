import React from 'react'
import CommunityCenter from './CommunityCenter'
import CommunityContent from './CommunityContent'
import LectureHall from './LectureHall'

function Academic() {
    return (
        <div className='ml-auto 
        flex space-x-10 justify-between  w-[85%]
           mx-7'>
            <LectureHall />

            <CommunityContent />
        </div>
    )
}

export default Academic