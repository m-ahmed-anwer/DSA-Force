import Link from "next/link";
import React from "react";

function HomePageTitle() {
  return (
    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
      <Link href={"/"} className="text-5xl font-bold ">
        DSA Code Force
      </Link>
      <h2 className="text-3xl font-extralight mt-3">Crack the DSA Codes</h2>
      <p className="text-2xl mt-7">
        Total Questions Solved : {"20"} ({"20"}% Done)
      </p>
      <progress
        className="progress lg:w-6/12 h-4 mt-3"
        value={"10"}
        max={"100"}
      ></progress>
    </div>
  );
}

export default HomePageTitle;
