import Image from "next/image";
import HeroImg from "../images/heroimg.jpg";
import Dining from "../images/diningpic.jpg";

const Hero = () => {
  return (
    <section className="w-full h-full grid grid-cols-1 md:grid-cols-2 relative mt-20 ">
      <div className="w-full h-full relative">
        <Image
          src={HeroImg}
          className="object-contain w-full h-full relative"
        />
        <h1 className="absolute top-10 left-2 text-bold text-4xl sm:text-5xl md:text-6xl text-white">
          Welcome To Wing Dinero
        </h1>
        {/* Link to online ordering system */}
        <button className="absolute bottom-10 left-3 bg-blue-700 p-3.5 text-white font-semibold rounded-md hover:scale-105 transition ease-in-out">
          Order Online
        </button>
      </div>
      <div className="relative h-full w-full">
        <Image src={Dining} className="object-contain w-full h-full relative" />
        <h1 className="absolute top-10 left-2 text-bold text-4xl sm:text-5xl md:text-6xl text-white">
          Enjoy Fun Dining
        </h1>
        {/* Link to online ordering system */}
        <button className="absolute bottom-10 left-3 bg-blue-700 p-3.5 text-white font-semibold rounded-md hover:scale-105 transition ease-in-out">
          Reserve Table
        </button>
      </div>
    </section>
  );
};

export default Hero;
