import { Auth, Posts, UserPosts, PostDetail, AddPost, Home } from "./routes";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
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
      </Routes>
    </>
  );
}

export default App;
