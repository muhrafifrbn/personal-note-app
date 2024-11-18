import InputNotes from "./InputNotes";
import Button from "./Button";
import DataNote from "./DataNote";
import SearchNote from "./SearchNote";
import ListNotes from "./ListNotes";

import { useState, useEffect } from "react";
import { getInitialData, showFormattedDate } from "../utils/index";

export default function NoteApp() {
  const [notes, setNotes] = useState([]);

  const AddData = (titleNote, bodyNote) => {
    const title = titleNote;
    const body = bodyNote;
    const id = +new Date();
    const archived = false;
    const createdAt = showFormattedDate(new Date());
    const note = { id, title, body, archived, createdAt };
    setNotes((value) => [...value, note]);
  };

  const changeArchiveNote = (note) => {
    const data = notes.filter((e) => e.title.toLocaleLowerCase() !== note.title.toLocaleLowerCase());
    setNotes(() => [...data, note]);
  };

  useEffect(() => {
    setNotes(getInitialData);
  }, []);

  return (
    <section className="lg:px-10 px-2 pt-14 justify-between lg:flex lg:h-[650px]">
      <InputNotes handleAddNote={AddData}>
        <Button teks="Reset" className="card px-2 lg:w-[125px] py-1 rounded-full w-[115px]  text-black hover:text-white transition duration-500 text-lg text-center bg-red-500 hover:bg-sky-950" />
        <Button teks="Add" className="card px-2 lg:w-[125px] py-1 rounded-full w-[115px]  text-black hover:text-white transition duration-500 text-lg text-center bg-lime-500 hover:bg-sky-950" />
      </InputNotes>
      <DataNote>
        <SearchNote />
        <ListNotes changeArchiveNote={changeArchiveNote} note={notes} />
      </DataNote>
    </section>
  );
}
