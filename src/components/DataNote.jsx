import SearchNote from "./SearchNote";
import ListNotes from "./ListNotes";

export default function DataNote() {
  return (
    <section className="lg:w-[60%] w-full">
      <SearchNote />
      <ListNotes />
    </section>
  );
}
