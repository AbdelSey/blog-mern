import { useEffect } from "react";
import { Posts, PostDetail, AddPost, Home, Page404 } from "./routes";
import { login, logout } from "./features/auth/authSlice";
import UserPosts from "./features/posts/UserPosts";
import Auth from "./features/auth/Auth";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(login());
    }
  }, [dispatch]);

  return (
    <>
      <Header />

      <Routes>
        {!isAuthenticated ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/auth" element={<Auth />} /> :
          </>
        ) : (
          <>
            <Route exact path="/postfeed" element={<Posts />} />
            <Route exact path="/posts/create" element={<AddPost />} />
            <Route exact path="/myPosts" element={<UserPosts />} />
            <Route exact path="/myPosts/:id" element={<PostDetail />} />
          </>
        )}

        <Route exact path="*" element={<Page404 />} />
      </Routes>

      <ToastContainer limit={1} />
    </>
  );
}

export default App;
