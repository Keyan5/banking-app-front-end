import { useState } from 'react';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // e.preventDefault();
    //to be updated soon
  };

  return (
    <div className='flex justify-center items-center h-[94vh] w-full'>
      <div className="container mx-auto px-4 py-8 mt-10 dark:text-white w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-8">
            Have a question or feedback? Fill out the form below and we'll get back to you as soon as we can.
        </p>

        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name">
                Name
            </label>
            <input
                type="text"
                className="w-full border border-gray-300 rounded py-2 px-3 bg-transparent"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </div>

            <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input
                type="email"
                className="w-full border border-gray-300 rounded py-2 px-3 bg-transparent"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>

            <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="message">
                Message
            </label>
            <textarea
                className="w-full border border-gray-300 rounded py-2 px-3 bg-transparent"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            </div>

            <div className="text-center">
            <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
