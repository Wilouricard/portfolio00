import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return(
        <div className="bg-gray-200 pb-20">
            <h1 className="uppercase text-center text-6xl font-bold pb-10">my projects</h1>
            <div className="flex overflow-x-scroll snap-x whitespace-nowrap gap-4 snap-proximity">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            </div>
        </div>
    )
}