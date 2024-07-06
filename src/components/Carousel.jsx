import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

// images
import ReactIcon from '../assets/react.png';
import SassIcon from '../assets/sass.png';
import FigmaIcon from '../assets/figma.png';
import OracleIcon from '../assets/oraclesql.png';
import PythonIcon from '../assets/python.png';
import NodeIcon from '../assets/node.png';

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
        <div className="item a"><img src={ReactIcon} alt="ReactJs" /></div>
        <div className="item b"><img src={SassIcon} alt="Sass" /></div>
        <div className="item c"><img src={FigmaIcon} alt="Figma" /></div>
        <div className="item d"><img src={OracleIcon} alt="OraleSQL" /></div>
        <div className="item e"><img src={PythonIcon} alt="Python" /></div>
        <div className="item f"><img src={NodeIcon} alt="NodeJs" /></div>
      </div>
    </div>
  );
};

export default Carousel;
