const ContactForm = () => {
    return (
      <div className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Name" className="w-full mb-4 p-2 rounded" required />
          <input type="email" placeholder="Email" className="w-full mb-4 p-2 rounded" required />
          <input type="text" placeholder="Company" className="w-full mb-4 p-2 rounded" required />
          <select className="w-full mb-4 p-2 rounded">
            <option>License Type</option>
            <option>Productivity</option>
            <option>Design</option>
            <option>Development</option>
          </select>
          <textarea placeholder="Message" className="w-full mb-4 p-2 rounded" required />
          <button className="bg-green-500 px-6 py-2 rounded hover:bg-green-600">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  