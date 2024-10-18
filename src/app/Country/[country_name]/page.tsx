import Link from "next/link";
import Image from "next/image";
import PakistanDescription, { PakistanGallery } from "../../../../components/pak";
import PalestineDescription, { PalestineGallery } from "../../../../components/palestine";
import IranDescription, { IranGallery } from "../../../../components/iran";
import YemenDescription, { YemenGallery } from "../../../../components/yemen";
import LebanonDescription, { LebanonGallery } from "../../../../components/lebanon";
import { Country_Name } from "../../../../components/types";


const CountryName: Country_Name[] = [
  {
    CountryName: "Pakistan",
    Capital: "Islamabad",
    Population: "240 million approx",
    flag: "/pakistan/download.png",
    description: <PakistanDescription />,
    Link: "https://en.wikipedia.org/wiki/Flag_of_Pakistan",
    image: "/pakistan/pak4.jpg",
    Gallery: <PakistanGallery />,
  },
  {
    CountryName: "Palestine",
    Capital: "East Jerusalem",
    Population: "5.5 million approx",
    flag: "/palestine/palestineFlag.jpg",
    description: <PalestineDescription />,
    Link: "https://en.wikipedia.org/wiki/State_of_Palestine",
    image: "/palestine/palestineMap.png",
    Gallery: <PalestineGallery />,
  },
  {
    CountryName: "Iran",
    Capital: "Tehran",
    Population: "89 million approx",
    flag: "/iran/iranFlag.png",
    description: <IranDescription />,
    Link: "https://en.wikipedia.org/wiki/Iran",
    image: "/iran/iranMap.jpg",
    Gallery: <IranGallery />,
  },
  {
    CountryName: "Lebanon",
    Capital: "Beirut",
    Population: "5.5 million approx",
    flag: "/lebanon/lebanonFlag.png",
    description: <LebanonDescription />,
    Link: "https://en.wikipedia.org/wiki/Lebanon",
    image: "/lebanon/lebanonMap.jpg",
    Gallery: <LebanonGallery />,
  },
  {
    CountryName: "Yemen",
    Capital: "Sana'a",
    Population: "34 million approx",
    flag: "/yemen/yemenFlag.png",
    description: <YemenDescription />,
    Link: "https://en.wikipedia.org/wiki/Yemen",
    image: "/yemen/yemenMap.jpg",
    Gallery: <YemenGallery />,
  },
];

const DynamicRoutes = ({ params }: { params: { country_name: string } }) => {
  const country = CountryName.find(
    (item) => item.CountryName.toLowerCase() === params.country_name.toLowerCase()
   
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-purple-600 to-blue-500 min-h-screen flex flex-col justify-between">
      <div className="bg-white shadow-lg rounded-lg p-6 opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {country ? (
          <main>
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">{country.CountryName}</h1>
            <h2 className="text-xl font-semibold mb-2 text-gray-700 text-center">Capital: {country.Capital}</h2>
            <p className="text-gray-600 mb-2 text-center">Population: {country.Population}</p>

            <div className="flex flex-col items-center mb-4">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Flag:</h3>
              <Image
                src={country.flag}
                alt={`${country.CountryName} flag`}
                width={150}
                height={75}
                className="mb-4 rounded shadow-md transform transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Description:</h3>
              {country.description}
            </div>

            <Link href={country.Link} className="text-blue-600 hover:underline mt-4">
              Learn more on Wikipedia
            </Link>

            <div className="flex flex-col items-center mb-4">
              <h3 className="text-lg font-medium mt-4 mb-2 text-gray-700">Map:</h3>
              <Image
                src={country.image}
                alt={`${country.CountryName} map`}
                height={100}
                width={200}
                className="shadow-lg rounded-lg mb-4"
              />
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Gallery:</h3>
              {country.Gallery}
            </div>
          </main>
        ) : (
          <h1 className="text-red-600 text-xl text-center">Country not found!</h1>
        )
        }
      </div>

      {/* Country Selection Section */}
      <div className="mt-6 bg-white shadow-lg rounded-lg p-4 opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <h1 className="text-2xl font-semibold text-center mb-4">Select a Country:</h1>
        <ul className="mt-4 space-y-2 text-center">
          {CountryName.map((country) => (
            <li key={country.CountryName}>
              <Link href={`/Country/${country.CountryName.toLowerCase()}`} className="text-blue-600 hover:underline">
                {country.CountryName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicRoutes;
