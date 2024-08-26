import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTimelinePosts } from "../../actions/PostsAction";
import Post from "../Post/Post";
import "./Posts.css";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts); // Use Redux state
  const loading = useSelector((state) => state.postReducer.loading);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, [dispatch, user._id]);

  const filteredPosts = params.id
    ? posts.filter((post) => post.userId === params.id)
    : posts;

  return (
    <div className="Posts">
      {loading
        ? "Fetching posts...."
        : filteredPosts.length === 0
        ? "No posts available."
        : filteredPosts.map((post, id) => <Post data={post} key={id} />)}
    </div>
  );
};

export default Posts;
