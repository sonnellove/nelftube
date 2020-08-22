import { Button, Input } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useInputHooks from "../../../Hooks/useInputHooks";
import Post from "../Post";

function Profile(props) {
    const user = useSelector((state) => state.user);
    const [description, setDescription, resetDescription] = useInputHooks("");
    const [posts, setPosts] = useState([]);
    const [profileFolder, setProfileFolder] = useState(true);
    const userId = props.match.params.userId
    const variables = {
        writer: userId
    }

    useEffect(() => {
        Axios.post("/api/post/profile", variables).then((res) => {
            if (res.data.success) {
                setPosts(res.data.post);

            } else {
                alert("Failed to get Post");
            }
        });

    }, []);

    const updateComment = (newComment) => {
        setPosts(posts.concat(newComment))
    }
    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            writer: user.userData._id,
            description: description,
        };
        resetDescription("")
        Axios.post("/api/post/uploadfiles", variables)
            .then((res) => {
                if (res.data.success) {
                    updateComment(res.data.result)
                } else {
                    alert('failed to save post')

                }
            })
    }
    return (
        <>
            {posts[0] &&
                <>
                    <div className="app__Cover">
                        <img style={{ width: '100%' }} src={`https://raw.githubusercontent.com/sonnellove/nelftube/master/${posts[0].writer.cover}`} />
                    </div>
                        <p><Link to="/changeCover">Change Cover</Link></p>
                    {/* <div className="app__Cover__name">
                        <h1>{posts[0].writer.name} {posts[0].writer.lastname}</h1>
                        <h2>My Blog</h2>
                    </div> */}
                </>
            }

            <div className="app__posts">
                <div className="app__posts__left">
                    <div className="imgupload">
                        <Link to="/upload">UplaodImages</Link>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        <form onSubmit={onSubmit} style={{ display: 'flex' }}>
                            <Input style={{ flex: 1 }}
                                {...setDescription}
                                placeholder="write some post"
                            />
                            <Button style={{ flex: 0 }} onClick={onSubmit}>Submit</Button>
                        </form>
                    </div>
                    {user.userData && posts.map((post, index) => (
                        <Post key={index}
                            index={index}
                            postId={post._id}
                            title={post.title}
                            description={post.description}
                            imageUrl={post.images}
                            profile={post.writer.profile}
                            writer={post.writer}
                            userId={user.userData._id}
                            setPosts={setPosts}
                            profileFolder={profileFolder}
                            profile_id={post.writer._id}
                            user={user}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Profile;
