import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoLink from './VideoLink';
function SideVideo(props) {
    console.log(props.setSideVid)
    const [SideVideos, setSideVideos] = useState([])

    useEffect(() => {
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    // console.log(response.data.videos)
                    setSideVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })


    }, [])

    const sideVideoItem = SideVideos.map((video, index) => {
        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

        return <div key={index} style={{ display: 'flex', marginTop: '0rem', padding: '0 2rem' }}>
            <div style={{ width: '40%', marginRight: '1rem' }}>
                    <img style={{ width: '100%' }} src={`https://raw.githubusercontent.com/sonnellove/nelftube/master/${video.thumbnail}`} alt="thumbnail" />
            </div>

            <div style={{ width: '50%' }}>
                    <VideoLink setCommentLists={props.setCommentLists} setVideo={props.setVideo} updateVariable={props.updateVariable} minutes={minutes} seconds={seconds} video={video} />
            </div>
        </div>
    })
    return (
        <>
            <div style={{ marginTop: '0rem' }}></div>
            {sideVideoItem}
        </>


    )
}

export default React.memo(SideVideo)
