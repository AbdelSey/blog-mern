import { Posts, UserPosts, PostDetail, AddPost, Home, Page404 } from "./routes";
import Auth from "./features/auth/Auth";
import { useSelector } from "react-redux";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/add" element={<AddPost />} />
        <Route path="/myPosts" element={<UserPosts />} />
        <Route path="/myPosts/:id" element={<PostDetail />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer limit={1} />
    </>
  );
}

export default App;
