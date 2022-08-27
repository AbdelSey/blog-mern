import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex items-center justify-center mt-10">
      <div className="w-[1280px] h-[800px] flex justify-evenly">
        <div className="flex items-center">
          <article className="w-[400px]">
            <h1 className="text-[30px]">
              Welcome to{" "}
              <span className="text-[60px]">
                {" "}
                <span className="text-[#00B4F5]">P</span>ixis{" "}
              </span>
            </h1>
            <p>
              Don't have an account? Sign up{" "}
              <span className="text-[#00B4F5]">
                <Link to="/auth">here.</Link>{" "}
              </span>
            </p>
          </article>

          <article className="bg-mainBG w-[650px] h-[500px] bg-cover bg-no-repeat"></article>
        </div>
      </div>
    </section>
  );
};

export default Home;
