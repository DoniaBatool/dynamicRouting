import Link from "next/link";


const HomePage = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/vid1.mp4" // replace with the correct video path
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay to make text more visible */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl text-center md:text-6xl lg:text-7xl text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-purple-400">
          <Link href={"/Country"}>Welcome to the Dynamic World</Link>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;

