import React, { useState, useEffect, useRef } from "react";
import Posts from "./Posts";
import RightSide from "./RightSide";
import Stories from "./Stories";
import { useStateValue } from "./StateProvider";
import Image from "next/image";
import db, { storage } from "../firebases";
import firebase from "firebase";
import Profile from "./Profile";

function Options({ icon, title, onClick, currentview }) {
    return (
        <div
            onClick={() => onClick(title)}
            className="cursor-pointer flex items-center text-[#afafaf] space-x-1"
        >
            <div className=" ">{icon}</div>

            <p
                className={`text-base font-medium ${
                    currentview == title && "text-[#3A3885]"
                }`}
            >
                {title}
            </p>
        </div>
    );
}

function PostModal({ toggler }) {
    const [imageToPost, setimageToPost] = useState(null);
    const [currentview, setCurrentView] = useState("default");
    const [optionLimit, setOptionLimit] = useState(3);
    const [{ user }, dispath] = useStateValue();

    const filepickerRef = useRef(null);
    const titleRef = useRef(null);
    const messageRef = useRef(null);
    const optionsRef = useRef([]);

    optionsRef.current = [...Array(optionLimit)].map(
        (ref, index) => (optionsRef.current[index] = React.createRef())
    );

    const sendPoll = (e) => {
        console.log(titleRef.current.value);

        const options = [];
        for (let index = 0; index < optionLimit; index++) {
            var f = optionsRef.current[index].current.value;
            options.push({ option: f, vote: 0 });
        }
        console.log(options);
        db.collection("posts").add({
            category: "poll",
            title: titleRef.current.value,
            options: options,
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        titleRef.current.value = "";
        optionsRef.current.value = [];
        toggler(false);
    };

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("users")
            .add({
                title: titleRef.current.value,
                message: messageRef.current.value,
                // name: user?.displayName,
                // email: user?.email,
                // image: user?.photoURL,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then((doc) => {
                if (imageToPost) {
                    const uploadTask = storage
                        .ref(`posts/${doc.id}`)
                        .putString(imageToPost, "data_url");
                    removeImage();

                    uploadTask.on(
                        "state_change",
                        null,
                        (error) => console.error("error", error),
                        () => {
                            //upload completes

                            storage
                                .ref("posts")
                                .child(doc.id)
                                .getDownloadURL()
                                .then((url) => {
                                    db.collection("posts").doc(doc.id).set(
                                        {
                                            postImage: url,
                                        },
                                        { merge: true }
                                    );
                                });
                        }
                    );
                }
            });
        titleRef.current.value = "";
        messageRef.current.value = "";
        toggler(false);
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setimageToPost(readerEvent.target.result);
        };
    };
    const removeImage = () => {
        setimageToPost(null);
    };
    return (
        <div>
            <div
                className="fixed left-0  top-0 z-50
                 w-[100%] h-[100%] bg-black opacity-50"
            ></div>
            <div
                className="fixed left-[25vw]  top-[15vh] z-50
                 w-[50%] h-[80%] bg-white rounded-xl "
            >
                <div className="relative py-5 border-b ">
                    <p className="text-center text-lg font-medium">
                        Create post
                    </p>
                    <div className="absolute top-3 right-5">
                        <svg
                            onClick={() => toggler(false)}
                            className="cursor-pointer"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="40"
                                height="40"
                                rx="15"
                                fill="#D9D9D9"
                            />
                            <path
                                d="M26 14L14 26M14 14L26 26"
                                stroke="#545454"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div
                    className="flex space-x-5 justify-evenly
                shadow-md py-4 pb-5 mx-6 mt-6
                 rounded-xl"
                >
                    <Options
                        icon={
                            <svg
                                width="14"
                                height="16"
                                viewBox="0 0 12 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 14.3333V6M6 14.3333V1M1 14.3333V9.33333"
                                    stroke="#696969"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        }
                        title="Create poll"
                        onClick={setCurrentView}
                        currentview={currentview}
                    />
                    <Options
                        icon={
                            <svg
                                width="20"
                                height="19"
                                viewBox="0 0 16 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.00028 9.14296C7.60742 9.14296 7.27123 9.00296 6.99171 8.72296C6.71171 8.44344 6.57171 8.10725 6.57171 7.71439C6.57171 7.32153 6.71171 6.9851 6.99171 6.7051C7.27123 6.42558 7.60742 6.28582 8.00028 6.28582C8.39314 6.28582 8.72956 6.42558 9.00956 6.7051C9.28909 6.9851 9.42885 7.32153 9.42885 7.71439C9.42885 8.10725 9.28909 8.44344 9.00956 8.72296C8.72956 9.00296 8.39314 9.14296 8.00028 9.14296ZM5.08956 10.8751C4.6729 10.4822 4.33956 10.0151 4.08956 9.47368C3.83956 8.93177 3.71456 8.34534 3.71456 7.71439C3.71456 6.52391 4.13123 5.51201 4.96456 4.67868C5.7979 3.84534 6.8098 3.42868 8.00028 3.42868C9.19075 3.42868 10.2027 3.84534 11.036 4.67868C11.8693 5.51201 12.286 6.52391 12.286 7.71439C12.286 8.34534 12.161 8.93463 11.911 9.48225C11.661 10.0299 11.3277 10.4942 10.911 10.8751L9.89314 9.85725C10.1908 9.58344 10.4258 9.26201 10.5981 8.89296C10.771 8.52391 10.8574 8.13106 10.8574 7.71439C10.8574 6.92868 10.5777 6.25606 10.0181 5.69653C9.45861 5.13701 8.78599 4.85725 8.00028 4.85725C7.21456 4.85725 6.54195 5.13701 5.98242 5.69653C5.4229 6.25606 5.14314 6.92868 5.14314 7.71439C5.14314 8.14296 5.22956 8.53868 5.40242 8.90153C5.5748 9.26487 5.8098 9.58344 6.10742 9.85725L5.08956 10.8751ZM3.07171 12.893C2.39314 12.2382 1.85456 11.4672 1.45599 10.5801C1.05695 9.69344 0.857422 8.7382 0.857422 7.71439C0.857422 6.7263 1.04504 5.79772 1.42028 4.92868C1.79504 4.05963 2.30385 3.30368 2.94671 2.66082C3.58956 2.01796 4.34552 1.50891 5.21456 1.13368C6.08361 0.758914 7.01218 0.571533 8.00028 0.571533C8.98837 0.571533 9.91694 0.758914 10.786 1.13368C11.655 1.50891 12.411 2.01796 13.0539 2.66082C13.6967 3.30368 14.2055 4.05963 14.5803 4.92868C14.9555 5.79772 15.1431 6.7263 15.1431 7.71439C15.1431 8.7382 14.9438 9.69653 14.5453 10.5894C14.1462 11.4822 13.6074 12.2501 12.9288 12.893L11.9289 11.893C12.4765 11.3692 12.911 10.7472 13.2324 10.0272C13.5539 9.30677 13.7146 8.53582 13.7146 7.71439C13.7146 6.11915 13.161 4.76796 12.0538 3.66082C10.9467 2.55368 9.59552 2.0001 8.00028 2.0001C6.40504 2.0001 5.05385 2.55368 3.94671 3.66082C2.83956 4.76796 2.28599 6.11915 2.28599 7.71439C2.28599 8.53582 2.44671 9.30368 2.76814 10.018C3.08956 10.7322 3.53004 11.3513 4.08956 11.8751L3.07171 12.893Z"
                                    fill="#141A2F"
                                />
                                <path
                                    d="M6.99171 8.72296C7.27123 9.00296 7.60742 9.14296 8.00028 9.14296C8.39314 9.14296 8.72956 9.00296 9.00956 8.72296C9.28909 8.44344 9.42885 8.10725 9.42885 7.71439C9.42885 7.32153 9.28909 6.9851 9.00956 6.7051C8.72956 6.42558 8.39314 6.28582 8.00028 6.28582C7.60742 6.28582 7.27123 6.42558 6.99171 6.7051C6.71171 6.9851 6.57171 7.32153 6.57171 7.71439C6.57171 8.10725 6.71171 8.44344 6.99171 8.72296Z"
                                    fill="#EB5757"
                                />
                            </svg>
                        }
                        title="Go Live"
                        onClick={setCurrentView}
                        currentview={currentview}
                    />
                    <Options
                        icon={
                            <svg
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.25 2.66675H3.75C2.92157 2.66675 2.25 3.2637 2.25 4.00008V13.3334C2.25 14.0698 2.92157 14.6667 3.75 14.6667H14.25C15.0784 14.6667 15.75 14.0698 15.75 13.3334V4.00008C15.75 3.2637 15.0784 2.66675 14.25 2.66675Z"
                                    stroke="#2D2B2B"
                                    stroke-opacity="0.83"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M12 1.33325V3.99992"
                                    stroke="#2D2B2B"
                                    stroke-opacity="0.83"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M6 1.33325V3.99992"
                                    stroke="#2D2B2B"
                                    stroke-opacity="0.83"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M2.25 6.66675H15.75"
                                    stroke="#2D2B2B"
                                    stroke-opacity="0.83"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        }
                        title="Create Events"
                        onClick={setCurrentView}
                        currentview={currentview}
                    />
                    <Options
                        icon={
                            <svg
                                width="20"
                                height="10"
                                viewBox="0 0 20 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15 0H11V2H15C16.65 2 18 3.35 18 5C18 6.65 16.65 8 15 8H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM9 8H5C3.35 8 2 6.65 2 5C2 3.35 3.35 2 5 2H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8ZM6 4H14V6H6V4Z"
                                    fill="black"
                                />
                            </svg>
                        }
                        title="Paste a Link"
                        onClick={setCurrentView}
                        currentview={currentview}
                    />
                </div>

                <div className="p-5 flex space-x-5">
                    <div className="h-52 mt-0 w-[40%] bg-gray-200 rounded-lg">
                        {!imageToPost ? (
                            <div className="grid place-items-center h-full">
                                <svg
                                    onClick={() =>
                                        filepickerRef.current.click()
                                    }
                                    className="cursor-pointer"
                                    width="64"
                                    height="64"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="32"
                                        cy="32"
                                        r="32"
                                        fill="white"
                                    />
                                    <path
                                        d="M44.7411 40.2962C44.7411 40.9249 44.4913 41.5278 44.0468 41.9723C43.6023 42.4169 42.9994 42.6666 42.3707 42.6666H21.0374C20.4087 42.6666 19.8058 42.4169 19.3613 41.9723C18.9167 41.5278 18.667 40.9249 18.667 40.2962V27.2592C18.667 26.6305 18.9167 26.0276 19.3613 25.5831C19.8058 25.1385 20.4087 24.8888 21.0374 24.8888H25.7781L28.1485 21.3333H35.2596L37.63 24.8888H42.3707C42.9994 24.8888 43.6023 25.1385 44.0468 25.5831C44.4913 26.0276 44.7411 26.6305 44.7411 27.2592V40.2962Z"
                                        stroke="#0173C5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M31.704 37.9258C34.3223 37.9258 36.4448 35.8033 36.4448 33.1851C36.4448 30.5669 34.3223 28.4444 31.704 28.4444C29.0858 28.4444 26.9633 30.5669 26.9633 33.1851C26.9633 35.8033 29.0858 37.9258 31.704 37.9258Z"
                                        stroke="#0173C5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <input
                                    ref={filepickerRef}
                                    onChange={addImageToPost}
                                    type="file"
                                    hidden
                                />
                            </div>
                        ) : (
                            <div className="relative">
                                <svg
                                    onClick={removeImage}
                                    className="absolute right-0 cursor-pointer"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M26 14L14 26M14 14L26 26"
                                        stroke="#ffffff"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <img
                                    className="h-full w-full  
                                    object-cover"
                                    src={imageToPost}
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                    {currentview == "default" ? (
                        <div className="h-52 mt-0 w-[60%]  rounded-lg">
                            <div className="bg-gray-200 px-4 py-2 rounded-lg">
                                <input
                                    ref={titleRef}
                                    className="outline-none bg-transparent w-full"
                                    placeholder="Title"
                                />
                            </div>
                            <div className="bg-gray-200 px-4 py-2 rounded-lg mt-2">
                                <textarea
                                    ref={messageRef}
                                    className="outline-none bg-transparent w-full h-[138px]"
                                    placeholder="What's in your mind?"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="h-52 mt-0 w-[60%]  rounded-lg space-y-2">
                            <div className="bg-gray-200 px-4 py-2 mb-5 rounded-lg">
                                <input
                                    ref={titleRef}
                                    className="outline-none bg-transparent w-full"
                                    placeholder="Frame your question"
                                />
                            </div>
                            <div className="space-y-2 h-[67%] overflow-y-scroll">
                                {[...Array(optionLimit)].map((e, i) => {
                                    return (
                                        <div
                                            className="bg-gray-200 px-4 py-2 rounded-lg"
                                            key={i}
                                        >
                                            <input
                                                ref={optionsRef.current[i]}
                                                className="outline-none bg-transparent w-full"
                                                placeholder={`Option ${i + 1}`}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="bg-gray-200 px-4 py-2 rounded-lg">
                                <p
                                    onClick={() => {
                                        setOptionLimit(optionLimit + 1);
                                    }}
                                    className="outline-none bg-transparent w-full text-gray-500 cursor-pointer"
                                    placeholder="Add an option"
                                >
                                    Add Option
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <p
                    onClick={currentview == "default" ? sendPost : sendPoll}
                    className=" px-10 text-white w-fit ml-auto
                    font-medium mr-5 mt-8 text-lg rounded-xl cursor-pointer py-2 bg-[#3A3885] "
                >
                    Post
                </p>
            </div>
        </div>
    );
}

function Feed() {
    const [{ user }, dispath] = useStateValue();
    const [postmodal, setPostModal] = useState(false);

    return (
        <div
            className="ml-auto
        flex space-x-10 justify-between   max-w-[80%] pb-10"
        >
            <div>
                {/* <Profile /> */}
                <Stories />

                <div
                    className="bg-white my-3 p-5
                rounded-lg flex items-center  shadow-lg space-x-3"
                >
                    <Image
                        src={user?.photoURL}
                        width="60"
                        height="60"
                        className="rounded-full"
                        layout="intrinsic"
                    />
                    <div
                        className="w-full 
                        rounded-xl bg-gray-100 
                        border p-3 border-gray-500 cursor-pointer"
                    >
                        <p
                            className="text-gray-500 font-medium cursor-pointer"
                            onClick={() => setPostModal(true)}
                        >
                            Create post
                        </p>
                    </div>
                </div>
                {postmodal && <PostModal toggler={setPostModal} />}

                <Posts />
            </div>

            <RightSide />
        </div>
    );
}

export default Feed;
export { PostModal };
