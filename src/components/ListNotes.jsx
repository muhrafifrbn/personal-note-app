export default function ListNotes() {
  return (
    <div className="border lg:mt-5 mt-10 border-red-500 h-full">
      <div className="pt-5 *:px-5 lg:*:px-10 *:py-1  *:rounded-full gap-3  border border-red-500 flex justify-center text-white">
        <button className="bg-orange-500 hover:bg-transparent">Notes</button>
        <button className="bg-sky-950 hover:bg-transparent">Archive</button>
      </div>
      <div className="text-white flex *:w-[200px] flex-wrap gap-2 justify-center items-center">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, corporis.</div>
      </div>
    </div>
  );
}
