import Head from "next/head";
import { useState } from "react";
import Community from "../components/Community";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import { auth, provider } from "../firebases";
import { actionTypes } from "../components/reducer";
import { useStateValue } from "../components/StateProvider";
import Image from "next/image";
import Academic from "../components/Academic";
import Admin from "../components/Admin";
import Chat from "../components/Chat";
import Link from 'next/link';

export default function LandingPage() {
    const [session, setSession] = useState(false);
    const [current, setCurrent] = useState("Feed");
    const [academicOption, setAcademicOption] = useState(false);
    const [drawer, setDrawer] = useState(1);
    const [{ }, dispath] = useStateValue();

    function landingPage() {
        // setSession(true)
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log("sa", result.user);

                // dispath({
                //   type: actionTypes.SET_USER,
                //   user: result.user
                // })
                // setSession(true)
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    if (session) return <Login signIn={signIn} />;

    return (
        <div className=" relative h-screen w-screen font-['Poppins']">
            <div className="">
                <div className=" flex w-screen justify-between align-middle">
                    <div className="">
                        <div className="rounded-lg p-4 ml-10">
                            <img src="/sociocademy.png" alt="" width={200} />
                        </div>
                    </div>
                    <div className="self-center">
                        <div className="flex mr-10">
                            <div className="flex items-center mx-6">
                                <div className="px-1 mx-2 cursor-pointer hover:text-gray-500">
                                    About
                                </div>
                                <div className="px-1 mx-2 cursor-pointer hover:text-gray-500">
                                    Features
                                </div>
                                <div className="px-1 mx-2 cursor-pointer hover:text-gray-500">
                                    Educators
                                </div>
                                <div className="px-1 mx-2 cursor-pointer hover:text-gray-500">
                                    Pricing
                                </div>
                                <div className="px-1 mx-2 cursor-pointer hover:text-gray-500">
                                    Resources
                                </div>
                            </div>
                            <div className="flex items-center mx-6 border-2 rounded-full p-1 pr-3 border-blue-200">
                                <div className="bg-[#09B279] px-4 py-1 mr-2 rounded-3xl text-white font-medium">
                                    NEW
                                </div>
                                Become our partner
                            </div>
                            <Link href="\">
                                <div className="flex px-2 hover:border-b-2 cursor-pointer items-center border-b-4 border-blue-800">
                                    Login
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F3F8FF] flex flex-col md:flex-row py-20">
                <div className="flex flex-col justify-evenly h-80 md:h-auto px-8 sm:px-16 md:py-12 md:px-14 xl:px-32 md:w-1/2">
                    <div className="flex flex-col items-center">
                        <div className="text-[10vw] md:text-[4vw] font-semibold text-[#7118EF]">
                            Sociocademy
                        </div>
                        {/* <img src="/sociocademy.png" alt="" width={500} /> */}
                        <div className="text-[1.7em] font-medium mt-[-15px]">
                            Connect. Learn. Grow.
                        </div>
                    </div>
                    <div>
                        <div className="text-center">
                            All in one Platform to Revolutionize Classrooms to
                            Smart Learning Space, Think Social Network for
                            Education
                        </div>
                    </div>
                    <div className="mx-10 h-14 flex justify-between w-full self-center">
                        <input
                            className="px-4 w-3/5 border-2 rounded-l-2xl border-gray-600"
                            type="text"
                            placeholder="email@school.com"
                        />
                        <button
                            className="w-2/5 px-4 py-2 bg-[#7118EF] hover:ring-2 border-blue-800 text-white rounded-r-2xl"
                            placeholder="Enter your business email"
                        >
                            Get started
                        </button>
                    </div>
                </div>
                <div className="flex m-10">
                    <img src="/landing_page_1.svg" alt="" />
                </div>
            </div>
            {/* Section 3 */}
            <div className="pt-20">
                {/* Heading */}
                <div className="text-center">
                    <div className="text-[10vw] sm:text-3xl md:text-[3vw] font-semibold mb-4">
                        Education Reimagined
                    </div>
                    <div className="text-[4vw] sm:text-lg md:text-[1.5vw]">
                        One platform, Immense possibilities
                    </div>
                </div>
                {/* End of Heading */}

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-[2vw] md:gap-y-14 py-20 px-[2vw] md:px-[10vw]">
                    {/* Single cards-1 */}
                    <div className="bg-[#7457EE] place-self-center h-[390px] w-[300px] py-8 flex flex-col justify-evenly text-center rounded-2xl text-white">
                        <div className="self-center px-8">
                            <img src="/card_illustrations (1).svg" alt="" />
                        </div>
                        <div className="px-8">
                            <div className="text-xl font-bold my-4">
                                Democratised Education
                            </div>
                            <div className="text-xs">
                                Quality education accessibe for every one,
                                through Technology
                            </div>
                        </div>
                    </div>
                    {/* End of single cards-1 */}
                    {/* Single cards-1 */}
                    <div className="bg-[#7457EE] place-self-center h-[390px] w-[300px] py-8 flex flex-col justify-evenly text-center rounded-2xl text-white">
                        <div className="self-center px-8">
                            <img src="/card_illustrations (6).svg" alt="" />
                        </div>
                        <div className="px-8">
                            <div className="text-xl font-bold my-4">
                                Seemless Collaboration
                            </div>
                            <div className="text-xs">
                                Flexible collaboration through innovation driven
                                Ecosystem
                            </div>
                        </div>
                    </div>
                    {/* End of single cards-1 */}
                    {/* Single cards-1 */}
                    <div className="bg-[#7457EE] place-self-center h-[390px] w-[300px] py-8 flex flex-col justify-evenly text-center rounded-2xl text-white">
                        <div className="self-center px-8">
                            <img src="/card_illustrations (2).svg" alt="" />
                        </div>
                        <div className="px-8">
                            <div className="text-xl font-bold my-4">
                                Affinity Spaces
                            </div>
                            <div className="text-xs">
                                Connect with Affinity Spaces and Live up to the
                                true potential
                            </div>
                        </div>
                    </div>
                    {/* End of single cards-1 */}
                    {/* Single cards-1 */}
                    <div className="bg-[#7457EE] place-self-center h-[390px] w-[300px] py-8 flex flex-col justify-evenly text-center rounded-2xl text-white">
                        <div className="self-center px-8">
                            <img src="/card_illustrations (4).svg" alt="" />
                        </div>
                        <div className="px-8">
                            <div className="text-xl font-bold my-4">
                                Discovering Talents
                            </div>
                            <div className="text-xs">
                                A space to unveil their talents, find the hidden
                                gems
                            </div>
                        </div>
                    </div>
                    {/* End of single cards-1 */}
                    {/* Single cards-1 */}
                    <div className="bg-[#7457EE] place-self-center h-[390px] w-[300px] py-8 flex flex-col justify-evenly text-center rounded-2xl text-white">
                        <div className="self-center px-8">
                            <img src="/card_illustrations (5).svg" alt="" />
                        </div>
                        <div className="px-8">
                            <div className="text-xl font-bold my-4">
                                Continuous feedback
                            </div>
                            <div className="text-xs">
                                Fine tune skills by continuous feed back from
                                the peers and the mentors.
                            </div>
                        </div>
                    </div>
                    {/* End of single cards-1 */}
                    {/* Single cards-1 */}
                    <div className="bg-[#7457EE] place-self-center h-[390px] w-[300px] py-8 flex flex-col justify-evenly text-center rounded-2xl text-white">
                        <div className="self-center px-8">
                            <img src="/card_illustrations (3).svg" alt="" />
                        </div>
                        <div className="px-8">
                            <div className="text-xl font-bold my-4">
                                Empowering & Rewarding
                            </div>
                            <div className="text-xs">
                                Capitalize on low hanging fruit to identify
                                added Override the digital.
                            </div>
                        </div>
                    </div>
                    {/* End of single cards-1 */}
                </div>
                {/* End of cards */}
            </div>
            {/* End of Section 3 */}
            {/* Section 4 */}
            <div className="my-10">
                {/* <div className="my-10 text-3xl md:text-[3vw] text-center font-semibold">
                    Create a learning space
                </div> */}
                <div className="flex flex-col md:flex-row text-center md:text-left px-2 md:px-24">
                    <div className="w-1/2 self-center">
                        <img src="/learning.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center self-center mt-10 md:mt-0 w-1/2">
                        <div className="text-[3vw] font-bold leading-tight">
                            Revolutionize your Classrooms to Smart Learning
                            Space
                        </div>
                        <div className="mt-4">
                            Our Learning Spaces are organized into subject-based
                            Lecture Hall s where you can collaborate, share, and
                            just talk about your day without clogging up a group
                            chat.
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Section 4 */}
            {/* Section 5 */}
            <div>
                <div className="bg-[#F6F6F6] flex flex-col md:flex-row-reverse text-center md:text-left px-2 md:px-24 md:py-24">
                    <div className="w-1/2 self-center">
                        <img src="/friends.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center self-center mt-10 md:mt-0 w-1/2">
                        <div className="text-[3vw] font-bold leading-tight">
                            Where hanging out with friends is easy
                        </div>
                        <div className="mt-4">
                            Grab a seat in a space you’re free. Friends in your
                            space can see you’re around and instantly pop in to
                            talk without having to call.
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Section 5 */}
            {/* Section 6 */}
            <div>
                <div className="flex flex-col md:flex-row text-center md:text-left px-2 md:px-24  md:py-24">
                    <div className="w-1/2 self-center">
                        <img src="/remote_learning.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center self-center mt-10 md:mt-0 w-1/2">
                        <div className="text-[3vw] font-bold leading-tight">
                            Remote & Hybrid Learning
                        </div>
                        <div className="mt-4">
                            Make your ideas heard and create fandom. Save and
                            share knowledge, work together anytime, anywhere
                            with highly flexible and affordable online learning
                            experience.
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Section 6 */}
            {/* Section 7 */}
            <div className="bg-[#150B3D] p-20">
                <div className="mt-10 text-white text-3xl md:text-[3vw] text-center font-semibold">
                    Featured in
                </div>
                <div className="flex flex-col justify-evenly md:flex-row text-center md:text-left px-2 md:px-24 md:py-24">
                    <div className="self-center">
                        <img src="/cisco_nasscom.png" alt="" />
                    </div>
                    <div className="self-center">
                        <img src="/Startupbootcamp.png" alt="" />
                    </div>
                </div>
            </div>
            {/* End of Section 7 */}
            {/* Pricing Section (8) */}
            <div className="bg-[#F6F6F6] p-20 flex flex-col">
                <div className="mt-10 text-3xl md:text-[3vw] text-center font-bold">
                    Plans & Pricing
                </div>
                <div className="m-10 h-14 flex justify-between w-full md:w-1/2 self-center">
                    <input
                        className="px-4 w-3/5 border-2 rounded-l-2xl border-gray-600"
                        type="text"
                        placeholder="email@example.com"
                    />
                    <button
                        className="w-2/5 px-4 py-2 bg-[#7118EF] hover:ring-2 border-blue-800 text-white rounded-r-2xl"
                        placeholder="Enter your business email"
                    >
                        Get a quote
                    </button>
                </div>
            </div>
            {/* End of Pricing Section (8) */}
            {/* Section (9) */}
            <div className="p-20 flex flex-col justify-center">
                <div className="my-5 w-full md:w-2/3 leading-normal text-3xl md:text-[3vw] text-center self-center font-medium">
                    Partner with us, to make digital learning an enjoyable
                    experience!
                </div>
                <div className="self-center">
                    <img src="/Mask Group.png" alt="" />
                </div>
            </div>
            {/* End of Section (9) */}

            {/* Footer Section (10) */}
            <div className="bg-[#150B3D] p-20 flex justify-center">
                <div className="text-white flex flex-col">
                    <div className="flex justify-between text-xs list-none">
                        <div className="mr-12 leading-6">
                            <div className="text-sm font-bold mb-2">
                                CONTACT
                            </div>
                            <div>operations@sociocademy.com</div>
                            <div>+ 91-7012318746</div>
                        </div>
                        <div className="mx-12">
                            <div className="text-sm font-bold mb-2">
                                Navigation
                            </div>
                            <div>
                                <div className="leading-6 cursor-pointer">
                                    <li>About</li>
                                    <li>Course</li>
                                    <li>Teachers</li>
                                    <li>Pricing</li>
                                </div>
                            </div>
                        </div>
                        <div className="mx-12">
                            <div className="text-sm font-bold mb-2">
                                Resources
                            </div>
                            <div>
                                <div className="leading-6 cursor-pointer">
                                    <li>Blog</li>
                                    <li>News Updates</li>
                                </div>
                            </div>
                        </div>
                        <div className="ml-12">
                            <div className="text-sm font-bold mb-2">
                                Stay up to date
                            </div>
                            <div className="mb-2">
                                Stay Informed On How You Can Make a Difference
                            </div>
                            <div>
                                <input
                                    className="rounded-l-md h-8 text-gray-600 px-2"
                                    type="text"
                                    placeholder="email@school.com"
                                />
                                <button className="bg-blue-400 h-8 px-4 rounded-r-md">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-px my-8 bg-blue-500 border-1"></div>
                    <div>
                        <div className="absolute">
                            <img
                                className="rounded-lg"
                                src="/socio.jpeg"
                                alt=""
                                width={100}
                            />
                        </div>
                        <div className="text-center text-sm font-thin">
                            &copy; 2021 All Rights Reserved - Sociocademy
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Footer Section (10) */}
        </div>
    );
}
