const steps = [
    { icon: "📤", title: "Upload License", description: "Share your software details." },
    { icon: "💰", title: "Get Valuation", description: "Receive a price estimate." },
    { icon: "🏦", title: "Get Paid", description: "Secure your payment quickly." },
  ];
  
  const HowItWorks = () => {
    return (
      <div className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-600">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <div className="text-4xl">{step.icon}</div>
              <h3 className="text-xl font-bold mt-4">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HowItWorks;
  