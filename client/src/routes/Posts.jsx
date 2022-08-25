import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserPostsCall,
  getAllUserPosts,
} from "../features/posts/postSlice";
import Post from "../features/posts/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getAllUserPosts);

  useEffect(() => {
    dispatch(getAllUserPostsCall());
  }, [dispatch]);

  return (
    <>
      <h1> Posts </h1>
      {posts
        ? posts.map((post, index) => {
            return (
              <Post
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
    </>
  );
};

export default Posts;
