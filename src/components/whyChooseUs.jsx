const points = [
    { icon: "✔️", title: "Transparent Pricing", description: "No hidden fees." },
    { icon: "⚡", title: "Fast Payments", description: "Receive cash in 24 hours." },
    { icon: "🌍", title: "Global Reach", description: "Licenses worldwide." },
    { icon: "⭐", title: "Trusted by Thousands", description: "Reliable platform." },
  ];
  
  const WhyChooseUs = () => {
    return (
      <div className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-600">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {points.map((point, index) => (
            <div key={index} className="shadow-md p-6 rounded-lg text-left bg-gray-400">
              <div className="text-2xl">{point.icon}</div>
              <h3 className="text-xl font-bold mt-4">{point.title}</h3>
              <p className="mt-2 text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WhyChooseUs;
  