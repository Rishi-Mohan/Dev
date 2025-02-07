import { useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState({});

  const getPost = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);
  };


  // why we need useEffect here
  useEffect(() => {
    getPost();
  }, []);

  return <div>{post.title}</div>;
}

export default App;

/**
 *
 */
