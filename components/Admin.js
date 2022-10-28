import React from 'react'

function Admin() {
    return (
        <div className='flex'>
            <div className='ml-14  pt-24 h-[100vh] w-[30%] bg-[#D9D9D9]'>
                <div className='flex justify-between items-center pr-10'>
                    <p className='px-10 font-semibold text-2xl'>Admin Panel</p>
                    <p className='bg-[#2A94F4]  w-fit px-3 py-1 text-white
                    rounded-lg font-medium'>Create Post</p>
                </div>
                <div className='pt-5 text-lg font-medium'>
                    <p className='admin_option'>Manage Users</p>
                    <p className='admin_option'>Insight and analytics</p>
                    <p className='admin_option'>Create a campaign</p>
                    <p className='admin_option'>Billing</p>
                    <p className='admin_option'>Apps and integrations</p>
                    <p className='admin_option'>Settings</p>
                </div>
            </div>
            <div className=''>
                <p>hello</p>
            </div>
        </div>
    )
}

export default Admin