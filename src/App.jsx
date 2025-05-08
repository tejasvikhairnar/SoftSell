import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/whyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-600 text-white p-4">
      <div className="text-2xl font-bold">SoftSell</div>
      <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">Contact Us</button>
    </nav>
  );
};


function App() {
  

  return (
    <div>
      <Navbar/>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  )
}

export default App
