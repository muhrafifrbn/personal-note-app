import InputNotes from "./InputNotes";
import Button from "./Button";
import DataNote from "./DataNote";

import { useState, useEffect } from "react";
import { getInitialData } from "../utils/index";

export default function NoteApp() {
  const [note, setNote] = useState([]);

  useEffect(() => {
    setNote(getInitialData);
  }, []);

  // setTimeout(() => {
  //   console.log(note);
  // }, 1000);

  return (
    <section className="lg:px-10 px-2 pt-14 justify-between lg:flex lg:h-[650px]">
      <InputNotes>
        <Button teks="Reset" className="card px-2 lg:w-[125px] py-1 rounded-full w-[115px]  text-black hover:text-white transition duration-500 text-lg text-center bg-red-500 hover:bg-sky-950" />
        <Button teks="Add" className="card px-2 lg:w-[125px] py-1 rounded-full w-[115px]  text-black hover:text-white transition duration-500 text-lg text-center bg-lime-500 hover:bg-sky-950" />
      </InputNotes>
      <DataNote note={note} />
    </section>
  );
}
