const Footer = () => {
  return (
    <section className="mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10 mt-10 pb-10 bg-black text-white">
      <div className="flex flex-col items-center space-y-3 shadow-2xl rounded-md p-3">
          <h1 className="font-bold text-lg">Location</h1>
          <p className="text-left font-semibold">1895 Coleman Avenue, Bermuda Dunes, CA</p>
      </div>
      <div className="flex flex-col items-center space-y-3 shadow-2xl rounded-md p-3">
          <h1 className="font-bold text-lg">Phone numbers</h1>
          <p className="text-left font-semibold">Landline: 712 321 4367</p>
          <p className="text-left font-semibold">Fax: 712 325 4899</p>
      </div>
      <div className="flex flex-col items-center space-y-3 shadow-2xl rounded-md p-3">
          <h1 className="font-bold text-lg">Email</h1>
          <p className="text-left font-semibold">wingdinero@gmail.com</p>
      </div>
    </section>
  );
};

export default Footer;
