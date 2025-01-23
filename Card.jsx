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

const App = () => {
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

export default App;
