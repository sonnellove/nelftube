import { Avatar, Button, Input } from "@material-ui/core";
import Axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useInputHooks from "../../Hooks/useInputHooks";
import LikeDislike from "./LikeDislike";
import MessageFilledHook from "./MessageFilledHook";
import Reply from "./Reply";

function Comments({
  commentId,
  postId,
  lastname,
  name,
  content,
  profile,
  imageUrl,
  OpenComment,
  updateComment,
  // responseTo,
  comment,
  writer,
  createdAt
}) {
  // const { TextArea } = Input;
  const [Comment, setComment, resetComment] = useInputHooks("");
  const [OpenReply, setOpenReply] = useState(false);
  const [OpenReplyWrite, setOpenReplyWrite] = useState(false);
  const [ChildCommentNumber, setChildCommentNumber] = useState(0)

  const user = useSelector((state) => state.user);

  useEffect(() => {

    let commentNumber = 0;
    comment.map(function (comment) {

      if (comment.responseTo && comment.responseTo === commentId) {
        commentNumber++
      }
    })
    setChildCommentNumber(commentNumber)

    return () => {
      setChildCommentNumber()
    }

  }, [comment, commentId])

  const OpenReplies = () => {
    setOpenReply(!OpenReply);
  };

  const OpenWrite = () => {
    setOpenReplyWrite(!OpenReplyWrite);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      writer: user.userData._id,
      postId: postId,
      responseTo: commentId,
      content: Comment,
    };

    if (variables.content !== "") {
      Axios.post("/api/commentPost/saveComment", variables).then((res) => {
        if (res.data.success) {
          updateComment(res.data.result);
          resetComment("");
        } else {
          alert("Failed to save");
        }
      });
    }
  };

  const replies = comment.map((replies, index) => ((
    replies.responseTo && replies.responseTo === commentId &&
    <React.Fragment key={index}>
      <Reply
        replyId={replies._id}
        profile={replies.image}
        comment={replies.content}
        name={replies.name}
        lastname={replies.lastname}
        writer={replies.writer}
        createdAt={replies.createdAt}
      />
    </React.Fragment>
  )))


  return (
    <>
      {true ? (
        content ? (
          <>
            <div className="post__comment">
              <div className="post__comment__container">
                <div className="post__header">
                  <Avatar className="post__avatar" alt={writer.name} src={`https://raw.githubusercontent.com/sonnellove/nelftube/master/${writer.profile}`} />
                  <h3>
                    <strong>
                      <Link to={`/timeline/${writer._id}`}>{writer.name} {writer.lastname}</Link>
                    </strong>{" "}<br />
                    {moment(createdAt).format("MMM Do YY")}
                  </h3>
                </div>
                <div style={{ marginLeft: '3rem' }}>
                  <p className="post__comment_msg">{content}</p>
                </div>
                  <div className="showReply">
                    {/* <LikeDislike commentId = {commentId} /> */}
                    <LikeDislike postId={commentId} userId={localStorage.getItem('userId')} />
                    <h3 onClick={OpenReplies}>
                      <MessageFilledHook title={"reply"} />
                    </h3>
                  </div>
                {ChildCommentNumber !== 0 &&
                  <p style={{ marginBottom: 0, margin: ' -10px 0 0 10px' }} onClick={OpenReplies}>View {ChildCommentNumber} more reply(ies)</p>
                }
              </div>
              {OpenReply ? (
                content ? (
                  <>
                    {" "}
                    <div className="post__reply">
                      {replies}
                    </div>
                    {/* <hr /> */}
                  </>
                ) : (
                    <></>
                  )
              ) : (
                  <></>
                )}

              {OpenReply && (
                <form
                  style={{
                    display: "flex",
                    height: "1rem",
                    marginTop: "1rem",
                    marginBottom: '10px'
                  }}
                  onSubmit={onSubmit}
                >
                  <Input
                    style={{ flex: 1 }}
                    {...setComment}
                    placeholder="   write some replies"
                  />
                  <br />
                  <Button
                    style={{ flex: 0, marginTop: "-10px" }}
                    onClick={onSubmit}
                  >
                    Submit
                  </Button>
                </form>
              )}
              {/* <hr /> */}

            </div>

          </>
        ) : (
            <></>
          )
      ) : (
          <></>
        )}
    </>
  );
}

export default Comments;
