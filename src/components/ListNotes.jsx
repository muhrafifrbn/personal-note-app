/* eslint-disable react/prop-types */
import Note from "./Note";
import { useState } from "react";

export default function ListNotes({ note, changeArchiveNote, deleteData }) {
  const [status, setStatus] = useState(1);
  const notesUnArchive = () => {
    return note.filter((e) => e.archived == false);
  };

  const handleTab1 = () => {
    setStatus(1);
  };

  const handleTab2 = () => {
    setStatus(2);
  };

  const noteArchivd = () => {
    return note.filter((e) => e.archived == true);
  };

  const unArchive = notesUnArchive();
  const archive = noteArchivd();

  const handleArchive = (note) => {
    note.archived = !note.archived;
    changeArchiveNote(note);
  };

  return (
    <div className=" card rounded-tr-[100px] rounded-bl-[100px] lg:mt-5 mt-10 overflow-auto lg:h-[500px]">
      <div className="pt-5 *:px-5 lg:*:px-10 *:py-1   gap-3 *:rounded-lg   flex justify-center text-white">
        <button className={`${status == 1 ? "bg-orange-500" : "bg-sky-950 hover:bg-orange-500"}`} onClick={handleTab1}>
          Notes
        </button>
        <button className={`${status == 2 ? "bg-orange-500" : "bg-sky-950 hover:bg-orange-500"}`} onClick={handleTab2}>
          Archive
        </button>
      </div>
      <div className="text-white flex py-2 pt-5   flex-wrap  lg:gap-5 gap-2 justify-center items-center">
        {status == 1
          ? unArchive.map((e, i) => <Note handleDeleteData={deleteData} handleArchive={handleArchive} status={status} note={e} key={i} />)
          : archive.map((e, i) => <Note handleDeleteData={deleteData} handleArchive={handleArchive} status={status} note={e} key={i} />)}
      </div>
    </div>
  );
}
