import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="mainParent">
      {/* upper card part */}
      <div className="upper-part-wrapper">
        <img src="src/assets/one.jpg" alt="" />
        <h1>OWL</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          expedita libero minus, dignissimos porro laudantium sequi sit{" "}
        </p>

        {/* lower part started */}
        <div className="lower-part-wrapper">
          <div className="flex-child">
            <h3>Lifespan</h3>
            <p>40-50 years</p>
          </div>

          {/* 2nd child */}
          <div className="flex-child">
            <h3>Mass</h3>
            <p>4-6 kg</p>
          </div>

          {/* 3rd child */}
          <div className="flex-child">
            <h3>Length</h3>
            <p>1-3 m</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
