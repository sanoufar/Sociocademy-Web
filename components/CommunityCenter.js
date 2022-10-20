import React from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { useStateValue } from './StateProvider';


function Skills({ topic, id }) {
    const colors = ['#D9D9D9', '#A49EB5', '#ED9558', '#5BB98E']

    return (<>
        <p className='
        text-center px-3 py-1 rounded-xl'
            style={{ 'background-color': `${colors[id]}` }}>{topic}</p>
    </>

    )
}


function CommunityCenter() {
    const [{ now_playing }, dispath] = useStateValue();

    return (
        <div className=' w-[60%] '>
            <div className='bg-white my-4'>
                <p className='p-5 text-xl font-medium '>
                    Software Engineering</p>
            </div>
            <div className='flex space-x-3 px-5 pb-10 items-center'>
                <p className='font-medium'>Skills Covered </p>
                <Skills topic="Programming" id={0} />
                <Skills topic="UI/UX" id={1} />
                <Skills topic="Testing" id={2} />
                <Skills topic="Deployment" id={3} />
            </div>
            <div className='bg-white border rounded-lg mb-20'>
                <ReactPlayer url='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
                    playing={true} controls={true} />
                <div className='flex justify-between
                 text-gray-500 text-sm p-2 px-5'>
                    <p>Productivity</p>
                    <p>1 days ago</p>
                </div>
                <p className='px-5 text-lg font-medium pb-3'>{now_playing?.title}</p>
                <p className='px-5 pb-10'>Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...</p>
            </div>
        </div>
    )
}

export default CommunityCenter