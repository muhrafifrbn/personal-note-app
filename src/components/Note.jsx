/* eslint-disable react/prop-types */
export default function Note({ note, status, handleArchive }) {
  // console.log(note);
  return (
    <div className="relative w-[150px] lg:w-[220px]  ">
      <button className="hover:scale-125 absolute bg-red-500 -top-2   -left-1  rounded-full flex justify-center items-center">
        <ion-icon size="small" name="close-outline"></ion-icon>
      </button>
      <div className="overflow-hidden pt-4 rounded-tr-[50px] rounded-bl-[50px] card bg-sky-950 hover:bg-white hover:text-black">
        <h1 className="text-lg px-3">{note.title}</h1>
        <p className="h-[170px] text-sm py-2 px-4 overflow-auto ">{note.body}</p>
        <div className="pt-2 flex justify-end">{status == 1 ? <Button handleArchive={handleArchive} note={note} teks="Archive" /> : <Button teks="UnArchive" handleArchive={handleArchive} note={note} />}</div>
      </div>
    </div>
  );
}

function Button({ teks, handleArchive, note }) {
  return (
    <button onClick={() => handleArchive(note)} className="flex justify-center items-center hover:bg-red-600 hover:text-white w-full  card px-2 py-1 bg-orange-500">
      {teks}
    </button>
  );
}
