import Axios from 'axios';
import React, { useState } from 'react';


function VideoLink({setCommentLists, setVideo, updateVariable, minutes, seconds, video }) {
    const [Linkto, setLinkto] = useState("")

    
    const onSubmit = (e) => {
        e.preventDefault();
        setLinkto(`/video/${video._id}`)
        console.log('video')
        console.log(updateVariable)
        console.log(Linkto)

        const videoVariable = {
            videoId: video._id
        }
    
        Axios.post('/api/video/getVideo', videoVariable)
        .then(response => {
            if (response.data.success) {
                // console.log(response.data.video)
                setVideo(response.data.video)
            } else {
                alert('Failed to get video Info')
            }
        })

    Axios.post('/api/comment/getComments', videoVariable)
        .then(response => {
            if (response.data.success) {
                // console.log('response.data.comments',response.data.comments)
                setCommentLists(response.data.comments)
            } else {
                alert('Failed to get video Info')
            }
        })   
    }
    return (
        <>
            <span onClick={onSubmit} style={{ color: 'gray' }}>
                <span style={{ fontSize: '1rem', color: 'black' }}>{video.title}  </span><br />
                <span>{video.writer.name}</span><br />
                <span>{video.views}</span><br />
                <span>{minutes} : {seconds}</span><br />
            </span>
        </>
    )
}

export default VideoLink
