import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostfromUserID } from "./postSlice";

const UserPosts = () => {
  const dispatch = useDispatch();
  const id = localStorage.getItem("userId");

  useEffect(() => {
    dispatch(getPostfromUserID(id));
  }, [dispatch]);

  return (
    <>
      <h1 className="text-3xl"> User Posts </h1>
    </>
  );
};

export default UserPosts;
