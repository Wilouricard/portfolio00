import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 bg-gray-200 px-10 pb-20 lg:flex-row lg:pb-0">
      <div className="lg:w-1/2 lg:min-h-screen lg:justify-center lg:items-center lg:flex">
      <img src="\images\doggo.jpg" alt="" className="lg:mr-auto lg:ml-auto lg:rounded-full"/>
      </div>
      <div className="flex flex-col gap-8 text-center lg:w-1/2 lg:justify-center lg:text-start lg:px-20">
        <p className="lg:relative">
          <img src="/images/clipart185522.png" alt=""  className="relative top-44 w-1/5 left-36 lg:w-[50px] lg:relative lg:top-40"/>
        <h1 className="uppercase text-6xl font-bold tracking-widest">
          salut
        </h1>
        <p className="">
          I am <span className="font-bold tracking-[4px]">Nam</span>, 23
        </p>
          Based in France, I'm a{" "}
          <span className="line-through text-gray-700">
            pharmaceutical research & quality engineer
          </span>{" "}
          front-end developer passionate about building accessible web apps. Currently learning Java on CodeAcademy.
        </p>
        <p className="pt-10">I am <span className="font-bold tracking-[4px]">Nam</span>, 24. I am a seasoned full-stack developer currently working for a major software firm in France, dedicated to mastering my craft and expanding my knowledge base every day.</p>
        <a href="#contact" className="underline font-bold lg:mr-auto lg:ml-auto">
          <p>CONTACT ME</p>
        </a>
        <div class="flex flex-wrap justify-center items-center gap-8 text-xs lg:text-center">
          <div>
            <div className="w-[40px]">
              <img src="\images\html-1.svg" alt="" />
            </div>
            <p>HTML5</p>
          </div>
          <div>
            <div className="w-[40px]">
              <img src="\images\css-3.svg" alt="" />
            </div>
            <p>CSS3</p>
          </div>
          <div>
            <div className="w-[45px]">
              <img src="\images\javascript-1.svg" alt="" />
            </div>
            <p>ES6</p>
          </div>
          <div>
            <div className="w-[50px]">
              <img src="\images\react-2.svg" alt="" />
            </div>
            <p>React</p>
          </div>
          <div className="flex flex-col items-center">
          <div className="w-[50px]">
              <img src="\images\tailwind_CSS_Logo.svg" alt="" />
            </div>
            <p>Tailwind</p>
          </div>
          <div>
            <div className="w-[50px]">
              <img src="\images\java.svg" alt="" />
            </div>
            <p>Java</p>
          </div>
          <div>
            <div className="w-[50px]">
              <img src="\images\springio-icon.svg" alt="" />
            </div>
            <p>Spring</p>
          </div>
          <div>
            <div className="w-[50px]">
              <img src="\images\angular-icon.svg" alt="" />
            </div>
            <p>Angular</p>
          </div>
          <div>
            <div className="w-[50px]">
              <img src="\images\bootstrap-5-1.svg" alt="" />
            </div>
            <p>Bootstrap</p>
          </div>
          <div>
            <div className="w-[50px]">
              <img src="\images\mysql-icon.svg" alt="" />
            </div>
            <p>mySQL</p>
          </div>
          <div>
            <div className="w-[50px]">
              <img src="\images\typescript.svg" alt="" />
            </div>
            <p>TS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
