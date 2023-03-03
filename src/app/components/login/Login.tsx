import React from "react";

const Login = () => {
  return (
    <div className="px-40 py-28 flex flex-wrap justify-center ">
      <div className="lg:mr-10 sm:mb-10 truncate ">
        <h1 className="font-bold text-2xl mb-2">Login</h1>
        <p className="text-gray-600 text-sm text-center">
          Get access to your Orders, Wishlists and Reccomendations
        </p>
      </div>
      <div className="">
        <p className="text-green-500">Email</p>
        <input
          type="text"
          className="border-b-2 w-full"
          placeholder="enter email"
        />
        <input
          type="password"
          className="border-b-2 w-full mb-10"
          placeholder="password"
        />

        <button className="block bg-red-800 text-white w-full">Submit</button>
      </div>
    </div>
  );
};

export default Login;
