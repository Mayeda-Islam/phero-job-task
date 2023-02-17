import React from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "../Post/PostCard";

const PostDetails = () => {
  const post = useLoaderData();

  return (
    <div>
      <PostCard post={post}></PostCard>
    </div>
  );
};

export default PostDetails;
