import {
  Auth,
  Posts,
  UserPosts,
  PostDetail,
  AddPost,
  Page404,
} from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/myPosts" element={<UserPosts />} />
        <Route path="/myPosts/:id" element={<PostDetail />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
