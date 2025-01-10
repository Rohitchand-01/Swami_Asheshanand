import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-20 text-center text-gray-800">
      <h2 className="mb-6 font-semibold text-4xl">Contact Us</h2>
      <form className="mx-auto max-w-lg">
        <input type="text" placeholder="Your Name" className="border-gray-300 mb-4 p-4 border rounded-lg w-full" />
        <input type="email" placeholder="Your Email" className="border-gray-300 mb-4 p-4 border rounded-lg w-full" />
        <textarea placeholder="Your Message" className="border-gray-300 mb-4 p-4 border rounded-lg w-full"></textarea>
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 px-10 py-4 rounded-full font-semibold text-lg text-white transition duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
