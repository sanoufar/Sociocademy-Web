import React from "react";
import StoryCard from "./StoryCard";
import Image from "next/image";
import { PlusIcon } from "@heroicons/react/outline";
import { useStateValue } from "./StateProvider";

const stories = [
    {
        name: "Abhijith B",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
];

function Stories() {
    const [{ user }, dispath] = useStateValue();
    return (
        <div className="bg-white pb-10">
            <p className="p-5  text-xl font-semibold">Moments</p>
            <div className="flex space-x-3 px-10 items-center">
                <div className="relative ">
                    <div
                        className="h-[78px] p-1 rounded-full 
                     bg-gradient-to-br from-[#9333EA] via-[#3B82F6] to-[#6EE7B7] w-[78px]"
                    >
                        <div
                            className="border-solid border-2 border-white rounded-full basis-[13%] sm:mr-10
                     min-w-[70px]"
                        >
                            <Image
                                src={user?.photoURL}
                                className="rounded-full"
                                layout="responsive"
                                width={70}
                                height={70}
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <PlusIcon
                        className="h-6
                     rounded-full absolute  bottom-0 z-20 text-white bg-blue-800 right-0 "
                    />
                </div>

                <StoryCard name="DUK" src="duk.png" />
                <StoryCard name="thingQbator" src="/cisco_nasscom.png" />
                <StoryCard name="Google" src="/Startupbootcamp.png" />
                <StoryCard name="Ted" src="ted.jpg" />
                <StoryCard name="Oxford" src="oxford.png" />
                <StoryCard name="Harward" src="harward.png" />
                <StoryCard name="IIT-K" src="iitk.jpg" />
            </div>
        </div>
    );
}

export default Stories;
