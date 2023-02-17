import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import Media from "../../Pages/Media/Media";
import PostDetails from "../../Pages/Media/PostDetails/PostDetails";
import Message from "../../Pages/Message/Message";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/media", element: <Media></Media> },
      {
        path: "/social-status/:id",
        element: <PostDetails></PostDetails>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/social-status/${params.id}`);
        },
      },
      { path: "/message", element: <Message></Message> },
      { path: "/signin", element: <SignIn></SignIn> },
      { path: "/signup", element: <SignUp></SignUp> },
    ],
  },
]);

export default router;
