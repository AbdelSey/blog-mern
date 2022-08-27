import React from "react";
import { Link } from "react-router-dom";
import { FcPicture } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  return (
    <header className="w-[100%]">
      {/* logo */}
      <div className="min-h-[50px] w-[100%] shadow-lg bg-yellow-200 flex justify-evenly items-center">
        {!isAuthenticated && (
          <div className="flex space-x-1 items-center">
            <Link to="/">
              <FcPicture />
            </Link>
            <h1 className="text-sm"> Pixis </h1>
          </div>
        )}

        {/* authenticated links */}
        {isAuthenticated && (
          <div className="flex space-x-24">
            <div>
              <Link to="/myPosts" className="text-sm">
                My Posts
              </Link>
            </div>
            <div>
              <Link to="/postfeed" className="text-sm">
                All Posts
              </Link>
            </div>
          </div>
        )}

        {/* navbar */}

        <nav className="">
          {/* login */}
          <ul className="flex space-x-4">
            {/* unauthenticated links */}
            {!isAuthenticated && (
              <>
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
              </>
            )}

            {/* authenticated links */}
            {isAuthenticated && (
              <button onClick={(e) => dispatch(logout())}>
                <Link to="/auth" className="text-sm">
                  Logout
                </Link>
              </button>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
