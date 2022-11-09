import React from "react";

export default function About() {
  return (
    <div className="bg-gray-200 pb-10">
      <h1 className="text-center font-bold uppercase text-6xl pb-6">about me</h1>
      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="w-1/2">
          <h2 className="font-bold underline">academic background</h2>
          <ul className="list-disc">
            <li>
              bachelor degree in chemistry & biology - strasbourg university
            </li>
            <li>
              master degree in physics, chemistry, computer sciences, analytics
              & materials - strasbourg university & ECPM engineering school
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <h2 className="font-bold underline">dev self taught</h2>
          <ul className="list-disc">
            <li>freeCodeCamp certifications</li>
            <li>openclassrooms courses</li>
            <li>youtube</li>
            <li>discord communities</li>
            <li>front-end mentor</li>
            <li>leetcode</li>
            <li>projects building...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
