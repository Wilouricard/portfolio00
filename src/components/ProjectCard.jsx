import React from "react";

export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-4 w-[300px] mx-3 bg-slate-300">
      <div className="flex flex-col items-center gap-4">
        <img src="\projects-sc\fylo-landing-page.PNG" alt="" className="object-cover"/>
        <h1 className="uppercase font-bold">Fylo Landing Page</h1>
        <p className="text-sm">HTML CSS ReactJS TailwindCSS</p>
      </div>
      <div className="flex text-white justify-around gap-4 text-center">
        <a href="https://fylolandingpage-wilou.netlify.app/" className="bg-black uppercase py-2 w-1/2 underline hover:bg-opacity-90 active:bg-white active:text-black" target={"_blank"}>Preview</a>
        <a href="https://github.com/Wilouricard/fyloLandingPage" className="bg-black uppercase py-2 w-1/2 underline hover:bg-opacity-90 active:bg-white active:text-black" target={"_blank"}>
          View code
        </a>
      </div>
    </div>
  );
}
