import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-800">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-emerald-700">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="text-emerald-600 h-5 w-5" />
                <span className="text-gray-600">(+232) 75529645</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-emerald-600 h-5 w-5" />
                <span className="text-gray-600">nationalunionofmuslimstudent@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-emerald-600 h-5 w-5" />
                <span className="text-gray-600">123 University Ave, City, State 12345</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                  rows={4}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-emerald-800 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;