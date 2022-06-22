import Logo from "../images/foodlogo.jpeg";
import { AiOutlineMenu, AiFillCloseSquare } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="fixed top-0 w-full h-[80px] flex justify-between items-center p-4 bg-blue-700 text-white z-50 ">
    <div className="cursor-pointer w-16 h-16 ">
      <Image className="rounded-full" src={Logo}/>
    </div>
    {/* Menu */}

    <ul className="hidden md:flex space-x-4 text-lg">
      <li className="cursor-pointer hover:underline">
        Home
      </li>
      <li className="cursor-pointer hover:underline">
        Contact
      </li>
      <li className="cursor-pointer hover:underline">
        Menu
      </li>
      <li className="cursor-pointer hover:underline">
        About
      </li>
      <li className="cursor-pointer hover:underline">
        Cart
      </li>
    </ul>

    {/* hamburger menu */}
    <div onClick={() => setNav(!nav)} className="md:hidden z-10 cursor-pointer">
      {!nav ? (
          <AiOutlineMenu className="w-9 h-9"/>
      ): <AiFillCloseSquare className="w-10 h-10 text-black"/>}
    </div>
    {/* mobile menu */}
    <ul
      className={
        !nav
          ? "hidden"
          : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center text-black -z-10"
      }
    >
      <li className="py-6 text-4xl cursor-pointer">
        Home
      </li>
      <li className="py-6 text-4xl cursor-pointer">
        Contact
      </li>
      <li className="py-6 text-4xl cursor-pointer">
        Menu
      </li>
      <li className="py-6 text-4xl cursor-pointer">
        About
      </li>
      <li className="py-6 text-4xl cursor-pointer">
        Cart
      </li>
    </ul>    
  </header>
)
};

export default Navbar;
