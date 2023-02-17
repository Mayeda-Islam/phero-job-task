import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const UploadingPost = () => {
  const imgApiKey = process.env.REACT_APP_imgbb_api_key;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleSocialMedia = (data) => {
    const formData = new FormData();
    const image = data.img[0];
    formData.append("image", image);
    axios
      .post(`https://api.imgbb.com/1/upload?key=${imgApiKey}`, formData)
      .then((res) => {
        console.log(res.data.data.url);
        if (res) {
          const socialPost = {
            title: data.title,
            status: data.status,
            img: res.data.data.url,
          };
          axios
            .post("http://localhost:5000/social-status", socialPost)
            .then((res) => {
              if (res.data.acknowledged) {
                toast.success("Your status posted successfully");
              }
            });
        }
      });
  };

  return (
    <div>
      <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Post
      </div>
      <form onSubmit={handleSubmit(handleSocialMedia)}>
        <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <input
            {...register("title", { required: true })}
            class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            spellcheck="false"
            placeholder="Title"
            type="text"
          />
          <textarea
            {...register("status", { required: true })}
            class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
            spellcheck="false"
            placeholder="Describe everything about this post here"
          ></textarea>

          <div class="icons flex text-gray-500 m-2">
            {/* <svg
            class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg> */}

            {/* <svg
              class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                stroke-width="2"
                d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
              />{" "}
            </svg> */}

            <input type="file" {...register("img", { required: true })} />
            {/* <svg
             
              class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg> */}
            <div class="count ml-auto text-gray-400 text-xs font-semibold">
              0/300
            </div>
          </div>

          <div class="buttons flex">
            <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
              Cancel
            </div>
            <button
              type="submit"
              class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadingPost;
