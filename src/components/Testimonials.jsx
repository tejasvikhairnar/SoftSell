const reviews = [
    { name: "Jane Doe", role: "IT Manager", company: "TechCorp", text: "SoftSell made selling unused licenses a breeze!" },
    { name: "John Smith", role: "Freelancer", company: "DevPro", text: "I appreciate the transparency and speed of the process." },
  ];
  
  const Testimonials = () => {
    return (
      <div className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-600">Customer Testimonials</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg text-gray-600">
              <p className="italic">"{review.text}"</p>
              <h4 className="mt-4 font-bold">{review.name}</h4>
              <p className="text-gray-600">{review.role}, {review.company}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  