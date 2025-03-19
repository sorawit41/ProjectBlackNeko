import React from 'react';

function Hero() {
  return (
    <section
      className="text-white" // ลบ py-20 หากไม่ต้องการ padding
      style={{
        backgroundImage: 'url("/image.png")',
        backgroundSize: 'cover', // หรือ 'contain' ตามต้องการ
        backgroundPosition: 'center',
        width: '100%', // หรือขนาดที่ต้องการ
        height: '100vh', // หรือขนาดที่ต้องการ เช่น 810px
      }}
    >
    </section>
  );
}

export default Hero;