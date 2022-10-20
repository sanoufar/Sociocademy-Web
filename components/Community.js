import React from 'react'
import CommunityCenter from './CommunityCenter'
import CommunityContent from './CommunityContent'

function Community() {
    return (
        <div className='ml-auto 
        flex space-x-10 justify-between  w-[85%]
           mx-7'>
            <CommunityCenter />
            <CommunityContent />
        </div>
    )
}

export default Community