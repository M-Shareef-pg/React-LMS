import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="mainParent">
      {/* upper card part */}
      <div className="upper-part-wrapper">
        <div className="img-wrapper"></div>
      </div>

      <div className="mid-part-wrapper">
        <img src={props.img} alt="image description" />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>

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
  );
}

export default Card;
