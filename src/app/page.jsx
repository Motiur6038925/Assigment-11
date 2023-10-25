import Link from "next/link";

const page = () => {
  return (
    <div className=" h-[100vh] bg-purple-950  ">
      <div>
        <h1 className=" ml-[500px] text-slate-200 font-bold text-6xl shadow-lg">
          Welcome To my Home Page
        </h1>
      </div>

      <div className="grid   place-content-center">
        <Link
          className="py-8 px-8 mt-[100px] max-w-sm mx-auto  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6   font-semibold  text-2xl   hover:text-orange-900  focus:outline-none focus:ring-2  focus:ring-amber-200 focus:ring-offset-2"
          href={"/Blog"}
        >
          Go To My Blog Page
        </Link>
      </div>
    </div>
  );
};

export default page;
