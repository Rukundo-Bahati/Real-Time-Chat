import React, { useState } from "react";
import "./Post.css";
import {
  UilThumbsUp,
  UilCommentDots,
  UilShare,
} from "@iconscout/react-unicons";
import { likePost } from "../../api/PostsRequests";
import { useSelector } from "react-redux";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };


  const handleComment = () => {
    alert("Comment functionality not yet implemented!");
  };

  const handleShare = () => {
    alert("Share functionality not yet implemented!");
  };

  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
        
      />
      <div className="postReact">
        <UilThumbsUp
          onClick={handleLike}
          style={{ cursor: "pointer", color: liked ? "red" : "black" }}
        />
        <UilCommentDots onClick={handleComment} style={{ cursor: "pointer" }} />
        <UilShare onClick={handleShare} style={{ cursor: "pointer" }} />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name} </b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
