import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

function Getvideo(initialState) {
    
    // const videoId = props.match.params.videoId
    const [Video, setVideo] = useState([])
    const [CommentLists, setCommentLists] = useState([])
    const [Variable, setVariable] = useState(initialState)

    const videoVariable = {
        videoId: Variable
    }

    const updateVariable = () => {
        setVariable(initialState)
    }
   

    useEffect(() => {
        axios.post('/api/video/getVideo', videoVariable)
            .then(response => {
                if (response.data.success) {
                    // console.log(response.data.video)
                    setVideo(response.data.video)
                } else {
                    alert('Failed to get video Info')
                }
            })

        axios.post('/api/comment/getComments', videoVariable)
            .then(response => {
                if (response.data.success) {
                    // console.log('response.data.comments',response.data.comments)
                    setCommentLists(response.data.comments)
                } else {
                    alert('Failed to get video Info')
                }
            })


    }, [])

    const updateComment = useCallback((newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    },[CommentLists])

    return [Video,  CommentLists, setCommentLists,  setVideo, updateComment, setVariable, updateVariable]
}

export default Getvideo
