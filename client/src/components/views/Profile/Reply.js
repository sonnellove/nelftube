import { Avatar } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import LikeDislike from "./LikeDislike";
function Reply({ createdAt, writer, replyId, profile, comment }) {

  return (
    <>
      {" "}
      <div className="post__header">
      <Avatar className="post__avatar" alt={writer.name} src={`http://localhost:5000/${writer.profile}`} />
        <h3>
          <strong>
          <Link to={`/timeline/${writer._id}`}>{writer.name} {writer.lastname}</Link>
          </strong>{" "}<br />
          {moment(createdAt).format("MMM Do YY")}
        </h3>
      </div>
      <div style={{ marginLeft: '3rem' }}>
        <p className="post__reply_msg" > {comment} </p>
        <LikeDislike commentId={replyId} userId={localStorage.getItem('userId')} />
      </div>
    </>
  );
}

export default Reply;
