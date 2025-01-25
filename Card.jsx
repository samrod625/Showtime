import React from "react";

const Card = ({ image, title, link }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-72 h-48 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <button
          onClick={() => {
            window.location.href = link;
          }}
          className="px-4 py-2 text-sm font-bold text-white bg-gray-600 rounded-md hover:bg-gray-700 active:bg-black transition-transform duration-200 hover:-translate-y-1"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;
