import { useState } from "react";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Headers from "./Components/Headers";
import PostList from "./Components/PostList";
import Sidebar from "./Components/Sidebar";
import CreatePostListContextProvider from "./Store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <CreatePostListContextProvider>
      <div className="app_container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Headers />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </CreatePostListContextProvider>
  );
}

export default App;
