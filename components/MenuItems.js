import Image from "next/image";

const MenuItems = ({ title, price, img }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center shadow-md p-3 mt-3">
      <h1 className="font-semibold text-lg">{title}</h1>
      <div className="w-[70%]">
        <Image src={img} className="rounded-md object-cover" />
      </div>
      <h1 className="font-semibold text-lg">${price}</h1>
    </div>
  );
};

export default MenuItems;
