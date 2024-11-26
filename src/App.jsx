import Header from "./components/Header";
import NoteApp from "./components/NoteApp";
import video from "./assets/video.mp4";

export default function App() {
  return (
    <>
      <Header />
      <NoteApp />

      <video autoPlay muted loop id="background-video" className="hidden lg:block -z-10 left-0 bottom-0 fixed">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
