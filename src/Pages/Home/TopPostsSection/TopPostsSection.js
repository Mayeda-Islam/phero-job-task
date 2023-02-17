import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import PostCard from "../../Media/Post/PostCard";

const TopPostsSection = () => {
  const { data: posts = [] } = useQuery({
    queryKey: ["topPost"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/social-status`);
      return res.data;
    },
  });
  const sortedPost = posts
    .sort((r1, r2) => r2.likeByUser.length - r1.likeByUser.length)
    .slice(0, 3);
  console.log("topPost", sortedPost);
  return (
    <div>
      {sortedPost.map((post) => (
        <PostCard post={post}></PostCard>
      ))}
    </div>
  );
};

export default TopPostsSection;
