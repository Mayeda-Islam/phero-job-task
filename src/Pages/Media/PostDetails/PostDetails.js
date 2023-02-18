import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "../Post/PostCard";
import PostComments from "./PostComments/PostComments";

const PostDetails = () => {
  const post = useLoaderData();
  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comments", post._id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/comments/${post._id}`);
      return res.data;
    },
  });
  return (
    <div>
      <PostCard refetch={refetch} post={post}></PostCard>
      <PostComments comments={comments} post={post}></PostComments>
    </div>
  );
};

export default PostDetails;
