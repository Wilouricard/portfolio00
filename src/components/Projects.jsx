import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="bg-gray-200 flex flex-col gap-10 pb-20" id="projects">
      <h1 className="uppercase text-center text-6xl font-bold">
        my projects
      </h1>
      <div className="flex overflow-x-scroll snap-x whitespace-nowrap gap-4 snap-proximity">
        <ProjectCard 
        img="\projects-sc\sunnyside.png"
        title="Synnyside Agency landing page" 
        tech="HTML CSS ReactJS TailwindCSS"
        preview=""
        repo="" />
        <ProjectCard 
        img="\projects-sc\baseapparel.png"
        title="Base Apparel Coming Soon page" 
        tech="HTML CSS JS TailwindCSS"
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\faq.png"
        title="FAQ component" 
        tech="HTML CSS JS TailwindCSS"
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\fourcard.png"
        title="Four Cards section" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\fylolandingpage.png"
        title="Fylo landing page" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\huddle1.png"
        title="Huddleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\ping.png"
        title="" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\productcard.png"
        title="" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\projecttracking.png"
        title="" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\signup.png"
        title="" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\singleprice.png"
        title="" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\socialproof.png"
        title="" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\threecolumns.png"
        title="" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\singleprice.png"
        title="" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\singleprice.png"
        title="" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\singleprice.png"
        title="" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\singleprice.png"
        title="" 
        tech=""
        preview=""
        repo="" />
        <ProjectCard img="\projects-sc\singleprice.png"
        title="" 
        tech=""
        preview=""
        repo="" />
      </div>
      <a href="#contact" className="underline font-bold text-center">
        <p>CONTACT ME</p>
      </a>
    </div>
  );
}
