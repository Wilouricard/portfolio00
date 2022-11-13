import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 bg-gray-200 p-10">
      <img src="\images\ReadyPlayerMe-Avatar.png" alt="" />
      <div className="flex flex-col gap-4 text-center">
        <h1 className="uppercase text-6xl font-bold">bonjour</h1>
        <p className="">
          I am <span className="font-bold">wilou</span>, 23
        </p>
        <p className="">
          Based in France,{" "}
          <span className="line-through text-gray-700">
            I'm a pharmaceutical research & quality engineer
          </span>{" "}
          front-end developer passionate about building accessible web apps.
        </p>
        <a href="#" className="underline font-bold">
          <p>CONTACT ME</p>
        </a>
        <div className="flex items-end justify-center gap-8 text-xs">
          <div>
            <div className="w-[40px]">
              <img src="\images\html5.svg" alt="" />
            </div>
            <p>HTML5</p>
          </div>
          <div>
            <div className="w-[40px]">
              <img src="\images\css3-alt.svg" alt="" />
            </div>
            <p>CSS3</p>
          </div>
          <div>
            <div className="w-[45px]">
              <img src="\images\square-js.svg" alt="" />
            </div>
            <p>ES6</p>
          </div>
          <div>
            <div className="w-[50px]">
              <img src="\images\react.svg" alt="" />
            </div>
            <p>React</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[50px]">
              <img src="\images\Tailwind_CSS_Logo.svg" alt="" />
            </div>
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}
