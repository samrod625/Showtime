// Movie.js
import React, { useState } from "react";
import Modal from "./Modal";
import MovieCard from "./MovieCard";

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
