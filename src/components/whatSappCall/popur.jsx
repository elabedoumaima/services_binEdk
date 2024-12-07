import React, { useEffect, useRef } from 'react';
import './style.css';

function Popup() {
  const popupRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      popupRef.current.style.display = "block";
    }, 3000);
  }, []);

  const handleClose = () => {
    popupRef.current.style.display = "none";
  }

  return (
    <div className="popup" ref={popupRef}>
      <div className="contentBox">
        <div className="close" onClick={handleClose}></div>
        <div className="imgBx">
          <img src="whatsapp.png" alt="" />
        </div>
        <div className="content">
          <div>
            <h3>Special Offer</h3>
            <h2>80 <sup>%</sup><span>Off</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eos?</p>
            <a href="#">Get the Deal</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
