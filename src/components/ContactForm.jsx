import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col gap-[100px] px-[300px] max-md:px-[150px] py-[80px] max-md:px-[20px] max-md:py-[40px]">
      <p className="text-[#0f172a] text-[46px] text-center max-md:text-[30px]">
        Bizimlə Əlaqəyə keç
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start p-[20px]">
        <div className="w-full md:w-1/2 pr-8 max-md:pr-0">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b-2 border-yellow-400 focus:outline-none focus:border-yellow-600 p-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-b-2 border-yellow-400 focus:outline-none focus:border-yellow-600 p-1"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                className="w-full border-b-2 border-yellow-400 focus:outline-none focus:border-yellow-600 p-1"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full border-b-2 border-yellow-400 focus:outline-none focus:border-yellow-600 p-1 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600 transition"
            >
              SEND
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <iframe
            title="Nur Plaza"
            className="w-full h-96 rounded max-md:h-56"
            src="https://www.google.com/maps/embed?pb=..."
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
