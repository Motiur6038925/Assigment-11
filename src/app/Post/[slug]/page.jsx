"use client";

import React from "react";
import blogData from "../../Data/blogData.json";
import { useSearchParams } from "next/navigation";

const page = ({ params }) => {
  console.log(params);

  const post = blogData.find((p) => p.id === parseInt(params.slug));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className=" h-[100vh]  bg-sky-950">
      <div className=" flex justify-center items-center">
        <h1 className="text-white font-bold text-6xl  ">This is Post page</h1>
      </div>
      <div className=" text-white grid place-items-center  mt-[200px]">
        <div className=" ">
          <h1 className=" text-yellow-500 font-bold text-3xl">{post.Title}</h1>
          <p className=" mt-[30px] text-yellow-300 font-semibold text-2xl">
            {post.Content}
          </p>
          <p className=" mt-[70px]  text-yellow-200 font-normal text-xl">
            Date: {post.Date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
