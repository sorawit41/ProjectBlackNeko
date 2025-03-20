import React, { useState, useEffect, useRef } from 'react';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImageIndex = useRef(1);
  const images = [
    '/image3.png',
    '/image2.png',
    '/image.png',
    // เพิ่ม path ของรูปภาพอื่นๆ ที่ต้องการ
  ];

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      startTransition((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const startTransition = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    nextImageIndex.current = index;

    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 1000); // ระยะเวลา transition
  };

  const handleImageClick = (index) => {
    if (currentImageIndex !== index) {
      startTransition(index);
    }
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
          transition: 'opacity 1s ease-in-out',
          opacity: isTransitioning && currentImageIndex !== nextImageIndex.current ? 0 : 1,
        }}
      ></div>

      <div
        style={{
          backgroundImage: `url(${images[nextImageIndex.current]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          transition: 'opacity 1s ease-in-out',
          opacity: isTransitioning && currentImageIndex !== nextImageIndex.current ? 1 : 0,
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