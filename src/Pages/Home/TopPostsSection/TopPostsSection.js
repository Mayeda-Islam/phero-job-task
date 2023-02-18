import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import PostCard from "../../Media/Post/PostCard";

const TopPostsSection = () => {
  const { data: posts = [] } = useQuery({
    queryKey: ["topPost"],
    queryFn: async () => {
      const res = await axios.get(
        `https://social-media-job-task-server.vercel.app/social-status`
      );
      return res.data;
    },
  });
  const sortedPost = posts
    .sort((r1, r2) => r2?.likeByUser?.length - r1?.likeByUser?.length)
    .slice(0, 3);
  console.log("topPost", sortedPost);
  return (
    <div>
      <h2 className="text-center mt-12 text-3xl font-semibold">
        Most liked posts
      </h2>
      {sortedPost.map((post) => (
        <PostCard post={post}></PostCard>
      ))}
    </div>
  );
};

export default TopPostsSection;
