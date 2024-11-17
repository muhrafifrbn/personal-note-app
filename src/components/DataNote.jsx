/* eslint-disable react/prop-types */
import SearchNote from "./SearchNote";
import ListNotes from "./ListNotes";

export default function DataNote({ note }) {
  return (
    <section className=" lg:w-[60%] w-full   h-full">
      <SearchNote />
      <ListNotes note={note} />
    </section>
  );
}
