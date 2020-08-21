import Axios from 'axios';
import React from 'react';
import { useSelector } from "react-redux";

function DeletePost({ profile_id, profileFolder, posts, setPosts, postId }) {
    const user = useSelector((state) => state.user);
    const deleteHandler = () => {

        const variables = {
            postId: postId,
            profileFolder: profileFolder,
            writer: user.userData._id,
        }

        Axios.post("/api/post/deleteOnePost", variables)
            .then(res => {
                if (res.data.success) {
                    setPosts(res.data.post)
                }
            })
    }



    return (
        <>
            {/* <a onClick={logoutHandler}>Logout</a> */}
            <a onClick={deleteHandler} >Delete</a>
            {/* <Link to={`/deletePost/${postId}`}>Delete</Link> */}
        </>
    )
}

export default DeletePost
