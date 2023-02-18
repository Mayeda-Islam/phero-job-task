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
            .post(
              "https://social-media-job-task-server.vercel.app/social-status",
              socialPost
            )
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
            <input type="file" {...register("img", { required: true })} />

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
