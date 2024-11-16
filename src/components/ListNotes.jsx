import Note from "./Note";

export default function ListNotes() {
  return (
    <div className=" card rounded-tr-[100px] rounded-bl-[100px] lg:mt-5 mt-10 overflow-auto lg:h-[500px]">
      <div className="pt-5 *:px-5 lg:*:px-10 *:py-1   gap-3 *:rounded-lg   flex justify-center text-white">
        <button className="bg-orange-500 hover:bg-transparent">Notes</button>
        <button className="bg-orange-500 hover:bg-transparent">Archive</button>
      </div>
      <div className="text-white flex py-2   flex-wrap  lg:gap-5 gap-2 justify-center items-center">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
}
