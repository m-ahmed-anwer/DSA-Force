"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CheckBox from "../checkbox/checkbox";

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
async function TableBody(props: { name: string }) {
  const data: DSA[] = await getData();
  return (
    <tbody>
      {/* row mapping */}
      {data
        .filter((item: DSA) => item.dsaType && item.dsaType === props.name)
        .map((item: DSA) =>
          item.questions.map((question: Questions) => (
            <tr key={question.id} className="pb-32">
              <th>
                <label>
                  <CheckBox
                    checked={question.checked}
                    qId={item.id}
                    id={question.id}
                  />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold text-xl">{question.id}</div>
                  </div>
                </div>
              </td>
              <td className="text-xl text-blue-500 hover:text-blue-600 hover:underline">
                <Link href={question.link} target="_blank">
                  {question.questionTitle}
                </Link>
              </td>
              <td className="text-xl">
                <Image
                  src={"/leetcode_logo.png"}
                  width={40}
                  height={40}
                  alt="Picture of the link"
                />
              </td>
            </tr>
          ))
        )}
    </tbody>
  );
}

export default TableBody;
