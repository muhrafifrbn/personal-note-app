import InputNotes from "./InputNotes";

import DataNote from "./DataNote";

import { useState, useEffect } from "react";
import { getInitialData } from "../utils/index";

export default function NoteApp() {
  const [notes, setNotes] = useState([]);

  const AddData = (titleNote, bodyNote) => {
    const note = {
      id: +new Date(),
      title: titleNote,
      body: bodyNote,
      archived: false,
      createdAt: new Date().toDateString(),
    };
    setNotes((value) => [...value, note]);
  };

  const deleteData = (note) => {
    const data = notes.filter((el) => el.title != note.title);
    setNotes([...data]);
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
      <DataNote deleteData={deleteData} notes={notes} changeArchiveNote={changeArchiveNote} />
    </section>
  );
}
