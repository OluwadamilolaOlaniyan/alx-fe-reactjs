import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "40px" }}>
        <button onClick={() => setShowPosts(!showPosts)}>
          {showPosts ? "Hide Posts" : "Show Posts"}
        </button>

        <hr />

        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}

export default App;