/* eslint-disable react/prop-types */

import { useState } from "react";
import Button from "./Button";

export default function InputNotes({ handleAddNote, dataRef }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    handleAddNote(title, body);
    setTitle("");
    setBody("");
  };

  const handleReset = () => {
    setTitle("");
    setBody("");
  };

  return (
    <section className=" card mx-auto rounded-3xl lg:mx-0 rounded-tr-[70px] rounded-b-[120px] lg:rounded-br-none lg:w-[30%] w-[90%] px-5 h-96  lg:h-[400px]  rounded-bl-[120px] lg:rounded-tr-[120px]">
      <form ref={(el) => (dataRef.current.form = el)} action="" className="" onSubmit={handleClick}>
        <div className="flex justify-center">
          <h3 className=" font-serif px-10 text-md font-semibold text-center -translate-y-4 bg-sky-950 text-white rounded-full">Add Notes</h3>
        </div>
        <div className="px-2 mb-5 ">
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
            className=" w-full peer p-1 px-2 focus:outline-none focus:ring-sky-500 focus:ring-1 rounded-md focus:bg-slate-100 focus:text-black text-white card bg-transparent"
          />
          <div className="flex px-1 justify-center text-white h-0 peer-focus:animate-show overflow-hidden">
            <p className="w-[250px] text-center rounded-br-full rounded-bl-full bg-red-500 px-3 ">Tersisa {50 - title.length >= 0 ? 50 - title.length : 0} Karakter</p>
          </div>
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
        <div className="px-2 mb-2 flex justify-center items-center gap-2">
          {title.length <= 50 ? (
            <>
              <Button handleClick={handleReset} type="reset" teks="Reset" className="card px-2 lg:w-[125px] py-1 rounded-full w-[100px]  text-black hover:text-white transition duration-500 text-lg text-center bg-red-500 hover:bg-sky-950" />
              <Button type="submit" teks="Add" className="card px-2 lg:w-[125px] py-1 rounded-full w-[100px]  text-black hover:text-white transition duration-500 text-lg text-center bg-lime-500 hover:bg-sky-950" />
            </>
          ) : (
            <p className="card flex items-center justify-center px-2 lg:w-[200px] py-1 rounded-full w-[170px]  text-black hover:text-white transition duration-500 text-lg text-center bg-red-500">
              <ion-icon name="warning-outline"></ion-icon> Title Diluar batas
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
