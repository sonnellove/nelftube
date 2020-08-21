import { Button, Input } from 'antd';
import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import ReplyComment from './ReplyComment';
import SingleComment from './SingleComment';
import useInputHooks from '../../../Hooks/useInputHooks'

const { TextArea } = Input;

function Comments(props) {
    const user = useSelector(state => state.user)
    const [Comment, setComment, resetComment] = useInputHooks("")
    const [OpenReplyComments, setOpenReplyComments] = useState(false)


    // const handleChange = useCallback((e) => {
    //     setComment(e.currentTarget.value)
    // },[setComment])

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(OpenReplyComments !== true){
            setOpenReplyComments(true)
        }

        const variables = {
            content: Comment,
            writer: user.userData._id,
            postId: props.postId
        }
        if (variables.content !== '') {
            axios.post('/api/comment/saveComment', variables)
                .then(response => {
                    if (response.data.success) {
                        resetComment()
                        props.refreshFunction(response.data.result)
                    } else {
                        alert('Failed to save Comment')
                    }
                })
        }

    }
    const handleChangeComment = () => {
        setOpenReplyComments(!OpenReplyComments)
    }
console.log(props.CommentLists)
    return (
        <div className="TextArea">
            <br />
            <p style={{ fontSize: '14px', margin: 0, color: 'gray', cursor: 'pointer' }}
                onClick={handleChangeComment} >{props.CommentLists.length} replies</p>
            <hr />

            {/* Comment Lists  */}

            {OpenReplyComments && props.CommentLists && props.CommentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment key={index}>
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyComment CommentLists={props.CommentLists} postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction} />
                    </React.Fragment>
                )
            ))}

            {/* Root Comment Form */}
            <form style={{ display: 'flex', height: '1rem', marginBottom: '1rem', }} onSubmit={onSubmit}>
                <TextArea
                    style={{ width: '100%', borderRadius: '5px' }}
                    // onChange={handleChange}
                    // value={...setComment}
                    {...setComment}
                    placeholder="write some comments"
                />
                <br />
                <Button style={{ width: '20%' }} onClick={onSubmit}>Submit</Button>
            </form>

        </div>
    )
}

export default React.memo(Comments)
