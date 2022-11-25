import React from "react";

export default function Navbar(){
    return(
        <nav className="py-4 flex justify-around text-white font-extralight bg-gray-800 sticky top-0 lg:justify-center lg:gap-8">
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
        </nav>
    )
}