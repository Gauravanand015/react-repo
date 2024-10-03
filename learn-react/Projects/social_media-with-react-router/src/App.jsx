import "./App.css";
import Footer from "./Components/Footer";
import Headers from "./Components/Headers";
import Sidebar from "./Components/Sidebar";
import CreatePostListContextProvider from "./Store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <CreatePostListContextProvider>
      <div className="app_container">
        <Sidebar />
        <div className="content">
          <Headers />
          <Outlet />
          <Footer />
        </div>
      </div>
    </CreatePostListContextProvider>
  );
}

export default App;
