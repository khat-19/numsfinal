import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-800 text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/img/logo.jpg" 
              alt="NUMS Logo" 
              className="h-10 w-auto"
              style={{ borderRadius: '50%' }}
            />
            {/* <span className="text-xl font-bold">NUMS</span> */}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-blue-700 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-green-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-green-300 transition-colors">About</a>
            <a href="#wall-of-fame" className="hover:text-green-300 transition-colors">Wall of Fame</a>
            <a href="#contact" className="hover:text-green-300 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Dropdown */}
          <div 
            className={`
              absolute top-full left-0 right-0 
              bg-blue-800 shadow-lg 
              md:hidden 
              transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}
          >
            <div className="flex flex-col space-y-2 p-4">
              <a 
                href="#home" 
                className="hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#wall-of-fame" 
                className="hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Wall of Fame
              </a>
              <a 
                href="#contact" 
                className="hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;