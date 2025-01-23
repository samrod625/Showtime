import React, { useRef, useState } from "react";

const moviesData = [
  {
    id: 1,
    name: "Inception",
    image: "https://via.placeholder.com/400x200?text=Inception",
    language: "English",
    duration: "2h 28m",
    time: "7:00 PM",
    seatNumber: "A12",
    location: "Mumbai, Maharashtra",
  },
  {
    id: 2,
    name: "Parasite",
    image: "https://via.placeholder.com/400x200?text=Parasite",
    language: "Korean",
    duration: "2h 12m",
    time: "5:00 PM",
    seatNumber: "B15",
    location: "Bangalore, Karnataka",
  },
  {
    id: 3,
    name: "Interstellar",
    image: "https://via.placeholder.com/400x200?text=Interstellar",
    language: "English",
    duration: "2h 49m",
    time: "9:00 PM",
    seatNumber: "C22",
    location: "Delhi, India",
  },
];

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

const Modal = ({ showModal, onConfirm, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-bold mb-6">
          Are you sure you want to cancel the booking?
        </h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onConfirm}
            className="bg-green-300 text-black py-2 px-4 rounded-lg shadow hover:bg-green-500"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 py-2 px-4 rounded-lg shadow hover:bg-red-800"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

const Movie = () => {
  const [movies, setMovies] = useState(moviesData);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleCancelClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleConfirmCancel = () => {
    if (selectedMovie) {
      removeMovie(selectedMovie.id);
    }
    setShowModal(false);
    setSelectedMovie(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <div className="flex flex-col items-center py-12 bg-gradient-to-b from-blue-800 to-blue-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-200">
        Your Booking History
      </h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onCancel={handleCancelClick} />
      ))}
      {movies.length === 0 && (
        <p className="text-gray-400 text-lg">
          No bookings available. Start booking your favorite movies!
        </p>
      )}

      {/* Modal for Cancel Confirmation */}
      <Modal
        showModal={showModal}
        onConfirm={handleConfirmCancel}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Movie;
