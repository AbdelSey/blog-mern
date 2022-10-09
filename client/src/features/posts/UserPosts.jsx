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
     
      {userPosts
        ? userPosts.map((post, index) => {
            return (
              <Post
                id={post._id}
                key={index}
                isUser={true}
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

export default UserPosts;
