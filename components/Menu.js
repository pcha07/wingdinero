import Image from "next/image";
import Wings from "../images/wings.jpg";
import Drinks from "../images/drinks.jpg";
import Burgers from "../images/burgers.jpg";
import Pastas from "../images/pastas.jpg";
import { useState } from "react";

const Menu = () => {
    const [selected, setSelected] = useState("wings")
  return (
    <section className="max-w-[800px] mx-auto h-full space-y-6 my-5 p-4 ">
        <h1 className="text-center font-bold text-5xl">Menu</h1>
        <p className="text-center text-lg font-semibold">Our menu is filled with mouth watering food that will keep you coming back.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-6">
        <div className="shadow-xl bg-gray-200 rounded-md p-3 flex flex-col items-center justify-center space-y-4 hover:scale-105 transition ease-in-out cursor-pointer">
          {/* Image */}
          <div className="w-full h-full">
            <Image src={Wings} className="rounded-md object-cover" />
          </div>
          <h1 className="font-semibold">Wings</h1>
          {/* Category */}
        </div>
        <div className="shadow-xl bg-gray-200 rounded-md p-3 flex flex-col items-center justify-center space-y-4 hover:scale-105 transition ease-in-out cursor-pointer">
          {/* Image */}
          <div className="w-[80%]">
            <Image src={Burgers} className="rounded-md object-contain" />
          </div>
          <h1 className="font-semibold">Burgers</h1>
          {/* Category */}
        </div>
        <div className="shadow-xl bg-gray-200 rounded-md p-3 flex flex-col items-center justify-center space-y-4 hover:scale-105 transition ease-in-out cursor-pointer">
          {/* Image */}
          <div className="w-full h-full">
            <Image src={Drinks} className="rounded-md object-cover" />
          </div>
          <h1 className="">Drinks</h1>
          {/* Category */}
        </div>
        <div className="shadow-xl bg-gray-200 rounded-md p-3 flex flex-col items-center justify-center space-y-4 hover:scale-105 transition ease-in-out cursor-pointer">
          {/* Image */}
          <div className="w-full h-full">
            <Image src={Pastas} className="rounded-md object-cover" />
          </div>
          <h1 className="font-semibold">Drinks</h1>
          {/* Category */}
        </div>
      </div>

      {/* Grid container for menu items */}
    </section>
  );
};

export default Menu;
