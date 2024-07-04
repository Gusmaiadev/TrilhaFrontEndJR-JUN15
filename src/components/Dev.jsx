import React from 'react';
import '../styles/AnimationDev.css';

function Dev() {
  return (
    <div className="container">
      <div className="developer">
        <div className="head">
          <div className="cap">
            <div className="dot"></div>
            <div className="strip"></div>
          </div>
          <div className="face">
            <div className="spects spect1">
              <div className="eye"></div>
            </div>
            <div className="spects spect2">
              <div className="eye"></div>
            </div>
          </div>
        </div>
        <div className="t-shirt-container">
          <div className="t-shirt">
            <div className="neck"></div>
          </div>
        </div>
      </div>
      <div className="laptop">
        <div className="logo"></div>
      </div>
      <div className="table"></div>
    </div>
  );
}

export default Dev;
