import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deletePostCall, deletePostFromState } from "./postSlice";
import { useDispatch } from "react-redux";

const Post = ({
  title,
  description,
  postImage,
  userImage,
  userName,
  isUser,
  id,
}) => {
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
    <div className="flex flex-col items-center relative">
      <figure class="px-10 pt-10 w-[200px] absolute top-2">
        <img src={userImage} alt="Shoes" class="rounded-full" />
      </figure>

      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={postImage} alt="Shoes" class="rounded-xl" />
        </figure>

        <h1> {userName}</h1>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Shoes!</h2>
          <p> Desciprtion: {description}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-20">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
              <div class="relative">
                {/* userImage */}
                <img
                  src={userImage}
                  class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[100px]"
                  alt="...Social Media"
                />
              </div>
            </div>
            <div class="w-full text-center mt-20">
              <div class="flex justify-center lg:pt-4 pt-8 pb-0">{title}</div>
            </div>
          </div>
          <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1"></h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              {userName}
            </div>
          </div>
          <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="relative">
                {/* userImage */}
                <img
                  src={postImage}
                  class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[100px]"
                  alt="...Social Media"
                />
              </div>

              <p class="font-light leading-relaxed text-slate-600 mb-4">
                {description}
              </p>

              {isUser && (
                <div class="w-full px-4">
                  <div className="flex flex-col">
                    <button onClick={handleDelete} className="mb-2">
                      {" "}
                      X{" "}
                    </button>
                    <button onClick={handleEdit}> UpDate </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
