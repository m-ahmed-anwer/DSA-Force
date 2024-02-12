import React, { Fragment } from "react";
import HomePageTitle from "../page.title";
import Link from "next/link";
import Table from "@/components/table/table";

async function getData() {
  const res = await fetch("http://localhost:3001/api/data");
  if (!res.ok) throw new Error("Failed to Fetch");

  return res.json();
}

type DSA = {
  id: number;
  dsaType: string;
  href: string;
  count: number;
  questions: Questions[];
};

type Questions = {
  id: number;
  questionTitle: string;
  link: string;
  checked: boolean;
};

async function Array() {
  const data: DSA[] = await getData();

  const checkedCount: number = data
    .filter((item) => item.dsaType && item.dsaType === "Array") // Filter to get only "Array" dsaType
    .flatMap((item) => item.questions) // Flatten the questions arrays
    .reduce((acc, question) => (question.checked ? acc + 1 : acc), 0); // Count the checked questions

  return (
    <>
      <HomePageTitle />

      <div className="lg:mx-32">
        <div className="text-center w-full mx-auto  px-4 sm:px-6 lg:px-8 z-20">
          <div className="lg:mx-24 pb-3">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <p className="max-md:hidden text-gray-500 dark:text-gray-400 text-2xl">
                  🔎
                </p>
              </div>

              <input
                type="search"
                id="default-search"
                className="md:text-center block w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Search Question... 🔍"
                required
              />
              <div className="text-xl text-black absolute end-2 bottom-2.5 bg-[#c8e6c9] font-medium rounded-lg px-2 py-1 ">
                {checkedCount}/22 Done ✅
              </div>
            </div>
          </div>
          <div className="text-xl breadcrumbs my-3 md:ml-24 ">
            <ul>
              <li>
                <Link href={"/"} className="text-[#007bff]">
                  DSA
                </Link>
              </li>
              <li>{"Array"}</li>
            </ul>
          </div>

          <Table name="Array" />
        </div>
      </div>
    </>
  );
}

export default Array;
