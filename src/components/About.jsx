import React from "react";

export default function About() {
  return (
    <div className="bg-gray-200 flex flex-col gap-10 px-10 pb-20" id="about">
      <h1 className="text-center font-bold uppercase text-6xl">about me</h1>
      <div className="flex flex-col gap-12 lg:items-start lg:w-1/4 lg:mr-auto lg:ml-auto">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold uppercase lg:text-3xl">academic background</h2>
          <ul className="list-disc flex flex-col gap-4">
            <li>
              Bachelor degree in Chemistry & Biology - Strasbourg University
            </li>
            <li>
              Master degree in Physics, Chemistry, Computer Sciences, Analytics
              & Materials {"(CPIAM)"}- Strasbourg University & ECPM Engineering School
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-bold uppercase lg:text-3xl">front-end self taught</h2>
          <ul className="list-disc flex flex-col gap-4">
            <li>freeCodeCamp certifications:</li>
            <ul className="list-disc pl-12 flex flex-col gap-4 underline">
              <li><a href="https://www.freecodecamp.org/certification/Nameroune/responsive-web-design" target={"_blank"}>Responsive Web Design</a></li>
              <li><a href="https://www.freecodecamp.org/certification/Nameroune/javascript-algorithms-and-data-structures" target={"_blank"}>JavaScript Algorithms and Data Structures</a></li>
              <li><a href="https://www.freecodecamp.org/certification/Nameroune/front-end-development-libraries" target={"_blank"}>Front End Development Libraries</a></li>
            </ul>
            <li>openclassrooms courses</li>
            <li>scrimba courses</li>
            <li>official docs</li>
            <li>youtube</li>
            <li>discord communities</li>
            <li>front-end mentor</li>
            <li>leetcode</li>
            <li><a href="#projects" className="underline">projects</a> building...</li>
          </ul>
        </div>
      </div>
      <a href="#contact" className="underline font-bold text-center">
          <p>CONTACT ME</p>
        </a>
    </div>
  );
}
