import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">ഞങ്ങളെ ബന്ധപ്പെടുക</h1>
      
      <p className="text-lg text-center max-w-2xl mb-4">
      നിങ്ങളിൽ നിന്ന് കേൾക്കാൻ ഞങ്ങൾ ആഗ്രഹിക്കുന്നു! ഇനിപ്പറയുന്ന ഏതെങ്കിലും കോൺടാക്റ്റ് രീതികളിലൂടെ ഞങ്ങളെ ബന്ധപ്പെടുക അല്ലെങ്കിൽ ഞങ്ങൾക്ക് നേരിട്ട് ഒരു സന്ദേശം അയയ്‌ക്കാൻ ചുവടെയുള്ള ഫോം ഉപയോഗിക്കുക.      </p>

      <div className="text-lg text-center mb-8">
        <p><strong>Email:</strong> softroniics@gmail.com</p>
        <p><strong>Phone:</strong> 9656638296</p>
        <p><strong>Address:</strong> Near B.M.H hospital,Calicut,India</p>
      </div>

      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            id="message"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
