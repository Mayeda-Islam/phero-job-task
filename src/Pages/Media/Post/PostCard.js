import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../../AuthProvider/AuthProvider";

const PostCard = ({ post, refetch }) => {
  const { user } = useContext(MyContext);
  const handleAddToLink = (id) => {
    const likeByUser = {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
    axios
      .patch(`http://localhost:5000/social-status/${id}`, likeByUser)
      .then((res) => {
        console.log(res.data);
        refetch();
      });
  };
  return (
    <div>
      <div class="my-5 bg-gray-100 flex justify-center items-center">
        <div class="max-w-xs lg:max-w-lg container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="text-start">
            {/* <span class="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
                Home
              </span> */}
            <div className="flex mr-2 justify-between items-center">
              <h1 class="text-2xl mt-2 ml-4  font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                {post?.title}
              </h1>
              <p>{post?.date}</p>
            </div>
            <p class="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">
              {post?.status?.length > 100
                ? post.status.slice(0, 19)
                : post.status}
            </p>
            <Link
              className="ml-4 mt-1 mb-2 text-sm text-gray-700"
              to={`/social-status/${post._id}`}
            >
              Details..
            </Link>
          </div>
          <img class="w-full cursor-pointer" src={post.img} alt="" />
          <div class="flex p-4 justify-between">
            <div class="flex items-center space-x-2">
              <img
                class="w-10 rounded-full"
                src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                alt="sara"
              />
              <h2 class="text-gray-800 font-bold cursor-pointer"></h2>
            </div>
            <div class="flex space-x-2">
              <div class="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 text-gray-600 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
                <span></span>
              </div>
              <div class="flex space-x-1 items-center">
                <button onClick={() => handleAddToLink(post._id)}>
                  {!post?.likeByUser.includes(user?.email) ? (
                    <svg
                      class="h-7 w-7 bi bi-heart text-red-400 hover:text-red-400 transition duration-100 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0  16 16"
                    >
                      {" "}
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                        fill="red"
                      ></path>{" "}
                    </svg>
                  ) : (
                    <svg
                      class="h-7 w-7 bi bi-heart-fill text-red-400 hover:text-red-400 transition duration-100 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        fill="red"
                      ></path>{" "}
                    </svg>
                  )}
                </button>
                <span>{post?.likeByUser ? post?.likeByUser?.length : 0}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
