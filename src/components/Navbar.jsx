import React from "react";

export default function Navbar(){
    return(
        <div>
        <nav className="py-4 flex justify-around text-white font-extralight bg-gray-800">
            <button>nam°tang</button>
            <button>about</button>
            <button>projects</button>
            <button>contact</button>
        </nav>
        {/* <marquee behavior="scroll" direction="left" scrollamount="30" className="bg-gray-200 text-slate-800 py-3">Integer consectetur dictum tortor quis mollis. Morbi cursus nisi turpis, in posuere turpis dapibus ut. Integer quis pretium nisi, nec sagittis nisi. Praesent tempor posuere ipsum.</marquee> */}
        </div>
    )
}