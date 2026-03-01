import { useState } from "react";
import PostsComponent from "./components/PostsComponent";

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>

      <hr />

      {showPosts && <PostsComponent />}
    </div>
  );
}

export default App;