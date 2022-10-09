import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePostCall, deletePostFromState } from "./postSlice";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";

const Post = ({ title, description, postImage, userName, isUser, id }) => {
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/myPosts/${id}`);
  };

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePostCall(id));
    dispatch(deletePostFromState(id));
  };

  return (
    <div className="flex flex-col items-center relative mt-20">
      <div class="card max-w-[560px] bg-base-100 shadow-2xl">
        <figure class="px-10 pt-10">
          <img src={postImage} alt="image" className="rounded-xl w-[480px]" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-extrabold">{description}</h2>
          <p className="">{title}</p>
          <p className="text-xs font-bold">{userName}</p>
        </div>
      </div>
      {isUser && (
        <div className="relative">
          <div className="">
            <div className="flex flex-col">
              <button
                onClick={handleDelete}
                className="mb-2 absolute bottom-[475px] right-[-255px] text-red-500 font-bold py-2 px-4 rounded text-[18px] hover:text-[19px]"
              >
                <FaTrashAlt />
              </button>

              <button
                onClick={handleEdit}
                className="mb-2 absolute bottom-[473px] right-[-235px] mr-3 text-red-500 font-bold py-2 px-4 rounded text-[22px] hover:text-[19px]"
              >
                <MdUpdate />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
