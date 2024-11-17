/* eslint-disable react/prop-types */

import { useState } from "react";
export default function InputNotes({ children, handleAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    handleAddNote(title, body);
    setTitle("");
    setBody("");
  };
  return (
    <section className=" card mx-auto rounded-3xl lg:mx-0 rounded-tr-[70px] rounded-b-[120px] lg:rounded-br-none lg:w-[30%] w-[90%] px-5 h-96  lg:h-[400px]  rounded-bl-[120px] lg:rounded-tr-[120px]">
      <form action="" className="" onSubmit={handleClick}>
        <div className="flex justify-center">
          <h3 className=" font-serif px-10 text-md font-semibold text-center -translate-y-4 bg-sky-950 text-white rounded-full">Add Notes</h3>
        </div>
        <div className="px-2 mb-5">
          <label htmlFor="title" className="bg-orange-500 w-20 text-center mb-2 rounded-tr-3xl rounded-bl-3xl text-sky- block pb-1 text-base font-mono ">
            Title
          </label>
          <input
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Your Title"
            type="text"
            name=""
            id="title"
            className=" w-full p-1 px-2 focus:outline-none focus:ring-sky-500 focus:ring-1 rounded-md focus:bg-slate-100 focus:text-black text-white card bg-transparent"
          />
        </div>
        <div className="px-2 mb-2">
          <label htmlFor="title" className="bg-orange-500 w-20 text-center mb-2 rounded-tr-3xl rounded-bl-3xl text-sky- block pb-1 text-base font-mono ">
            Notes
          </label>
          <textarea
            value={body}
            required
            onChange={(e) => setBody(e.target.value)}
            placeholder="your notes..."
            style={{ resize: "none" }}
            type="text"
            name=""
            id="title"
            className="focus:bg-slate-100 focus:text-black bg-transparent card text-2xl text-white w-full p-1 px-2 focus:outline-none focus:ring-sky-500 focus:ring-1 rounded-md lg:h-[150px] h-36  bg-slate-100"
          />
        </div>
        <div className="px-2 mb-2 flex justify-center items-center gap-2">{children}</div>
      </form>
    </section>
  );
}
