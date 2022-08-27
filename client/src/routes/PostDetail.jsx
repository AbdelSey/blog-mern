import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPostFromPostID,
  getPostDetails,
  updatePost,
} from "../features/posts/postSlice";
import { useNavigate } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const post = useSelector(getPostDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
    user: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost({ id, ...inputs }));
    navigate("/myPosts");
  };

  useEffect(() => {
    dispatch(getPostFromPostID(id));
    setInputs({
      title: post.title,
      description: post.description,
      image: post.image,
    });
  }, [dispatch, id]);

  const { title, description } = inputs;

  return (
    <section className="md:flex md:items-center md:justify-center mt-10">
      <div className="flex items-center justify-center md:justify-evenly md:w-[950px]">
        <article className="max-w-[375px] h-[430px] md:shadow-2xl md:h-[540px] md:rounded-lg md:mt-2 md:max-w-[400px] lg:h-[500px] lg:max-w-[500px]">
          {/* form article */}
          <div className="">
            {/* form start */}
            <div className=" p-14">
              <form
                className="w-[280px] h-[200px] space-y-3 md:w-[250px] md:h-[150px] lg:w-[260px]"
                onSubmit={handleSubmit}
              >
                {/* <div className="text-lg">
                  Recommend your
                  <span className="text-red-600 "> favorite </span> restaurant!
                </div> */}

                <div className="space-y-2">
                  <div className="relative border-b-2 focus-within:border-blue-500 mb-10">
                    <input
                      type="text"
                      value={title}
                      onChange={handleChange}
                      name="title"
                      placeholder=" "
                      className="block w-full appearance-none focus:outline-none bg-transparent"
                    />
                    <label
                      htmlFor="title"
                      className="absolute top-0 -z-1 duration-200 origin-0"
                    >
                      Title
                    </label>
                  </div>

                  {/* description input field */}
                  <div className="relative border-b-2 focus-within:border-blue-500">
                    <input
                      type="text"
                      value={description}
                      onChange={handleChange}
                      name="description"
                      placeholder=" "
                      className="block w-full appearance-none focus:outline-none bg-transparent"
                    />
                    <label
                      htmlFor="description"
                      className="absolute top-0 -z-1 duration-200 origin-0"
                    >
                      Description
                    </label>
                  </div>

                  {/* add post input field */}
                </div>
                {/* end of labels and form inputs */}
                <div className="flex items-center justify-center relative text-black">
                  <button
                    type="submit"
                    className="text-white transition  duration-150 ease-in-out cursor-pointer bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#8b0000]/50 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-[#8b0000]/55 mr-2  disabled:opacity-50 disabled:cursor-not-allowed flex justify-center w-full"
                  >
                    <div className="flex items-center text-[17px] font-light">
                      <div className="w-[20px] text-[22.5px]  mr-3"></div>

                      <div>Update Post</div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
            {/* add restaurant form end */}
          </div>
        </article>
        {/* picture article */}

        {/* end of form article */}
      </div>
    </section>
  );
};

export default PostDetail;
