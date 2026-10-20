import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="font-sans text-slate-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Appointment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}

export default App;
