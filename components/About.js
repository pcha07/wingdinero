import AboutBanner from "../images/aboutbanner.jpg";
import Signature from "../images/signature.png";
import OurGoal from "../images/ourgoal.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section className="mt-10 w-full space-y-6">
      <h1 className="font-bold text-center text-4xl block">
        About Wing Dinero
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly p-5">
        <div className="flex flex-col items-center justify-evenly space-x-2 space-y-2">
          <h1 className="font-semibold text-3xl border-b-2 border-blue-700 ">
            Tender Care
          </h1>
          {/* Short paragraph about qualities */}
          <p className="text-sm sm:text-base text-justify sm:text-left max-w-[75%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            reiciendis rem est odit vitae, dignissimos, minus, at ut labore
            voluptatem eveniet et eos asperiores? Ea, amet! Ullam dolorem
            repellendus recusandae.
          </p>

          {/* Signature Image */}
          <div className="w-40">
            <Image src={Signature} className="rounded-md" />
          </div>
          {/* <Image src={}/> */}

          {/* From Who */}
          <p className="text-left">- Jake, Owner</p>
        </div>

        <div className="flex flex-col items-center justify-evenly space-x-2 space-y-2">
          <h1 className="font-semibold text-3xl border-b-2 border-blue-700 ">
            Our Goal
          </h1>
          {/* Short paragraph about qualities */}
          <p className="text-sm sm:text-base text-justify sm:text-left max-w-[75%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            reiciendis rem est odit vitae, dignissimos, minus, at ut labore
            voluptatem eveniet et eos asperiores? Ea, amet! Ullam dolorem
            repellendus recusandae.
          </p>

          {/* Signature Image */}
          <div className="w-72">
            <Image src={OurGoal} className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
