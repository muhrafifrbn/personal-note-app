import video from "../assets/video.mp4";

export default function SearchNote() {
  return (
    <div className="card mt-16 lg:mt-0 rounded-full overflow-hidden">
      <div className="flex   lg:*:h-[50px] *:h-[35px]">
        <label htmlFor="title" className="text-xl bg-orange-500 lg:px-5 px-1 text-black w-[100px] flex justify-center items-center">
          Title
        </label>
        <input className="bg-transparent focus:bg-slate-200 focus:text-black text-white w-full text-xl bg-slate-300 outline-none focus:ring-1 px-5 focus:ring-orange-500" type="text" id="title" />
        <button className=" font-semibold w-[100px] hover:bg-lime-500 hover:text-black transition duration-700 bg-sky-950 text-white lg:px-10 px-1 rounded-br-full rounded-tr-full  flex justify-center items-center ">Search</button>
      </div>

      <video autoPlay loop muted className="fixed -z-50 top-0 left-0 right-0">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
