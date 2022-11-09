import React from "react";

export default function Hero(){
    return(
        <div className="flex flex-col gap-4 bg-gray-200 pb-10">
            <h1 className="uppercase text-center text-8xl">bonjour</h1>
            <p className="text-center">je suis <span className="font-bold">wilou</span></p>
            <p className=" text-justify px-10 pt-4 line-through decoration-red-600">the pharmaceutical research & quality engineer</p>
            <p className=" text-justify px-10 pt-4">the front-end web developer building the front-end of websites & web applications using <span className="font-bold">HTML</span>, <span className="font-bold">tailwind_CSS</span> & <span className="font-bold">react_js</span></p>
        </div>
    )
}