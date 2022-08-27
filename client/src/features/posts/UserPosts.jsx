import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { getPostfromUserID, getAllUserPosts } from "./postSlice";

const UserPosts = () => {
  const dispatch = useDispatch();
  const userPosts = useSelector(getAllUserPosts);
  const id = localStorage.getItem("userId");

  useEffect(() => {
    dispatch(getPostfromUserID(id));
  }, [dispatch, id]);

  return (
    <>
      <h1 className="text-3xl"> User Posts </h1>
      {userPosts
        ? userPosts.map((post, index) => {
            return (
              <Post
                key={index}
                isUser={true}
                description={post.description}
                title={post.title}
                postImage={post.image}
                userImage={post.user.image}
                userName={post.user.userName}
                id={post._id}
              />
            );
          })
        : null}
    </>
  );
};

export default UserPosts;
