import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { MyContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { signUpWithEmail, updateUser } = useContext(MyContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signUpWithEmail(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const updatedUserInfo = {
          displayName: data.name,
          photoURL: data.photoURL,
        };
        if (user) {
          updateUser(updatedUserInfo)
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // ..
      });
  };
  return (
    <>
      <section class="h-screen">
        <div class="container px-6 py-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="md:w-8/12 lg:w-1/3 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt=""
              />
            </div>
            <div class="md:w-8/12 lg:w-1/4 lg:ml-20">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-6">
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Name"
                  />
                </div>
                <div class="mb-6">
                  <input
                    {...register("photoURL", { required: true })}
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Photo URL"
                  />
                </div>
                <div class="mb-6">
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email"
                  />
                </div>

                <div class="mb-6">
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                <div class="flex justify-between items-center mb-6">
                  <div class="form-group form-check">
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="exampleCheck2"
                    >
                      Already have an account?
                    </label>
                  </div>
                  <a
                    href="#!"
                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    <Link to={"/signin"}> Sign in</Link>
                  </a>
                </div>

                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign Up
                </button>

                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p class="text-center font-semibold mx-4 mb-0">
                    {errors.email && (
                      <p role="alert">{errors.email?.message}</p>
                    )}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
