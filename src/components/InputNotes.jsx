/* eslint-disable react/prop-types */
export default function InputNotes({ children }) {
  return (
    <section className=" card mx-auto rounded-3xl lg:mx-0 rounded-tr-[70px] rounded-b-[120px] lg:rounded-br-none lg:w-[30%] w-[90%] px-5 h-96  lg:h-[400px]  rounded-bl-[120px] lg:rounded-tr-[120px]">
      <form action="" className="">
        <div className="flex justify-center">
          <h3 className=" ont-serif px-10 text-md font-semibold text-center -translate-y-4 bg-sky-950 text-white rounded-full">Add Notes</h3>
        </div>
        <div className="px-2 mb-5">
          <label htmlFor="title" className="bg-orange-500 w-20 text-center mb-1 rounded-tr-3xl rounded-bl-3xl text-sky- block pb-1 text-base font-mono ">
            Title
          </label>
          <input type="text" name="" id="title" className=" w-full p-1 px-2 focus:outline-none focus:ring-sky-500 focus:ring-1 rounded-md  bg-slate-100" />
        </div>
        <div className="px-2 mb-2">
          <label htmlFor="title" className="bg-orange-500 w-20 text-center mb-1 rounded-tr-3xl rounded-bl-3xl text-sky- block pb-1 text-base font-mono ">
            Notes
          </label>
          <textarea style={{ resize: "none" }} type="text" name="" id="title" className="w-full p-1 px-2 focus:outline-none focus:ring-sky-500 focus:ring-1 rounded-md lg:h-[150px] h-36  bg-slate-100" />
        </div>
        <div className="px-2 mb-2 flex justify-center items-center gap-2">
          {/* <button className="card px-2 py-1 rounded-full w-[150px]  text-black hover:text-white transition duration-500 text-lg text-center bg-red-500 hover:bg-sky-950">Reset</button>
          <button className="card px-2 py-1 rounded-full w-[150px]  text-black hover:text-white transition duration-500 text-lg text-center bg-lime-500 hover:bg-sky-950">Add</button> */}
          {children}
        </div>
      </form>
    </section>
  );
}
