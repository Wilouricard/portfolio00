import React from "react";

export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-4 w-[300px] mx-3">
      <div className="flex flex-col items-center gap-4">
        <img src="\projects-sc\fylo-landing-page.PNG" alt="" className="object-cover"/>
        <h1 className="uppercase font-bold">Fylo Landing Page</h1>
        <p className="text-sm">HTML CSS ReactJS TailwindCSS</p>
      </div>
      <div className="flex text-white justify-around gap-4">
        <button className="bg-black uppercase py-2 w-1/2 underline hover:bg-opacity-90 active:bg-white active:text-black">Preview</button>
        <button className="bg-black uppercase py-2 w-1/2 underline hover:bg-opacity-90 active:bg-white active:text-black">
          View code
        </button>
      </div>
    </div>
  );
}
