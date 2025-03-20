import React, { useState, useEffect } from 'react';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/blackneko.jpg',
    '/image.png', // แทนที่ด้วย path ของรูปภาพที่สอง
    '/image2.png',
    // เพิ่ม path ของรูปภาพอื่นๆ ที่ต้องการ
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // เปลี่ยนรูปทุก 5 วินาที (ปรับเปลี่ยนได้)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="text-white"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        transition: 'background-image 1s ease-in-out', // เพิ่ม transition
      }}
    ></section>
  );
}

export default Hero;