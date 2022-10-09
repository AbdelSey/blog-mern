import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserPostsCall,
  getAllUserPosts,
} from "../features/posts/postSlice";
import Post from "../features/posts/Post";
import { Link } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getAllUserPosts);

  useEffect(() => {
    dispatch(getAllUserPostsCall());
  }, [dispatch]);

  return (
    <>
      {posts
        ? posts.map((post, index) => {
            return (
              <Post
                id={post._id}
                isUser={localStorage.getItem("userId") === post.user._id}
                key={index}
                description={post.description}
                title={post.title}
                postImage={post.image}
                userImage={post.user.image}
                userName={post.user.userName}
              />
            );
          })
        : null}
      <Link to="/posts/create">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          +
        </button>
      </Link>
    </>
  );
};

export default Posts;
