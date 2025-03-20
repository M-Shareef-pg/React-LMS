import React from "react";

function Card(props) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
      <img
        src="src/assets/spiderman.jpeg"
        alt=""
        className="object-cover bg-cover w-full rounded-md h-94 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          Marvel
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          {props.title}
        </h2>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        tempora ipsum soluta amet
      </p>
    </div>
  );
}

export default Card;
