import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostFromPostID, getPostDetails } from "../features/posts/postSlice";

const PostDetail = () => {
  const { id } = useParams();
  const post = useSelector(getPostDetails);
  const dispatch = useDispatch();

  // const [inputs, setInputs] = useState({
  //   title: "",
  //   description: "",
  //   imageURL: "",
  // });

  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(getPostFromPostID(id));
  }, [dispatch, id]);

  const { description, title, image, user } = post;

  return (
    <div>
      <form className="w-[280px] h-[200px] space-y-3 md:w-[250px] md:h-[150px] lg:w-[260px]">
        {/* <div className="text-lg">
                  Recommend your
                  <span className="text-red-600 "> favorite </span> restaurant!
                </div> */}

        <div className="space-y-2">
          <div className="relative border-b-2 focus-within:border-blue-500 mb-10">
            <input
              type="text"
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

          {/* imageURL input field */}
          <div className="">
            <div className="relative border-b-2 focus-within:border-blue-500 mt-10 mb-10">
              <input
                type="text"
                name="imageURL"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent"
              />
              <label
                htmlFor="imageURL"
                className="absolute top-0 -z-1 duration-200 origin-0"
              >
                ImageURL
              </label>
            </div>
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

              <div>Add New Post</div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostDetail;
