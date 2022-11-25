import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-100">
      <div className="px-10 py-20 flex flex-col gap-6">
        <div className="flex flex-col gap-8 text-center">
          <h1 className="uppercase text-center text-6xl font-bold" id="contact">contact</h1>
          <p className="leading-8 tracking-tighter lg:w-1/4 lg:mr-auto lg:ml-auto">
            I would love to hear about your project and how I could help. Please
            fill the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form name="contact" method="POST" data-netlify="true" onSubmit="submit" action="" className="flex flex-col gap-8 lg:w-1/4 lg:mr-auto lg:ml-auto">
          <input
            type="text"
            placeholder="NAME"
            className="bg-gray-100 border-b border-black w-full py-3 px-4"
            name="name"
          />
          <input
            type="email"
            required
            placeholder="EMAIL"
            className="bg-gray-100 border-b border-black w-full py-3 px-4"
            name="email"
          />
          <textarea
            name="textarea"
            id=""
            cols="30"
            rows="5"
            placeholder="MESSAGE"
            required
            className="bg-gray-100 border-b border-black w-full py-3 px-4"
          ></textarea>
          <button
            type="submit"
            className="uppercase pt-3 border-b-4 border-black pb-1 w-[130px] mr-auto ml-auto hover:bg-gray-300 rounded-t-lg active:bg-black active:text-white active:shadow-md"
          >
            send message
          </button>
        </form>
      </div>
      <hr className="border-black mx-0 px-0 w-full" />
      <div className="bg-gray-300 py-10 flex justify-around">
        <h1>nam tang</h1>
        <div className="flex gap-8">
          <div className="w-[20px]">
            <a href="https://github.com/Wilouricard" target={"_blank"}>
              <img src="\images\github.svg" alt="" />
            </a>
          </div>
          <div className="w-[20px]">
            <a href="https://www.linkedin.com/in/nanam/" target={"_blank"}>
              <img src="\images\linkedin.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
