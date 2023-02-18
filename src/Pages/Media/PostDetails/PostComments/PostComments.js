import React from "react";

const PostComments = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <div class="my-5 bg-gray-100 flex justify-center items-center">
          <div class="max-w-xs lg:max-w-lg container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="text-start">
              {/* <span class="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
               Home
             </span> */}
            </div>

            <div class="flex p-4 justify-between">
              <div class="flex items-center space-x-2">
                <img
                  class="w-10 rounded-full"
                  src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                  alt="sara"
                />

                <div className="w-3/5">
                  <h2 className="text-gray-800  font-bold cursor-pointer">
                    {comment.comment}
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <p>{}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostComments;
