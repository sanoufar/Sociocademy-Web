import React from 'react'
import Classroom from './Classroom';
import CommunityCenter from './CommunityCenter'
import CommunityContent from './CommunityContent'
import LectureHall from './LectureHall'
import { useStateValue } from './StateProvider';

function Academic() {
    const [{ classroom }, dispath] = useStateValue();
    return (
        <div className='ml-auto 
        flex space-x-10 justify-between  w-[85%]
           mx-7'>
            {
                !classroom ? <>
                    <LectureHall />
                    <CommunityContent />
                </> : <Classroom />
            }

        </div>
    )
}

export default Academic