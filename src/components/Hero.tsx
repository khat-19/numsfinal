const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-800 via-blue-700 to-green-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              National Union of Muslim Students
            </h1>
            <p className="text-xl text-blue-100">
              Uniting Muslim students across the nation, fostering brotherhood, and promoting Islamic values in higher education.
            </p>
            {/* <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors">
                Join Us Today
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div> */}
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
              alt="Muslim students studying"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Mobile Image */}
          <div className="md:hidden">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
              alt="Muslim students studying"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;