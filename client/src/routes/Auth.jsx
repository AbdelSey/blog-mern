import React from "react";

const Auth = () => {
  return (
    <section className="flex items-center justify-center mt-20">
      <article classNameName="">
        <form className="max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6 space-y-10">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          {/* fullname */}

          <div className="relative border-b-2 focus-within:border-blue-500">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
            />
            <label
              htmlFor="fullname"
              className="absolute top-0 -z-1 duration-200 origin-0"
            >
              Fullname
            </label>
          </div>

          {/* username */}
          <div className="relative border-b-2 focus-within:border-blue-500">
            <input
              type="text"
              name="username"
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
            />
            <label
              htmlFor="username"
              className="absolute top-0 -z-1 duration-200 origin-0"
            >
              Username
            </label>
          </div>

          {/* email */}
          <div className="relative border-b-2 focus-within:border-blue-500">
            <input
              type="text"
              name="email"
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
            />
            <label
              htmFor="email"
              className="absolute top-0 -z-1 duration-200 origin-0"
            >
              Email
            </label>
          </div>

          {/* password */}
          <div className="relative border-b-2 focus-within:border-blue-500">
            <input
              type="password"
              name="password"
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
            />
            <label
              htmlFor="password"
              className="absolute top-0 -z-1 duration-200 origin-0"
            >
              Password
            </label>
          </div>

          {/* image */}

          <div className="relative border-b-2 focus-within:border-blue-500">
            <input
              type="file"
              name="password"
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
            />
            <label
              htmlFor="password"
              className="absolute top-0 -z-1 duration-200 origin-0"
            >
              Image
            </label>
          </div>

          {/* submit */}
          <button
            type="button"
            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
          >
            Register Account
          </button>
        </form>
      </article>
    </section>
  );
};

export default Auth;
