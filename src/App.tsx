import React from 'react';
import { Moon, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WallOfFame from './components/WallOfFame';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <WallOfFame />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;