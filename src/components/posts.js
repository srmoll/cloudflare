import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        
        "https://serverless-api.srmoll.workers.dev/api/posts"
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <div id="main">
      <h1 id="main-page">Posts</h1>
      {posts.map((post) => (
        <div id="posts" key={post.id}>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
          <div><img src={post.src}/></div>
          <iframe src={post.iframe}></iframe>
        </div>
      ))}
    </div>
  );
};

export default Posts;