import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

function Carousel() {
  const [currdeg, setCurrdeg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrdeg((prev) => prev - 60); 
    }, 1500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="carousel" style={{ transform: `rotateY(${currdeg}deg)` }}>
        <div className="item a">A</div>
        <div className="item b">B</div>
        <div className="item c">C</div>
        <div className="item d">D</div>
        <div className="item e">E</div>
        <div className="item f">F</div>
      </div>
    </div>
  );
};

export default Carousel;
