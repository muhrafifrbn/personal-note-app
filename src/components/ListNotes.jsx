/* eslint-disable react/prop-types */
import Note from "./Note";
import { useState } from "react";

export default function ListNotes({ note, changeArchiveNote, deleteData, dataRef }) {
  const [status, setStatus] = useState(1);

  const handleTab1 = () => {
    setStatus(1);
  };

  const handleTab2 = () => {
    setStatus(2);
  };

  const handleArchive = (note) => {
    note.archived = !note.archived;
    changeArchiveNote(note);
  };

  return (
    <div ref={(el) => (dataRef.current.listNotes = el)} className=" card rounded-tr-[100px] rounded-bl-[100px] lg:mt-5 mt-10 overflow-auto lg:h-[500px]">
      <div className="pt-5 *:px-5 lg:*:px-10 *:py-1   gap-3 *:rounded-lg   flex justify-center text-white">
        <button className={`${status == 1 ? "bg-orange-500" : "bg-sky-950 hover:bg-orange-500"}`} onClick={handleTab1}>
          Notes
        </button>
        <button className={`${status == 2 ? "bg-orange-500" : "bg-sky-950 hover:bg-orange-500"}`} onClick={handleTab2}>
          Archive
        </button>
      </div>
      <div className="text-white flex py-2 pt-5   flex-wrap  lg:gap-5 gap-2 justify-center items-center">
        <Notes status={status} deleteData={deleteData} handleArchive={handleArchive} notes={note} />
      </div>
    </div>
  );
}

function NotesNotAvailable() {
  return (
    <>
      <h1 className="bg-yellow-500 px-24 py-3 text-xl text-black rounded-full">Tidak Ada Catatan</h1>
    </>
  );
}

function Notes({ status, deleteData, handleArchive, notes }) {
  const notesUnArchive = () => {
    return notes.filter((e) => e.archived == false);
  };

  const noteArchivd = () => {
    return notes.filter((e) => e.archived == true);
  };

  const unArchive = notesUnArchive();
  const archive = noteArchivd();

  return <>{status == 1 ? <NoteUnArchive deleteData={deleteData} handleArchive={handleArchive} unArchive={unArchive} /> : <NoteArchive deleteData={deleteData} handleArchive={handleArchive} archive={archive} />}</>;
}

function NoteArchive({ deleteData, handleArchive, archive, status }) {
  if (archive.length > 0) {
    return archive.map((e, i) => <Note handleDeleteData={deleteData} handleArchive={handleArchive} status={status} note={e} key={i} />);
  } else {
    return <NotesNotAvailable />;
  }
}

function NoteUnArchive({ deleteData, handleArchive, unArchive, status }) {
  if (unArchive.length > 0) {
    return unArchive.map((e, i) => <Note handleDeleteData={deleteData} handleArchive={handleArchive} status={status} note={e} key={i} />);
  } else {
    return <NotesNotAvailable />;
  }
}
