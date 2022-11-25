import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 bg-gray-200 px-10 pb-20 lg:flex-row lg:pb-0">
      <div className="lg:w-1/2 lg:min-h-screen lg:justify-center lg:items-center lg:flex">
      <img src="\images\ReadyPlayerMe-Avatar.png" alt="" className="lg:mr-auto lg:ml-auto lg:rounded-full"/>
      </div>
      <div className="flex flex-col gap-8 text-center lg:w-1/2 lg:justify-center lg:text-start lg:px-20">
        <h1 className="uppercase text-6xl font-bold tracking-widest">
          bonjour
        </h1>
        <p className="">
          I am <span className="font-bold tracking-[4px]">Nam</span>, 23
        </p>
        <p className="">
          Based in France, I'm a{" "}
          <span className="line-through text-gray-700">
            pharmaceutical research & quality engineer
          </span>{" "}
          front-end developer passionate about building accessible web apps.
        </p>
        <a href="#contact" className="underline font-bold lg:mr-auto lg:ml-auto">
          <p>CONTACT ME</p>
        </a>
        <div className="flex items-end justify-center gap-8 text-xs lg:text-center">
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
              <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z"
                  fill="black"
                />
                <path
                  d="M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z"
                  fill="black"
                />
              </svg>
            </div>
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}
