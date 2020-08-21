import { Avatar, Button } from '@material-ui/core'
import TextArea from 'antd/lib/input/TextArea'
import Axios from 'axios'
import moment from "moment"
import React, { useEffect, useState } from 'react'
import useInputHooks from "../../../Hooks/useInputHooks"
import ImageSlider from '../../../utils/ImageSlider'
import { Link } from 'react-router-dom'


function UpdatePost(props) {
    const postId = props.match.params.postId
    const [onePost, setOnePost] = useState({})
    const [updatePost, setUpdatePost, resetUpdatePost] = useInputHooks("");

    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            postId,
            updatePost
        }

        Axios.post("/api/post/updateOnePost", variables)
            .then(res => {
                if (res.data.success) {
                    setOnePost(res.data.post[0])
                    resetUpdatePost();
                }
            })
    }

    const variables = {
        postId,
    }

    useEffect(() => {
        Axios.post("/api/post/getOnePost", variables)
            .then((res) => {
                resetUpdatePost('dasfdsaf')
                if (res.data.post[0]) {

                    updatepost(res.data.post[0])
                }
            })
    }, [])

    const updatepost = (newPost) => {
        setOnePost(newPost)
    }

    return (
        <>
            {onePost.writer &&
                <div className="app__posts">
                    <div className="app__posts__left">
                        <div className="post">
                            <div className="post__header">
                                <Avatar className="post__avatar" alt={onePost.writer.name} src={`http://localhost:5000/${onePost.writer.profile}`} />
                                <h3>
                                    <Link to={`/timeline/${onePost.writer._id}`}>{onePost.writer.name} {onePost.writer.lastname}</Link>
                                    <br />
                                    {moment(onePost.createdAt).format("MMM Do YY")}
                                </h3>
                            </div>

                            {/* image */}
                            {onePost.images.length !== 0 ? onePost.images.length === 1 ?
                                <div>
                                    <Link to={`/image/${postId}`}> <ImageSlider images={onePost.images} /> </Link>
                                </div>

                                : <div style={{ overflowX: "scroll" }}>
                                    <Link to={`/image/${postId}`}> <ImageSlider images={onePost.images} /> </Link>
                                </div>

                                : <></>
                            }
                            <h4 className="post__text">
                                {" "}
                                <p>{onePost.description}</p>
                            </h4>
                            <form style={{ display: 'flex', height: '1rem', marginBottom: '1rem', }} onSubmit={onSubmit}>
                                <TextArea
                                    style={{ width: '100%', borderRadius: '5px' }}
                                    {...setUpdatePost}
                                    placeholder="EditPost"
                                />
                                <br />
                                <Button style={{ width: '20%' }} onClick={onSubmit}>Submit</Button>
                            </form>
                            <hr />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default UpdatePost
