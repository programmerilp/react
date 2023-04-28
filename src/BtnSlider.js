import React from "react";
import "./index.css";
import rightBtn from './img/right.png'
import leftBtn from './img/left.png'

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightBtn:leftBtn} />
    </button>
  );
}