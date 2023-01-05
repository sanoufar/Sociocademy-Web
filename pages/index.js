import {
    AcademicCapIcon,
    BookOpenIcon,
    CalendarIcon,
    ChatIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CogIcon,
    LibraryIcon,
    ShareIcon,
    UserGroupIcon,
    UserIcon,
} from "@heroicons/react/outline";
import Head from "next/head";
import { useState } from "react";
import Community from "../components/Community";
import Feed from "../components/Feed";
import Profile from "../components/Profile";
import Header from "../components/Header";
import Login from "../components/Login";
import { auth, provider } from "../firebases";
import { actionTypes } from "../components/reducer";
import { useStateValue } from "../components/StateProvider";
import Image from "next/image";
import Academic from "../components/Academic";
import Admin from "../components/Admin";
import Chat from "../components/Chat";
import Classroom from "../components/Classroom";

export default function Home() {
    const [session, setSession] = useState(false);
    const [current, setCurrent] = useState("Feed");
    const [academicOption, setAcademicOption] = useState(false);
    const [drawer, setDrawer] = useState(1);
    const [{}, dispath] = useStateValue();

    function signIn() {
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
        <div className="bg-[#f6f9fd] relative h-screen">
            <Head>
                <title>Sociocademy</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className="absolute h-full">
                <div className=" p-2 z-50 mb-2 w-fit  overflow-hidden bg-white rounded-3xl border flex space-x-3 items-center transition-all duration-300">
                    {[...Array(drawer)].map((e, i) => (
                        <>
                            <div
                                className="  "
                                onClick={() => setCurrent("Feed")}
                            >
                                <img
                                    src="/socio.jpeg"
                                    className="rounded-lg border h-[60px] w-[60px] p-1 object-contain"
                                />
                            </div>
                        </>
                    ))}

                    {drawer == 1 ? (
                        <ChevronRightIcon
                            onClick={() => setDrawer(3)}
                            className="h-8 cursor-pointer"
                        />
                    ) : (
                        <ChevronLeftIcon
                            onClick={() => setDrawer(1)}
                            className="h-8 cursor-pointer"
                        />
                    )}
                </div>

                <div className="w-fit space-y-3 pb-5 px-3">
                    <div
                        className="relative p-3 pb-0 cursor-pointer bg-slate-500 rounded-full h-14 w-14 drop-shadow-md hover:drop-shadow-xl"
                        onMouseEnter={() => setAcademicOption(true)}
                        onMouseLeave={() => setAcademicOption(false)}
                    >
                        <AcademicCapIcon
                            className="h-8 cursor-pointer"
                            onClick={() => setCurrent("Academic")}
                        />
                        <div
                            className={`absolute  flex-col  space-x-5 rounded-xl bg-white left-[55px]
            -top-1 w-[180px] ${academicOption ? "block" : "hidden"}`}
                            onMouseLeave={() => setAcademicOption(false)}
                        >
                            <div>
                                <div
                                    onClick={() => setCurrent("Academic")}
                                    className="flex space-x-5 rounded-xl rounded-b-none
                 p-3 w-full items-center hover:bg-[#1C1F37] cursor-pointer hover:text-white"
                                >
                                    <svg
                                        width="22"
                                        height="20"
                                        viewBox="0 0 22 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1H7C8.06087 1 9.07828 1.42143 9.82843 2.17157C10.5786 2.92172 11 3.93913 11 5V19C11 18.2044 10.6839 17.4413 10.1213 16.8787C9.55871 16.3161 8.79565 16 8 16H1V1Z"
                                            fill="#D9D9D9"
                                            stroke="#0C0202"
                                            stroke-opacity="0.65"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M21 1H15C13.9391 1 12.9217 1.42143 12.1716 2.17157C11.4214 2.92172 11 3.93913 11 5V19C11 18.2044 11.3161 17.4413 11.8787 16.8787C12.4413 16.3161 13.2044 16 14 16H21V1Z"
                                            fill="#D9D9D9"
                                            stroke="#0C0202"
                                            stroke-opacity="0.65"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <p>Lecture Hall</p>
                                </div>
                                <div className="flex space-x-5 hover:bg-[#1C1F37] cursor-pointer hover:text-white p-3 w-full items-center ">
                                    <UserIcon className="h-6" />
                                    <p>My Mentors</p>
                                </div>
                                <div className="flex space-x-5  p-3 w-full items-center hover:bg-[#1C1F37] cursor-pointer hover:text-white ">
                                    <BookOpenIcon className="h-7 " />
                                    <p>Library</p>
                                </div>
                                <div className="flex space-x-5  p-3 w-full items-center hover:bg-[#1C1F37] cursor-pointer hover:text-white">
                                    <svg
                                        width="25"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.4378 6.00098C16.021 6.98392 17.8564 9.48334 17.8564 12.4115C17.8564 12.7958 17.8248 13.1728 17.764 13.5399M8.56193 6.00098C5.97878 6.98392 4.14331 9.48334 4.14331 12.4115C4.14331 12.7958 4.17493 13.1728 4.23572 13.5399M15.0918 17.9137C13.9496 18.7645 12.5335 19.268 10.9999 19.268C9.46618 19.268 8.05012 18.7645 6.90796 17.9137"
                                            stroke="#A49EB5"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M13.4378 6.00098C16.021 6.98392 17.8564 9.48334 17.8564 12.4115C17.8564 12.7958 17.8248 13.1728 17.764 13.5399M8.56193 6.00098C5.97878 6.98392 4.14331 9.48334 4.14331 12.4115C4.14331 12.7958 4.17493 13.1728 4.23572 13.5399M15.0918 17.9137C13.9496 18.7645 12.5335 19.268 10.9999 19.268C9.46618 19.268 8.05012 18.7645 6.90796 17.9137"
                                            stroke="#333333"
                                            stroke-width="1.5"
                                        />
                                        <circle
                                            cx="11"
                                            cy="5.34826"
                                            r="2.50316"
                                            stroke="#A49EB5"
                                            stroke-width="1.5"
                                        />
                                        <circle
                                            cx="11"
                                            cy="5.34826"
                                            r="2.50316"
                                            stroke="#333333"
                                            stroke-width="1.5"
                                        />
                                        <circle
                                            cx="16.9104"
                                            cy="16.0149"
                                            r="2.50316"
                                            stroke="#A49EB5"
                                            stroke-width="1.5"
                                        />
                                        <circle
                                            cx="16.9104"
                                            cy="16.0149"
                                            r="2.50316"
                                            stroke="#333333"
                                            stroke-width="1.5"
                                        />
                                        <circle
                                            cx="5.08641"
                                            cy="16.0149"
                                            r="2.50316"
                                            stroke="#A49EB5"
                                            stroke-width="1.5"
                                        />
                                        <circle
                                            cx="5.08641"
                                            cy="16.0149"
                                            r="2.50316"
                                            stroke="#333333"
                                            stroke-width="1.5"
                                        />
                                    </svg>

                                    <p>Clubs</p>
                                </div>
                                <div
                                    onClick={() => setCurrent("Community")}
                                    className="flex space-x-5  p-3 w-full items-center hover:bg-[#1C1F37] cursor-pointer hover:text-white"
                                >
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_218_1255)">
                                            <path
                                                d="M16.6666 6.41675H3.33329C2.41282 6.41675 1.66663 7.23756 1.66663 8.25008V18.3334C1.66663 19.3459 2.41282 20.1667 3.33329 20.1667H16.6666C17.5871 20.1667 18.3333 19.3459 18.3333 18.3334V8.25008C18.3333 7.23756 17.5871 6.41675 16.6666 6.41675Z"
                                                stroke="#332F2F"
                                                stroke-opacity="0.8"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M14.1667 1.83325L10 6.41659L5.83337 1.83325"
                                                stroke="#332F2F"
                                                stroke-opacity="0.8"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_218_1255">
                                                <rect
                                                    width="20"
                                                    height="22"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p>My Learning</p>
                                </div>
                                <div className="flex space-x-5 rounded-b-xl  p-3 w-full items-center hover:bg-[#1C1F37] cursor-pointer hover:text-white">
                                    <CogIcon className="h-7 " />
                                    <p>Maker Space</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 cursor-pointer rounded-full h-14 w-14 drop-shadow-md hover:drop-shadow-xl">
                        <ChatIcon
                            className="h-8 "
                            onClick={() => setCurrent("Chat")}
                        />
                    </div>
                    <div className="p-3 cursor-pointer rounded-full h-14 w-14 drop-shadow-md hover:drop-shadow-xl">
                        <CalendarIcon className=" h-8 " />
                    </div>
                    <div className="p-3 cursor-pointer rounded-full h-14 w-14 drop-shadow-md hover:drop-shadow-xl">
                        <UserGroupIcon className="h-8 " />
                    </div>
                    <div className="p-3 cursor-pointer rounded-full h-14 w-14 drop-shadow-md hover:drop-shadow-xl">
                        <ShareIcon className="h-8 " />
                    </div>
                    <div className="p-3 cursor-pointer rounded-full h-14 w-14 drop-shadow-md hover:drop-shadow-xl">
                        <BookOpenIcon className="h-8 " />
                    </div>
                    {/* <div className='p-3 cursor-pointer'>
            <svg width="30" height="35" onClick={() => setCurrent('Admin')} viewBox="0 0 22 22" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.7013 5.33489C12.5181 5.52182 12.4155 5.77314 12.4155 6.03489C12.4155 6.29664 12.5181 6.54796 12.7013 6.73489L14.3013 8.33489C14.4882 8.51812 14.7396 8.62075 15.0013 8.62075C15.2631 8.62075 15.5144 8.51812 15.7013 8.33489L19.4713 4.56489C19.9742 5.67608 20.1264 6.91413 19.9078 8.11404C19.6892 9.31395 19.11 10.4187 18.2476 11.2812C17.3852 12.1436 16.2804 12.7227 15.0805 12.9413C13.8806 13.16 12.6425 13.0077 11.5313 12.5049L4.62132 19.4149C4.2235 19.8127 3.68393 20.0362 3.12132 20.0362C2.55871 20.0362 2.01914 19.8127 1.62132 19.4149C1.2235 19.0171 1 18.4775 1 17.9149C1 17.3523 1.2235 16.8127 1.62132 16.4149L8.53132 9.50489C8.02848 8.3937 7.87624 7.15566 8.09486 5.95575C8.31349 4.75584 8.89261 3.65105 9.75504 2.78861C10.6175 1.92618 11.7223 1.34706 12.9222 1.12843C14.1221 0.909808 15.3601 1.06206 16.4713 1.56489L12.7013 5.33489Z" stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div> */}
                </div>
            </div>
            {/* <Feed /> */}
            {
                {
                    Profile: <Profile />,
                    Feed: <Feed />,
                    Academic: <Academic />,
                    Community: <Community />,
                    // 'Admin': <Admin />,
                    Chat: <Chat />,
                }[current]
            }
        </div>
    );
}
