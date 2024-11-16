import InputNotes from "./InputNotes";
import Button from "./Button";
import DataNote from "./DataNote";

export default function NoteApp() {
  return (
    <section className="lg:px-10 px-2 pt-14 justify-between lg:flex lg:h-[650px]">
      <InputNotes>
        <Button teks="Reset" className="card px-2 lg:w-[125px] py-1 rounded-full w-[115px]  text-black hover:text-white transition duration-500 text-lg text-center bg-red-500 hover:bg-sky-950" />
        <Button teks="Add" className="card px-2 lg:w-[125px] py-1 rounded-full w-[115px]  text-black hover:text-white transition duration-500 text-lg text-center bg-lime-500 hover:bg-sky-950" />
      </InputNotes>
      <DataNote />
    </section>
  );
}
