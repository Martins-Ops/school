// ContactUs.js

import React from "react";
import img2 from "../assets/images/img6.jpg";

const ContactUs = () => {
  return (
    <div className="min-h-screen pt-40 py-32 flex bg-gray-100">
      <div className="w-0 md:w-1/2 bg-black bg-opacity-60">
        <img src={img2} alt={img2} className="h-full brightness-50 object-cover" />
      </div>

      <div className="w-full md:w-1/2">
        <div className="w-full bg-white rounded-lg shadow-md p-6 h-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-6">
            If you have any questions or inquiries, feel free to reach out to us
            using the contact form below.
          </p>

          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                id="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                id="message"
                rows={4}
                placeholder="Your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
