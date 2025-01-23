import Card from "./Card";

const Home = () => {
  const cardData = [
    {
      image:
        "https://www.filmibeat.com/imgh/560x292/2018/12/kgf_1543984427160.jpg",
      title: "KGF",
      description: "Book tickets for the blockbuster KGF.",
      buttonText: "Book Now",
      link: "bookings1.html",
    },
    {
      image: "http://www.simbasible.com/wp-content/uploads/2015/07/Avatar2.jpg",
      title: "Avatar 2",
      description: "Experience the magic of Pandora in 3D.",
      buttonText: "Book Now",
      link: "bookings2.html",
    },
    {
      image: "https://via.placeholder.com/560x292",
      title: "Spider-Man: No Way Home",
      description: "Join Spidey on his latest adventure.",
      buttonText: "Book Now",
      link: "bookings3.html",
    },
  ];

  return (
    <div className="flex flex-wrap gap-5 justify-center items-start p-5 bg-gray-100 min-h-screen">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default Home;
