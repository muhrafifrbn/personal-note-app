/* eslint-disable react/prop-types */
export default function Note({ note }) {
  // console.log(note);
  return (
    <div className=" w-[150px] lg:w-[220px] px-2 py-4 rounded-tr-[50px] rounded-bl-[50px] card bg-sky-950 hover:bg-white hover:text-black">
      <h1 className="text-lg">{note.title}</h1>
      <p className="h-[170px] text-sm py-2 px-3 overflow-auto ">{note.body}</p>
    </div>
  );
}
