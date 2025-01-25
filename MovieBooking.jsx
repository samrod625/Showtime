// MovieBooking.js
import React from "react";
import Card from "./Card"; // Import the Card component

const MovieBooking = () => {
  const cardData = [
    {
      image:
        "https://www.filmibeat.com/imgh/560x292/2018/12/kgf_1543984427160.jpg",
      title: "KGF",
      link: "bookings1.html",
    },
    {
      image: "http://www.simbasible.com/wp-content/uploads/2015/07/Avatar2.jpg",
      title: "Avatar 2",
      link: "bookings2.html",
    },
    {
      image: "https://via.placeholder.com/560x292",
      title: "Spider-Man: No Way Home",
      link: "bookings3.html",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        BOOK TICKETS NOW
      </h1>

      {/* Search Bar */}
      <div className="mb-8 w-full max-w-md flex items-center">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button className="px-4 py-2 bg-gray-600 text-white rounded-r-md hover:bg-gray-700 focus:outline-none">
          Search
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieBooking;
