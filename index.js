import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-800">Brano Green Solutions Limited</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#values" className="text-green-700 hover:text-green-900 font-medium transition-colors">Our Values</a>
              <a href="#services" className="text-green-700 hover:text-green-900 font-medium transition-colors">Our Services</a>
              <a href="#about" className="text-green-700 hover:text-green-900 font-medium transition-colors">About Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
            Sustainable Solutions <br />
            <span className="text-emerald-600">Through Innovation</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            We provide sustainable solutions through innovative technologies that benefit both businesses and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
              Explore Our Services
            </a>
            <a href="#values" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Our Core Values
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-900 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-green-900 mb-4 text-center">Innovation</h4>
              <p className="text-gray-700 text-center">Exploring new ideas and technologies to create sustainable solutions for a better future.</p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-green-900 mb-4 text-center">Integrity</h4>
              <p className="text-gray-700 text-center">Business with honesty, transparency, and accountability in all our operations and relationships.</p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-green-900 mb-4 text-center">Sustainability</h4>
              <p className="text-gray-700 text-center">Integrating eco-friendly practices into every aspect of our business to protect our planet.</p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-green-900 mb-4 text-center">Customer Centric</h4>
              <p className="text-gray-700 text-center">Prioritizing the needs and satisfaction of our clients in every solution we deliver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600">Comprehensive solutions for a sustainable future</p>
          </div>
          
          <div className="space-y-12">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-green-900">Information Technology Services</h4>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    As general information technology experts and consultants, we design, install, maintain, and manage IT infrastructure, networks, and systems. 
                    Our comprehensive services extend from network design and administration to data engineering, ensuring seamless technological integration.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-green-900">Agro-allied Products and Services</h4>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our commitment to holistic sustainability extends to the supply and production of agro-allied products and services. 
                    We import, export, and manufacture agro-allied machinery and equipment, contributing to the growth of the agricultural sector.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-green-900">Green Energy Systems</h4>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Committed to sustainable practices, we develop, produce, export, and supply technology solutions for green energy systems. 
                    Our innovations aim to drive the adoption of environmentally friendly energy solutions on a global scale.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-green-900">Retail and Distribution Services</h4>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We operate retail and distribution facilities to provide a wide range of general and consumer goods to individuals, families, schools, NGOs, businesses, and government agencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-green-900 mb-8">About Us</h3>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-white shadow-xl">
            <p className="text-2xl font-light leading-relaxed">
              We provide sustainable solutions through innovative technologies that create lasting value for our clients and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Brano Green Solutions Limited</h3>
          <p className="text-lg mb-8">Creating a sustainable future through innovation and integrity</p>
          <div className="border-t border-green-700 pt-8">
            <p className="text-green-300">&copy; {new Date().getFullYear()} Brano Green Solutions Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
