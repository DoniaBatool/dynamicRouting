import Link from "next/link";

const Country = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/vid2.mp4" // replace with the correct video path
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay to enhance text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 animate__animated animate__fadeIn">
          Select the Country you want to Explore:
        </h1>
        <ul className="space-y-4">
          <Link href={"/Country/pakistan"}>
            <li className="text-xl md:text-2xl font-semibold hover:text-blue-500 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn">
              Pakistan
            </li>
          </Link>
          <Link href={"/Country/palestine"}>
            <li className="text-xl md:text-2xl font-semibold hover:text-blue-500 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn">
              Palestine
            </li>
          </Link>
          <Link href={"/Country/iran"}>
            <li className="text-xl md:text-2xl font-semibold hover:text-blue-500 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn">
              Iran
            </li>
          </Link>
          <Link href={"/Country/lebanon"}>
            <li className="text-xl md:text-2xl font-semibold hover:text-blue-500 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn">
              Lebanon
            </li>
          </Link>
          <Link href={"/Country/yemen"}>
            <li className="text-xl md:text-2xl font-semibold hover:text-blue-500 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn">
              Yemen
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Country;
