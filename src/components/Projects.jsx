import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="bg-gray-200 flex flex-col gap-10 pb-20" id="projects">
      <h1 className="uppercase text-center text-6xl font-bold">
        my projects
      </h1>
      <div className="flex overflow-x-scroll snap-x whitespace-nowrap gap-4 snap-proximity">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <a href="#contact" className="underline font-bold text-center">
        <p>CONTACT ME</p>
      </a>
    </div>
  );
}
