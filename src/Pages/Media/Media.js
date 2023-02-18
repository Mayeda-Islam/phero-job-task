import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../AuthProvider/AuthProvider";
import PostCard from "./Post/PostCard";

const Media = () => {
  const { user, logOut } = useContext(MyContext);
  const { data: posts = [], refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get(
        `https://social-media-job-task-server.vercel.app/social-status`
      );
      return res.data;
    },
  });

  return (
    <div className="container mx-auto">
      {posts.map((post) => (
        <PostCard post={post} refetch={refetch} key={post._id}></PostCard>
      ))}
    </div>
  );
};

export default Media;
