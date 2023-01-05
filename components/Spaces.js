import React from 'react'


function SpacesCard({ name }) {
    return (
        <div className='border-2 rounded-md mx-5 my-2 border-[#E75FD9A6]'>
            <div className='flex items-center justify-center space-x-2 p-2'>
                <img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ted-512.png"
                    className=' object-contain w-12 h-10' />
                <p>{name}</p>
            </div>
            <div className='flex justify-between p-2'>
                <p>300 Online</p>
                <p>300 Members</p>
            </div>

        </div>)
}

function SpaceCardRight({ name, color }) {
    return (
        <div className={`bg-[#${color}] w-40 m-5 pb-4 rounded-lg`}
            style={{ backgroundColor: "#" + color }}>
            <p className='text-white px-5 pt-8 pb-20 font-semibold 
            text-xl'>{name}</p>
            <p className={`text-[#${color}] 
            text-sm rounded-lg bg-white w-fit 
             py-2 px-8 mr-3 ml-auto`} style={{ color: "#" + color }}>More</p>
        </div>
    )
}

function Spaces() {
    return (
        <div className='ml-auto 
        flex space-x-10 justify-between  w-[85%]
           '>

            <div className=' w-[80%] '>
                <div className='bg-white my-4'>
                    <p className='p-5 text-xl font-medium '>
                        Spaces</p>
                </div>

                <div className='flex space-x-3'>
                    {/* Spaces left */}
                    <div className='bg-white w-[40%] shadow-2xl rounded-md pb-5'>
                        <p className='text-center p-3 font-semibold '>Spaces</p>
                        <div className='flex justify-center items-center 
                    space-x-2 text-center p-3 text-sm bg-[#eef0fb] mx-5 my-2
                    border rounded-md border-[#6F6B80]'>

                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 7.5C0 3.35786 3.35786 0 7.5 0V0C11.6421 0 15 3.35786 15 7.5V7.5C15 11.6421 11.6421 15 7.5 15V15C3.35786 15 0 11.6421 0 7.5V7.5Z" fill="#7737FF" />
                                <path d="M6.90341 3.72159C6.90341 3.3921 7.17051 3.125 7.5 3.125C7.82949 3.125 8.09659 3.3921 8.09659 3.72159V11.2784C8.09659 11.6079 7.82949 11.875 7.5 11.875C7.17051 11.875 6.90341 11.6079 6.90341 11.2784V3.72159Z" fill="white" />
                                <path d="M3.72159 8.09659C3.3921 8.09659 3.125 7.82949 3.125 7.5C3.125 7.17051 3.3921 6.90341 3.72159 6.90341H11.2784C11.6079 6.90341 11.875 7.17051 11.875 7.5C11.875 7.82949 11.6079 8.09659 11.2784 8.09659H3.72159Z" fill="white" />
                            </svg>
                            <p className=' '>New Space</p>
                        </div>
                        <div>
                            <SpacesCard name="IAS Aspirants Study - Circle" />
                            <SpacesCard name="Ted Talks - Practice Circle" />
                            <SpacesCard name="Ted Talks - Cirlce" />
                            <SpacesCard name="Ted Talks - Cirlce" />
                        </div>
                    </div>
                    {/* Spaces right */}
                    <div className='bg-white w-[80%] shadow-2xl rounded-md  '>
                        <div className='flex flex-wrap '>
                            <SpaceCardRight color="ff8990" name="Coding" />
                            <SpaceCardRight name="Entertainment" color="4cda88" />
                            <SpaceCardRight name="Science" color="828ca2" />
                            <SpaceCardRight name="Music" color="16adf9" />
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Spaces