import InputNotes from "./InputNotes";

import DataNote from "./DataNote";

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
      <InputNotes handleAddNote={AddData} />
      <DataNote notes={notes} changeArchiveNote={changeArchiveNote} />
    </section>
  );
}
