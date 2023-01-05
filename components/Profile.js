import React, { useState, useEffect, useRef } from "react";
import Posts from "./Posts";
import RightSide from "./RightSide";
import Stories from "./Stories";
import { useStateValue } from "./StateProvider";
import Image from "next/image";
import db, { storage } from "../firebases";
import firebase from "firebase";

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
            <div>Hello</div>
            <div>World</div>
        </div>
    );
}

function Profile() {
    const [{ user }, dispath] = useStateValue();
    const [postmodal, setPostModal] = useState(false);

    return (
        <div
            className="ml-auto
        flex space-x-10 justify-between   max-w-[80%] pb-10"
        >
            <div>
                Hello world
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

export default Profile;
export { PostModal };
