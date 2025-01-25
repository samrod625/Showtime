// MovieCard.js
import React, { useRef, useState } from "react";

const MovieCard = ({ movie, onCancel }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      className="flex flex-row w-full max-w-4xl bg-gradient-to-r from-blue-500 to-blue-400 border border-blue-900 rounded-lg mb-5 p-6 shadow-lg relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.25), transparent 80%)`,
      }}
    >
      <img
        src={movie.image}
        alt={movie.name}
        className="w-1/2 rounded-lg shadow-md"
      />
      <div className="flex flex-col ml-6 w-1/2">
        <h2 className="text-2xl font-bold text-gray-100 mb-3">{movie.name}</h2>
        <p className="text-gray-200 mb-2">Language: {movie.language}</p>
        <p className="text-gray-200 mb-2">Duration: {movie.duration}</p>
        <p className="text-gray-200 mb-2">ShowTime: {movie.time}</p>
        <p className="text-gray-200 mb-2">Seat Number: {movie.seatNumber}</p>
        <p className="text-gray-200 mb-2">Location: {movie.location}</p>
        <button
          onClick={() => onCancel(movie)}
          className="mt-4 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-2 px-4 rounded-lg shadow hover:from-red-700 hover:to-red-900"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
