// src/components/Features.js
import React from 'react';

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
              {/* Add your icon here */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
            <p className="text-gray-600">1</p>
          </div>
          {/* Feature 2 */}
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
              {/* Add your icon here */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
            <p className="text-gray-600">2</p>
          </div>
          {/* Feature 3 */}
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
              {/* Add your icon here */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
            <p className="text-gray-600">3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;