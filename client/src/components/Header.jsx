import React from "react";
import { Link } from "react-router-dom";
import { FcPicture } from "react-icons/fc";

const Header = () => {
  return (
    <header className="w-[100%]">
      {/* logo */}
      <div className="min-h-[50px] w-[100%] shadow-lg bg-yellow-200 flex justify-around items-center">
        <div className="flex space-x-1 items-center">
          <Link to="/">
            <FcPicture />
          </Link>
          <h1 className="text-sm"> Pixis </h1>
        </div>
        <nav className="">
          <ul className="flex space-x-4">
            <li>
              <Link to="/auth" className="text-sm">
                Login
              </Link>
            </li>
            <li>
              <Link to="/auth" className="text-sm">
                Register
              </Link>
            </li>
            <li>
              <Link to="/auth" className="text-sm">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
