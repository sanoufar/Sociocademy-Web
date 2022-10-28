import React, { useState, useEffect } from 'react'
import { ChatAltIcon } from '@heroicons/react/outline'
import db from '../firebases'
import firebase from 'firebase'
import { useStateValue } from './StateProvider';

function LeftChat({ name, id, image, setCurrentContacts, currentvar }) {
    return (
        <div className={`flex space-x-1 p-2 hover:bg-cyan-500
         hover:text-white cursor-pointer 
         ${name == currentvar?.name && 'bg-cyan-500 text-white'}`}
            onClick={() => setCurrentContacts({
                name: name,
                id: id,
                image: image
            })}>
            <img className='h-12
             rounded-full' src={image} />
            <div>
                <p className='pt-2 text-sm font-medium' >{name}</p>
                <p className='text-xs ' >Hi</p>
            </div>

        </div>
    )
}

function Message({ me, message, image, timestamp }) {
    return (
        <>
            {
                !me ?
                    <div className='m-3 w-fit'>
                        <div className='flex space-x-1'>
                            <img className='h-6 rounded-full' src={image}
                            />
                            <p className="bg-gray-300  text-[18px] w-fit px-3 py-1 rounded-full">{message}</p>
                        </div>

                        <p className="text-[10px]">{new Date(timestamp?.toDate()).toLocaleString()}</p>
                    </div> :
                    <div className='m-3 w-fit  ml-auto'>
                        <p className="border border-sky-500 text-right ml-auto w-fit px-3 py-1 rounded-full">{message}</p>
                        <p className="text-[8px] text-gray-400 text-right">{new Date(timestamp?.toDate()).toLocaleString()}</p>
                    </div>
            }
        </>

    )
}

function messaging() {
    const [input, setInput] = useState(null)
    const [messages, setMessages] = useState(null)
    const [{ user }, dispath] = useStateValue();


    const [contacts, setContacts] = useState([])
    const [currentContact, setCurrentContacts] = useState([])

    const [username, setUsername] = useState()

    useEffect(() => {
        db.collection('users').onSnapshot(snapshot => {

            setContacts(snapshot.docs.map(doc => doc.data()))
            console.log(contacts)
        })
    }, [])

    useEffect(() => {

        if (currentContact?.id) {
            db.collection('messages').doc('inbox').collection(currentContact.id).orderBy('timestamp', 'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [currentContact])


    const sendMessage = (e) => {
        e.preventDefault();
        // //Abhijith

        db.collection("messages").doc('inbox').collection(currentContact.id).add({
            message: input,
            name: user?.displayName,
            image: user?.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })




        setInput('');
    }

    return (
        <div className='bg-gray-100  h-[100vh] '>
            <div className='w-[70vw] mx-auto 
             m-10 h-[71vh] bg-white border-cyan-500 border
            flex  rounded-lg '>
                {/* Left */}
                <div className=' w-[45%] h-[61vh]'>
                    <p className='border-b text-lg font-semibold border-r
                     border-cyan-500 p-[1.11rem]'>Messaging</p>
                    <div className='flex-col overflow-y-auto 
                    h-full'>
                        {
                            contacts && contacts.map(contact => (
                                <LeftChat name={contact.name} id={contact.email} image={contact.image}
                                    currentvar={currentContact}
                                    setCurrentContacts={setCurrentContacts} />
                            ))
                        }
                    </div>
                </div>

                {/* Right */}

                <div className=' w-full relative border-l border-cyan-500'>
                    {
                        currentContact ? <><div className='flex items-center space-x-1 p-2 border-cyan-500 border-b'>
                            <img className='h-12 rounded-full' src={currentContact.image} />
                            <div>
                                <p className='pt-2 text-sm font-medium' >
                                    {currentContact.name}
                                </p>
                                {/* <p className='text-xs text-gray-500' >Professor DUK</p> */}
                            </div>
                        </div>

                            <div className='overflow-y-auto h-[50vh]'>

                                {
                                    messages?.map(message => (
                                        <Message message={message.message}
                                            me={message.name == username && true}
                                            image={message.image}
                                            timestamp={message.timestamp} />
                                    ))
                                }



                            </div>
                            <div>
                                <form className='border-t'>
                                    <input type='text' placeholder='Enter a message'
                                        className='absolute mb-3  bottom-0 left-5 right-5 
                                p-3 outline-none bg-gray-200  rounded-2xl' value={input}
                                        onChange={e => setInput(e.target.value)} />
                                    <button type='submit' onClick={sendMessage}></button>
                                </form>
                            </div></> :
                            <div className="grid place-items-center mt-[30%] ">
                                <ChatAltIcon className='h-10 text-cyan-500' />
                                <p className='font-thin text-xl '>Send Message</p>

                            </div>
                    }





                </div>
            </div>
        </div>
    )
}

export default messaging