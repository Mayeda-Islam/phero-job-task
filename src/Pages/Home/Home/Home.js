import React from "react";
import TopPostsSection from "../TopPostsSection/TopPostsSection";
import UploadingPost from "../UploadingPost/UploadingPost";

const Home = () => {
  return (
    <div>
      <UploadingPost></UploadingPost>
      <TopPostsSection></TopPostsSection>
    </div>
  );
};

export default Home;
