import React, { useEffect, useState } from 'react'
import Post from './Post'
import db from '../firebases'

function Posts() {
    const [realtimePost, setRealtimepost] = useState(null)
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setRealtimepost(snapshot.docs.map(doc => doc.data()))
        ))

    }, [])

    return (
        <div>
            {
                realtimePost?.map(post => (
                    <Post
                        key={post.id}
                        name={post.name}
                        title={post.title}
                        message={post.message}
                        image={post.image}
                        postImage={post.postImage}
                        timestamp={post.timestamp}
                        poll={post.category && true}
                        options={post.options}
                    />
                ))
            }
        </div>
    )
}

export default Posts