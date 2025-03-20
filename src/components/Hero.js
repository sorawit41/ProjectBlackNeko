import React, { useState, useEffect } from 'react';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/image3.png',
    '/image2.png',
    // เพิ่ม path ของรูปภาพอื่นๆ ที่ต้องการ
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="text-white" style={{ position: 'relative' }}>
      <div
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100vh',
          transition: 'background-image 1s ease-in-out',
        }}
      ></div>

      {/* ปุ่มเปลี่ยนรูปภาพ */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: currentImageIndex === index ? 'white' : 'gray',
              margin: '0 5px',
              border: 'none',
              cursor: 'pointer',
            }}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Hero;