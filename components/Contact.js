const Contact = () => {
  return (
    <section className="w-full mt-10">
      <h1 className="text-center text-5xl font-bold">Contact Us</h1>
      <div className="max-w-[75%] mx-auto flex flex-col items-center justify-center space-y-2 mt-3 p-2.5 rounded-md">
          <p className="text-center sm:text-left font-semibold">At Wing Dinero we provide catering and private bookings to go along with our other services. Please contact us today with any questions you have.</p>
          <p className="font-semibold text-xl text-center">Call us at: 604 123 4567</p>
          <input type="text" className="w-full p-2 mt-3" placeholder="Enter your Email Address"/>
          <input type="text" className="w-full p-2 mt-3" placeholder="Enter your name"/>
          <textarea className="w-full p-2" placeholder="Enter your message"></textarea>
          <button className="bg-blue-700 p-2 text-white rounded-md font-semibold hover:scale-105 transition ease-in-out">
              Send Message
          </button>
      </div>
    </section>
  );
};

export default Contact;
