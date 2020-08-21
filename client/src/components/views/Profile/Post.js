import { Avatar } from "@material-ui/core";
import { Button, Input } from "antd";
import Axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useInputHooks from "../../Hooks/useInputHooks";
import ImageSlider from "../../utils/ImageSlider";
import Comments from "./Comments";
import LikeDislike from "./LikeDislike";
import DeletePost from "./Timeline/DeletePost";

function Post({
  profile_id,
  setPosts,
  userId,
  createdAt,
  writer,
  title,
  index,
  postId,
  name,
  lastname,
  description,
  imageUrl,
  profile,
  profileFolder,
}) {
  const [OpenComment, setOpenComment] = useState(false);
  const [CommentHooks, setCommentHooks, resetCommentHooks] = useInputHooks("");
  const [comment, setComment] = useState([]);
  const [ChildCommentNumber, setChildCommentNumber] = useState(0);

  useEffect(() => {
    let commentNumber = 0;
    comment.map(function (comment) {
      if (!comment.responseTo && postId === comment.postId) {
        commentNumber++;
      }
    });
    setChildCommentNumber(commentNumber);

    return () => {
      setChildCommentNumber();
    };
  }, [comment, postId]);

  const user = useSelector((state) => state.user);
  const CommentOpen = () => {
    setOpenComment(!OpenComment);
  };

  useEffect(() => {
    Axios.post("/api/commentPost/getComments").then((res) => {
      setComment(res.data.comments);
    });
  }, []);

  const updateComment = (newComment) => {
    setComment(comment.concat(newComment));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      writer: user.userData._id,
      postId: postId,
      content: CommentHooks,
    };
    if (variables.content !== "") {
      Axios.post("/api/commentPost/saveComment", variables).then((response) => {
        if (response.data.success) {
          resetCommentHooks();
          updateComment(response.data.result);
          // props.refreshFunction(response.data.result)
        } else {
          alert("Failed to save Comment");
        }
      });
    }
  };

  const commentPost = comment.map((reply, index) => {
    return (
      <React.Fragment key={index}>
        {OpenComment && !reply.responseTo && postId === reply.postId ? (
          <Comments
            commentId={reply._id}
            postId={reply.postId}
            profile={reply.image}
            name={reply.name}
            lastname={reply.lastname}
            content={reply.content}
            updateComment={updateComment}
            comment={comment}
            writer={reply.writer}
            createdAt={reply.createdAt}
          />
        ) : (
          <></>
        )}
      </React.Fragment>
    );
  });
  return (
    <div className="post">
      {/* header -> avatar = username */}
      <div className="post__header">
        {writer.profile[0] ? (
          <Avatar
            className="post__avatar"
            alt={writer.name}
            src={`http://localhost:5000/${writer.profile}`}
          />
        ) : (
          <Avatar className="post__avatar" alt={writer.name} />
        )}
        {/* <img className="post__image" src={`http://localhost:5000/${image}`} alt={`postImg-${index}`} /> */}
        <h3>
          {userId && writer._id && userId === writer._id ? (
            <>
              <strong>
                <span>
                  <Link to={`/editProfile`}>Edit</Link>
                </span>{" "}
                <span style={{ marginLeft: "190px", cursor: "pointer" }}>
                  <Link to={`/updatePost/${postId}`}>Update</Link>
                </span>{" "}
                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                  <DeletePost
                    setPosts={setPosts}
                    postId={postId}
                    profileFolder={profileFolder}
                  />
                </span>{" "}
                <br />{" "}
                <Link to={`/timeline/${writer._id}`}>
                  {writer.name} {writer.lastname}
                </Link>
              </strong>{" "}
            </>
          ) : (
            <Link to={`/timeline/${writer._id}`}>
              {writer.name} {writer.lastname}
            </Link>
          )}

          <br />
          {moment(createdAt).format("MMM Do YY")}
        </h3>
      </div>

      {/* image */}
      {imageUrl.length !== 0 ? (
        imageUrl.length === 1 ? (
          <div>
            <Link to={`/image/${postId}`}>
              {" "}
              <ImageSlider images={imageUrl} />{" "}
            </Link>
          </div>
        ) : (
          <div style={{ overflowX: "scroll" }}>
            <Link to={`/image/${postId}`}>
              {" "}
              <ImageSlider images={imageUrl} />{" "}
            </Link>
          </div>
        )
      ) : (
        <></>
      )}

      {/* username + caption + */}

      <h4 className="post__text">
        {" "}
        <p>{description}</p>
      </h4>

      {/*Comment/  username + caption */}
      {/* <h2 className="showComment">
        <MessageFilledHook title={"comment"} /> 0
      </h2> */}
      <LikeDislike postId={postId} userId={localStorage.getItem("userId")} />
      {ChildCommentNumber !== 0 && (
        <p
          style={{
            display: " -webkit-inline-box",
            margin: "0 10px",
            cursor: "pointer",
          }}
          onClick={CommentOpen}
        >
          View {ChildCommentNumber} more comment(s)
        </p>
      )}

      {commentPost}

      {/* Root Comment Form */}
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <Input
          style={{ borderRadius: " 0 0 0 20px" }}
          {...setCommentHooks}
          placeholder="Write some comments"
        />
        <Button style={{ borderRadius: "0 0 10px" }} onClick={onSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Post;
