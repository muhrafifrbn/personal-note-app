/* eslint-disable react/prop-types */
import SearchNote from "./SearchNote";
import ListNotes from "./ListNotes";
import { useState, useEffect } from "react";

export default function DataNote({ changeArchiveNote, notes, deleteData, dataRef }) {
  const [data, setData] = useState([]);
  const searchNote = (title) => {
    const result = notes.filter((e) => e.title.includes(title));
    setData(result);
  };

  useEffect(() => {
    setData(notes);
  }, [notes]);

  return (
    <section className=" lg:w-[60%] w-full   h-full">
      <SearchNote handleSearch={searchNote} />
      <ListNotes dataRef={dataRef} deleteData={deleteData} changeArchiveNote={changeArchiveNote} note={data} />
    </section>
  );
}
