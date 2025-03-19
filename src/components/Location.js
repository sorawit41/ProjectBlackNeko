// src/components/Location.js
import React from 'react';

const Location = () => {
  return (
    <section className="bg-pink-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">ที่ตั้ง</h2>
        <p className="text-lg text-gray-600 mb-4">
          [ที่อยู่ร้าน]
        </p>
        {/* เพิ่มแผนที่ Google Maps หรือรูปภาพแผนที่ */}
      </div>
    </section>
  );
};

export default Location;