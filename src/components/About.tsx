import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-800">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
              alt="Students studying"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              The Islamic University Student Union serves as a bridge between academic excellence and Islamic values. 
              We strive to create an inclusive environment where Muslim students can thrive both academically and spiritually.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Our Vision</h3>
            <p className="text-gray-600">
              We envision a campus community where Islamic principles guide personal growth, academic achievement, 
              and social development, fostering future leaders who embody both knowledge and faith.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;