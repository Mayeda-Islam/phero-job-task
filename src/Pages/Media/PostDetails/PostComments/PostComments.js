import React from "react";

const PostComments = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <div class="my-5 bg-gray-100 flex justify-center items-center">
          <div class="max-w-xs lg:max-w-lg container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div class=" flex p-4  space-x-2">
              <img
                class="w-10 rounded-full"
                src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                alt="sara"
              />
              <span>{comment.comment}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostComments;
