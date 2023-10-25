"use client";

import React from "react";
import blogData from "../Data/blogData.json";
import Link from "next/link";

import styles from "./page.module.css";
const page = () => {
  return (
    <div className=" h-[100vh] bg-indigo-950  flex justify-center items-center">
      <h1 className=" text-white font-bold text-4xl  mb-[800px] ml-[400px]">
        This is Blog Page
      </h1>

      <ul className="grid grid-flow-col justify-stretch  gap-5   mt-24  mr-[600px]">
        {blogData.map((post) => (
          <li className=" " key={post.id}>
            <Link
              className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6   font-semibold  text-2xl hover:text-purple-800"
              href={`/Post/${post.id}`}
            >
              {post.Title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
