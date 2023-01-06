import Image from 'next/image'
import React from 'react'

function Profile() {
    return (
        <div className='ml-auto 
          w-[80%]
           mx-7'>
            <div className=' w-[70%] '>
                <div className='bg-white my-4'>
                    <p className='p-5 text-xl font-medium '>
                        Profile</p>
                </div>
                <div>
                    <div className='bg-[#1b0d56] rounded-xl p-5'>
                        <div className='flex items-center space-x-3 text-center'>
                            <div>
                                <Image src='https://i.pinimg.com/originals/4a/3b/1a/4a3b1abae4f1f97688d1250222552bef.png' className='rounded-full'
                                    height={90} width={90} />
                            </div>

                            <div>
                                <p className='text-xl text-white'>John Doe</p>
                                <p className='text-xs text-white'>California, USA</p>

                            </div>
                        </div>
                        <div className='flex space-x-2 text-white text-sm pt-5'>
                            <p>23k Following</p>
                            <p>120k Followers</p>
                        </div>

                    </div>
                    <div className='bg-white shadow-lg  rounded-lg my-5 mx-10 p-5'>
                        <div className='flex justify-between border-b items-center'>
                            <div className='flex items-center space-x-3 pb-2 '>
                                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.0505 17.5001C32.0505 25.14 25.8571 31.3334 18.2171 31.3334C10.5772 31.3334 4.38379 25.14 4.38379 17.5001C4.38379 9.86011 10.5772 3.66672 18.2171 3.66672C25.8571 3.66672 32.0505 9.86011 32.0505 17.5001Z" stroke="#150B3D" stroke-width="1.5" />
                                    <circle cx="18.2171" cy="13.6875" r="5.08333" stroke="#150B3D" stroke-width="1.5" />
                                    <path d="M27.864 26.9792C25.7641 23.898 22.2266 21.875 18.2167 21.875C14.2067 21.875 10.6693 23.898 8.56934 26.9792" stroke="#150B3D" stroke-width="1.5" />
                                </svg>
                                <p className='font-semibold'>About me</p>
                            </div>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3979 3.78483C18.3501 4.73698 18.3501 6.28072 17.3979 7.23287L9.51502 15.1158C9.11668 15.5141 8.62165 15.8021 8.07847 15.9514L4.57564 16.9144C4.38868 16.9658 4.21691 16.7941 4.26831 16.6071L5.23135 13.1043C5.38068 12.5611 5.66864 12.0661 6.06697 11.6677L13.9499 3.78483C14.902 2.83268 16.4458 2.83268 17.3979 3.78483Z" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M13.332 4.76907L16.514 7.95105" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M3.82422 20.0001H21.8242" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                            </svg>



                        </div>

                        <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus id commodo egestas metus interdum dolor.</p>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg my-5 mx-10 p-5'>
                        <div className='flex items-center space-x-3 pb-2 border-b '>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.2168 15.1983L31.2168 14.4483L29.7168 14.4483L29.7168 15.1983L31.2168 15.1983ZM29.7168 21.6244C29.7168 22.0386 30.0526 22.3744 30.4668 22.3744C30.881 22.3744 31.2168 22.0386 31.2168 21.6244L29.7168 21.6244ZM29.7168 15.1983L29.7168 21.6244L31.2168 21.6244L31.2168 15.1983L29.7168 15.1983Z" fill="#150B3D" />
                                <path d="M9.2168 16.4835V25.8279V25.8279C14.1988 29.7672 21.2348 29.7672 26.2168 25.8279V25.8279V16.4835" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M15.2156 9.35525C16.7866 8.62735 18.647 8.62735 20.218 9.35525L31.579 14.6195L20.218 19.8837C18.647 20.6116 16.7866 20.6116 15.2156 19.8837L3.8546 14.6195L15.2156 9.35525ZM32.0356 14.4079L32.0352 14.4081L32.0356 14.4079ZM3.39801 14.4079C3.39812 14.4079 3.39823 14.408 3.39835 14.4081L3.39801 14.4079Z" stroke="#150B3D" stroke-width="1.5" />
                            </svg>

                            <p className='font-semibold'>Education</p>
                        </div>

                        <div className='pt-3'>
                            <p className='font-semibold pb-2'>Information Technology</p>
                            <p className='text-gray-500 text-sm'>Sep 2010 - Aug 2013</p>
                            <p className='text-gray-500 text-sm'>5 Years</p>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg my-5 mx-10 p-5'>
                        <div className='flex items-center space-x-3 pb-2 border-b '>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.2168" y="1.35564" width="33" height="32.5854" stroke="#150B3D" />
                                <path d="M19.8005 6.45306C19.8005 7.57592 18.8764 8.50184 17.7171 8.50184C16.5578 8.50184 15.6338 7.57592 15.6338 6.45306C15.6338 5.3302 16.5578 4.40428 17.7171 4.40428C18.8764 4.40428 19.8005 5.3302 19.8005 6.45306Z" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M29.0505 19.6963C27.8912 19.6963 26.9671 18.7704 26.9671 17.6475C26.9671 16.5246 27.8912 15.5987 29.0505 15.5987C30.2098 15.5987 31.1338 16.5246 31.1338 17.6475C31.1338 18.7704 30.2098 19.6963 29.0505 19.6963Z" stroke="#150B3D" stroke-width="1.5" />
                                <circle r="2.06611" transform="matrix(-0.711431 0.702755 -0.711431 -0.702755 25.7313 25.5641)" stroke="#150B3D" stroke-width="1.5" />
                                <circle r="2.06611" transform="matrix(-0.711431 -0.702756 0.711432 -0.702755 9.70313 25.5631)" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M17.7168 8.55182V11.3506" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M26.9248 17.6473L24.0915 17.6473" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M24.2285 24.0788L22.225 22.0997" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M11.2051 24.0788L13.2085 22.0997" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M17.7168 24.6437V26.0431" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M10.6338 17.6473L9.21712 17.6473" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M12.708 12.701L11.7063 11.7115" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M22.7256 12.701L23.7273 11.7115" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M19.8005 28.8417C19.8005 29.9646 18.8764 30.8905 17.7171 30.8905C16.5578 30.8905 15.6338 29.9646 15.6338 28.8417C15.6338 27.7188 16.5578 26.7929 17.7171 26.7929C18.8764 26.7929 19.8005 27.7188 19.8005 28.8417Z" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M6.38346 19.6963C5.22417 19.6963 4.30013 18.7704 4.30013 17.6475C4.30013 16.5246 5.22417 15.5987 6.38346 15.5987C7.54276 15.5987 8.4668 16.5246 8.4668 17.6475C8.4668 18.7704 7.54276 19.6963 6.38346 19.6963Z" stroke="#150B3D" stroke-width="1.5" />
                                <circle r="2.06611" transform="matrix(-0.711431 0.702755 -0.711431 -0.702755 9.70302 9.73038)" stroke="#150B3D" stroke-width="1.5" />
                                <circle r="2.06611" transform="matrix(-0.711431 -0.702756 0.711432 -0.702755 25.7305 9.73209)" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M24.0505 17.6477C24.0505 21.0892 21.2236 23.8947 17.7171 23.8947C14.2106 23.8947 11.3838 21.0892 11.3838 17.6477C11.3838 14.2063 14.2106 11.4008 17.7171 11.4008C21.2236 11.4008 24.0505 14.2063 24.0505 17.6477Z" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M19.8005 16.1306C19.8005 17.2534 18.8764 18.1793 17.7171 18.1793C16.5578 18.1793 15.6338 17.2534 15.6338 16.1306C15.6338 15.0077 16.5578 14.0818 17.7171 14.0818C18.8764 14.0818 19.8005 15.0077 19.8005 16.1306Z" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M21.3824 22.1778C20.5846 21.0214 19.2406 20.2622 17.7171 20.2622C16.1936 20.2622 14.8496 21.0214 14.0518 22.1778" stroke="#150B3D" stroke-width="1.5" />
                            </svg>

                            <p className='font-semibold'>Skills</p>
                        </div>

                        <p className='pt-3'></p>
                        <li>Leadership</li>
                        <li>Teamwork</li>
                        <li>Consitend</li>
                        <li>Visioner</li>
                        <p className='pt-2 text-gray-600 text-sm'>+5 more</p>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg my-5 mx-10 p-5'>
                        <div className='flex items-center space-x-3 pb-2 border-b '>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3.66699" y="3.66667" width="14.5417" height="14.5417" rx="2.25" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M5.83301 21.875V21.875C5.83301 25.9021 9.0976 29.1667 13.1247 29.1667V29.1667" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M21.875 5.83333V5.83333C25.9021 5.83333 29.1667 9.09792 29.1667 13.125V13.125" stroke="#150B3D" stroke-width="1.5" stroke-linecap="round" />
                                <rect x="16.792" y="16.7917" width="14.5417" height="14.5417" rx="2.25" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M22.3124 25.4013C22.4674 25.6701 22.638 25.928 22.8233 26.1734C22.2359 26.5156 21.5688 26.6869 20.8221 26.6875V28.4375C22.0445 28.4375 23.1367 28.0871 24.0628 27.4081C24.989 28.0871 26.0811 28.4375 27.3036 28.4375V26.6875C26.5584 26.6875 25.8913 26.516 25.3024 26.1731C25.4877 25.9277 25.6583 25.67 25.8132 25.4013C26.2803 24.5813 26.6237 23.6864 26.8307 22.75H27.7087V21H24.873V19.6875H23.2526V21H20.417V22.75H21.2949C21.502 23.6864 21.8454 24.5813 22.3124 25.4013ZM25.153 22.75C24.9854 23.3556 24.7454 23.9351 24.4391 24.4737C24.3246 24.6724 24.199 24.8632 24.0628 25.0451C23.9366 24.8766 23.8194 24.7004 23.7119 24.5173C23.3931 23.9667 23.1444 23.3723 22.9724 22.75H25.153Z" fill="#3F13E4" />
                                <path d="M11.1436 11.0073L10.7295 9.64796H8.64746L8.2334 11.0073H6.92871L8.94434 5.27296H10.4248L12.4482 11.0073H11.1436ZM10.4404 8.63234L10.0264 7.30421C10.0003 7.21567 9.96517 7.10239 9.9209 6.96437C9.87923 6.82375 9.83626 6.68182 9.79199 6.53859C9.75033 6.39276 9.71647 6.26645 9.69043 6.15968C9.66439 6.26645 9.62793 6.39927 9.58105 6.55812C9.53678 6.71437 9.49382 6.86281 9.45215 7.00343C9.41048 7.14406 9.38053 7.24432 9.3623 7.30421L8.95215 8.63234H10.4404Z" fill="#3F13E4" />
                            </svg>


                            <p className='font-semibold'>Language</p>
                        </div>

                        <p className='pt-3'></p>
                        <li>English</li>
                        <li>Germen</li>
                        <li>Spanish</li>
                        <p className='pt-2 text-gray-600 text-sm'>+2 more</p>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg my-5 mx-10 p-5'>
                        <div className='flex items-center space-x-3 pb-2 border-b '>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.57422 16.9048L4.6906 25.3635C4.50684 25.6817 4.71773 26.0829 5.0841 26.1119L8.95317 26.4186C9.10335 26.4305 9.24016 26.5095 9.32556 26.6336L11.5257 29.831C11.7341 30.1337 12.1869 30.1158 12.3706 29.7975L17.2543 21.3389" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M24.5059 17.0674L29.3554 25.467C29.5389 25.7848 29.3289 26.1854 28.9632 26.2154L25.0971 26.5319C24.9478 26.5442 24.8119 26.6226 24.7267 26.7458L22.5195 29.9356C22.3107 30.2374 21.8588 30.2189 21.6753 29.9011L16.8258 21.5015" stroke="#150B3D" stroke-width="1.5" />
                                <rect x="7.83301" y="3.58386" width="18.3333" height="18.3333" rx="9.16667" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M16.3338 7.75939C16.5434 7.11447 17.4558 7.11447 17.6653 7.75938L18.4229 10.091C18.5166 10.3794 18.7854 10.5747 19.0887 10.5747H21.5403C22.2184 10.5747 22.5003 11.4424 21.9517 11.841L19.9683 13.2821C19.723 13.4603 19.6203 13.7763 19.714 14.0647L20.4716 16.3963C20.6812 17.0412 19.943 17.5775 19.3944 17.1789L17.411 15.7379C17.1657 15.5597 16.8335 15.5597 16.5881 15.7379L14.6047 17.1789C14.0561 17.5775 13.318 17.0412 13.5275 16.3963L14.2851 14.0647C14.3788 13.7763 14.2762 13.4603 14.0308 13.2821L12.0474 11.841C11.4988 11.4424 11.7808 10.5747 12.4589 10.5747H14.9105C15.2138 10.5747 15.4825 10.3794 15.5762 10.091L16.3338 7.75939Z" fill="#150B3D" />
                            </svg>



                            <p className='font-semibold'>Awards and Appreciation</p>
                        </div>

                        <div className='pt-3'>
                            <p className='font-semibold pb-2'>Wireless Symposium (RWS)</p>
                            <p className='text-gray-500 text-sm'>Young Scientist</p>
                            <p className='text-gray-500 text-sm'>2014</p>
                        </div>
                    </div>
                    <div className='bg-white mb-24 shadow-lg rounded-lg my-5 mx-10 p-5'>
                        <div className='flex items-center space-x-3 pb-2 border-b '>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.57422 16.9048L4.6906 25.3635C4.50684 25.6817 4.71773 26.0829 5.0841 26.1119L8.95317 26.4186C9.10335 26.4305 9.24016 26.5095 9.32556 26.6336L11.5257 29.831C11.7341 30.1337 12.1869 30.1158 12.3706 29.7975L17.2543 21.3389" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M24.5059 17.0674L29.3554 25.467C29.5389 25.7848 29.3289 26.1854 28.9632 26.2154L25.0971 26.5319C24.9478 26.5442 24.8119 26.6226 24.7267 26.7458L22.5195 29.9356C22.3107 30.2374 21.8588 30.2189 21.6753 29.9011L16.8258 21.5015" stroke="#150B3D" stroke-width="1.5" />
                                <rect x="7.83301" y="3.58386" width="18.3333" height="18.3333" rx="9.16667" stroke="#150B3D" stroke-width="1.5" />
                                <path d="M16.3338 7.75939C16.5434 7.11447 17.4558 7.11447 17.6653 7.75938L18.4229 10.091C18.5166 10.3794 18.7854 10.5747 19.0887 10.5747H21.5403C22.2184 10.5747 22.5003 11.4424 21.9517 11.841L19.9683 13.2821C19.723 13.4603 19.6203 13.7763 19.714 14.0647L20.4716 16.3963C20.6812 17.0412 19.943 17.5775 19.3944 17.1789L17.411 15.7379C17.1657 15.5597 16.8335 15.5597 16.5881 15.7379L14.6047 17.1789C14.0561 17.5775 13.318 17.0412 13.5275 16.3963L14.2851 14.0647C14.3788 13.7763 14.2762 13.4603 14.0308 13.2821L12.0474 11.841C11.4988 11.4424 11.7808 10.5747 12.4589 10.5747H14.9105C15.2138 10.5747 15.4825 10.3794 15.5762 10.091L16.3338 7.75939Z" fill="#150B3D" />
                            </svg>



                            <p className='font-semibold'>Resume</p>
                        </div>

                        <div className='pt-3  flex items-center space-x-5'>
                            <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.50391 6C5.50391 2.68629 8.1902 0 11.5039 0H26L38.5009 13.2955V39C38.5009 42.3137 35.8146 45 32.5009 45H11.5039C8.1902 45 5.50391 42.3137 5.50391 39V6Z" fill="#FF464B" />
                                <path d="M26 13.2955V0L38.5 13.2955H26Z" fill="#FF8689" />
                                <path d="M15.2422 27.384C16.1471 27.384 16.8242 27.581 17.2734 27.9749C17.7259 28.3687 17.9521 28.9286 17.9521 29.6545C17.9521 29.9801 17.9049 30.2926 17.8105 30.592C17.7194 30.8915 17.568 31.1584 17.3564 31.3928C17.1481 31.6272 16.8698 31.8127 16.5215 31.9495C16.1764 32.0862 15.75 32.1545 15.2422 32.1545H14.7002V34.5227H12.7715V27.384H15.2422ZM15.1982 28.9417H14.7002V30.5823H15.0811C15.2471 30.5823 15.4017 30.5546 15.5449 30.4993C15.6882 30.4407 15.8021 30.3479 15.8867 30.2209C15.9746 30.0907 16.0186 29.9182 16.0186 29.7034C16.0186 29.4788 15.9518 29.2965 15.8184 29.1565C15.6849 29.0133 15.4782 28.9417 15.1982 28.9417ZM24.9494 30.802C24.9494 31.6321 24.7948 32.3222 24.4855 32.8723C24.1763 33.4224 23.7401 33.8359 23.177 34.1125C22.6171 34.386 21.9579 34.5227 21.1994 34.5227H18.8898V27.384H21.3605C22.1288 27.384 22.7798 27.5159 23.3137 27.7795C23.8475 28.0432 24.2528 28.429 24.5295 28.9368C24.8094 29.4446 24.9494 30.0663 24.9494 30.802ZM22.9475 30.8704C22.9475 30.4374 22.8889 30.0793 22.7717 29.7961C22.6577 29.5097 22.4852 29.2965 22.2541 29.1565C22.023 29.0133 21.7316 28.9417 21.3801 28.9417H20.8186V32.9407H21.2482C21.8342 32.9407 22.2639 32.7714 22.5373 32.4329C22.8107 32.0911 22.9475 31.5702 22.9475 30.8704ZM27.933 34.5227H26.0336V27.384H30.2523V28.9319H27.933V30.2942H30.0717V31.842H27.933V34.5227Z" fill="white" />
                            </svg>
                            <div className='text-center'>
                                <p className='text-md'>Jamet kudasi - CV - UI/UX Designer</p>
                                <p className='text-xs text-gray-400'>867Kb . 14 Feb 2022 at 11:30 am</p>
                            </div>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 6.29541V18.659C5 20.8682 6.79086 22.659 9 22.659H15C17.2091 22.659 19 20.8682 19 18.659V6.29541" stroke="#FC4646" stroke-width="1.5" />
                                <path d="M2 6.29541H22" stroke="#FC4646" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M9 10.3863L9 18.5681" stroke="#FC4646" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M15 10.3863L15 18.5681" stroke="#FC4646" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M9 3.22723H15" stroke="#FC4646" stroke-width="1.5" stroke-linecap="round" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile