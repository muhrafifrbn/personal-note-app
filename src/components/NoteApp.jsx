import InputNotes from "./InputNotes";
import Button from "./Button";

export default function NoteApp() {
  return (
    <section className="px-10 pt-14">
      <InputNotes>
        <Button teks="Reset" className="card px-2 py-1 rounded-full w-[150px]  text-black hover:text-white transition duration-500 text-lg text-center bg-red-500 hover:bg-sky-950" />
        <Button teks="Add" className="card px-2 py-1 rounded-full w-[150px]  text-black hover:text-white transition duration-500 text-lg text-center bg-lime-500 hover:bg-sky-950" />
      </InputNotes>
    </section>
  );
}
