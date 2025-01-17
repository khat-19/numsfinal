import { Facebook, Twitter, Instagram, Youtube, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <div className="space-y-4">
            {/* <div className="flex items-center space-x-2">
              <Moon className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold">IUSU</span>
            </div> */}
            {/* <p className="text-emerald-100 leading-relaxed">
              Uniting students, fostering brotherhood, and promoting Islamic values in higher education.
            </p> */}
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-300">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-emerald-100 hover:text-emerald-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-emerald-100 hover:text-emerald-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#wall-of-fame" className="text-emerald-100 hover:text-emerald-400 transition-colors">Wall of Fame</a>
              </li>
              <li>
                <a href="#contact" className="text-emerald-100 hover:text-emerald-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-300">Contact Info</h3>
            <ul className="space-y-3 text-emerald-100">
              <li>123 University</li>
              <li>City, State 12345</li>
              <li>Phone: (+232) 75529645</li>
              <li>Email: nationalunionofmuslimstudent@gmail.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-300">Newsletter</h3>
            <p className="text-emerald-100 mb-4">Stay updated with our latest news and events</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-emerald-800/50 border border-emerald-700 text-white placeholder-emerald-400 focus:outline-none focus:border-emerald-500"
              />
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-emerald-100">
            <p>&copy; {new Date().getFullYear()} National Union of Muslim Student. All rights reserved.</p>
            <p className="flex items-center mt-2 md:mt-0">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> by Universal Tech Hub
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;