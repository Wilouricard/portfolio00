import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="min-w-[300px] h-[400px] bg-pink-300 md:min-w-[500px] mx-4">
      <div className="border-4 border-black w-full h-[250px]">
        <img src={props.img} alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="w-full h-[150px] bg-slate-300 items-center justify-center flex flex-col gap-4">
        <h1 className="uppercase font-bold">{props.title}</h1>
        <p className="text-sm">{props.tech}</p>
        <div className="flex text-white justify-around gap-4 text-center w-full">
            <a
              href={props.preview}
              className="bg-black uppercase py-2 w-1/2 underline hover:bg-opacity-90 active:bg-white active:text-black"
              target={"_blank"}
            >
              Preview
            </a>
            <a
              href={props.repo}
              className="bg-black uppercase py-2 w-1/2 underline hover:bg-opacity-90 active:bg-white active:text-black"
              target={"_blank"}
            >
              View code
            </a>
          </div>
      </div>

      {/* <div className="flex flex-col items-center gap-4">
        <div className="w-full max-h-1/3">
          <img src={props.img} alt="" className="object-cover" />
        </div>
        <div className="bg-slate-300 w-full">
          <h1 className="uppercase font-bold">{props.title}</h1>
          <p className="text-sm">{props.tech}</p>
          <div className="flex text-white justify-around gap-4 text-center">
            <a
              href={props.preview}
              className="bg-black uppercase py-2 w-1/2 underline hover:bg-opacity-90 active:bg-white active:text-black"
              target={"_blank"}
            >
              Preview
            </a>
            <a
              href={props.repo}
              className="bg-black uppercase py-2 w-1/2 underline hover:bg-opacity-90 active:bg-white active:text-black"
              target={"_blank"}
            >
              View code
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}
