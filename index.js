const movieDetails = [
  {
    title: "Yeh Jawaani Hai Deewani",
    duration: "2h 40m",
    language: "Hindi",
    director: "Ayan Mukerji",
    cast: [
      "Ranbir Kapoor",
      "Deepika Padukone",
      "Kalki Koechlin",
      "Aditya Roy Kapur",
      "Farooq Shaikh",
    ],
    description:
      "A coming-of-age story that follows a young man's journey as he balances love, friendship, and his dreams.",
    genre: "Romance, Drama",
    rating: "7.9/10",
    release_date: "2013-05-31",
    poster_link:
      "https://rukminim1.flixcart.com/image/1408/1408/av-media/movies/e/h/t/yeh-jawaani-hai-deewani-original-imadn8wuvzqypchz.jpeg?q=90",
  },
  {
    title: "3 Idiots",
    duration: "2h 51m",
    language: "Hindi",
    director: "Rajkumar Hirani",
    cast: [
      "Aamir Khan",
      "R. Madhavan",
      "Sharman Joshi",
      "Kareena Kapoor",
      "Boman Irani",
    ],
    description:
      "A heartwarming tale of three friends navigating college life and questioning the societal norms of success.",
    genre: "Comedy, Drama",
    rating: "8.4/10",
    release_date: "2009-12-25",
    poster_link:
      "https://cdn.shopify.com/s/files/1/0747/3829/products/mNS0669_1024x1024.jpg?v=1501977622"
  },
  {
    title: "Emergency",
    duration: "2h 30m",
    language: "Hindi",
    director: "Kangana Ranaut",
    cast: [
      "Kangana Ranaut",
      "Anupam Kher",
      "Shreyas Talpade",
      "Mahima Chaudhry",
      "Milind Soman",
    ],
    description:
      "A historical drama depicting the events during India's Emergency period in 1975.",
    genre: "Drama, History",
    rating: "8.2/10",
    release_date: "2025-01-17",
    poster_link:
      "https://upload.wikimedia.org/wikipedia/en/3/32/Emergency_movie_poster.jpg",
  },
  {
    title: "Sky Force",
    duration: "2h 15m",
    language: "Hindi",
    director: "Abhishek Anil Kapoor, Sandeep Kewlani",
    cast: [
      "Akshay Kumar",
      "Nimrat Kaur",
      "Veer Pahariya",
      "Sara Ali Khan",
      "Pankaj Tripathi",
    ],
    description:
      "A patriotic action film showcasing the valor of the Indian Air Force.",
    genre: "Action, Drama",
    rating: "7.8/10",
    release_date: "2025-01-24",
    poster_link:
      "https://tse4.mm.bing.net/th?id=OIP.ty_Q5WAWKFFfqqgzT-iTtQHaFj&pid=Api&P=0&h=180",
  },
  {
    title: "Deva",
    duration: "2h 20m",
    language: "Hindi",
    director: "Raj Mehta",
    cast: [
      "Shahid Kapoor",
      "Pooja Hegde",
      "Anil Kapoor",
      "Kriti Sanon",
      "Rajkummar Rao",
    ],
    description:
      "A romantic drama exploring complex relationships and personal growth.",
    genre: "Romance, Drama",
    rating: "7.5/10",
    release_date: "2025-01-31",
    poster_link:
      "https://tse2.mm.bing.net/th?id=OIP.pSAqEx9NNY7M5OPywFi71wHaEK&pid=Api&P=0&h=180",
  },
  {
    title: "Game Changer",
    duration: "2h 25m",
    language: "Hindi",
    director: "Shankar",
    cast: ["Ram Charan", "Kiara Advani", "Anjali", "SJ Suryah", "Prakash Raj"],
    description:
      "A political action thriller about an IAS officer fighting against corruption.",
    genre: "Action, Thriller",
    rating: "8.0/10",
    release_date: "2025-01-10",
    poster_link:
      "https://tse2.mm.bing.net/th?id=OIP.zivbBD_MV-ZcNrXY2WVuxAHaEV&pid=Api&P=0&h=180",
  },
  {
    title: "Fateh",
    duration: "2h 10m",
    language: "Hindi",
    director: "Abhinandan Gupta",
    cast: [
      "Sonu Sood",
      "Jacqueline Fernandez",
      "Vijay Raaz",
      "Naseeruddin Shah",
      "Dibyendu Bhattacharya",
    ],
    description:
      "An action thriller centered on a former special ops officer combating cybercrime.",
    genre: "Action, Thriller",
    rating: "7.3/10",
    release_date: "2025-01-10",
    poster_link:
      "https://e1.pxfuel.com/desktop-wallpaper/295/905/desktop-wallpaper-fateh-sonu-sood-hindi-movie-cast-story-review-videos-ott-watch-bollywood-2022-movie-poster.jpg",
      
  },
  {
    title: "Den of Thieves 2: Pantera",
    duration: "2h 20m",
    language: "English",
    director: "Christian Gudegast",
    cast: [
      "Gerard Butler",
      "O'Shea Jackson Jr.",
      "Meadow Williams",
      "Curtis '50 Cent' Jackson",
      "Piper Perabo",
    ],
    description:
      "A sequel following the gritty world of international heists and the pursuit of justice.",
    genre: "Action, Thriller",
    rating: "7.0/10",
    release_date: "2025-01-10",
    poster_link:
      "https://tse3.mm.bing.net/th?id=OIP.-1A2GXlUCq6hN1aLX3uKPQHaEK&pid=Api&P=0&h=180",
  },
  {
    title: "A Real Pain",
    duration: "1h 4m",
    language: "English",
    director: "Jesse Eisenberg",
    cast: ["Jesse Eisenberg", "Kieran Culkin", "Jennifer Grey"],
    description:
      "A poignant exploration of personal and collective grief, delving into the complexities of human emotions.",
    genre: "Comedy, Drama",
    rating: "4.5/5",
    release_date: "2025-01-17",
    poster_link:
      "https://www.tvinsider.com/wp-content/uploads/2024/04/a-real-pain.jpg",
  },
  {
    title: "Wolf Man",
    duration: "2h 2m",
    language: "English",
    director: "Leigh Whannell",
    cast: ["Christopher Abbott", "Julia Garner", "Matilda Firth"],
    description:
      "A thrilling horror mystery that reimagines the classic werewolf tale with a modern twist.",
    genre: "Horror, Mystery, Thriller",
    rating: "3.0/5",
    release_date: "2025-01-17",
    poster_link:
      "https://i.etsystatic.com/35899754/r/il/ac0d17/4261089105/il_fullxfull.4261089105_rvu2.jpg",
  },
  {
    title: "Nosferatu",
    duration: "2h 0m",
    language: "English",
    director: "Robert Eggers",
    cast: ["Lily-Rose Depp", "Nicholas Hoult", "Bill Skarsgård", "Emma Corrin"],
    description:
      "A retelling of the classic vampire story, blending horror and dark comedy elements.",
    genre: "Horror, Comedy",
    rating: "3.5/5",
    release_date: "2025-01-17",
    poster_link:
      "https://www.themoviedb.org/t/p/original/rmVsaqanQSE9EGeq9RMjrjJfr2N.jpg",
  },

  {
    title: "Better Man",
    duration: "2h 10m",
    language: "English",
    director: "Michael Gracey",
    cast: ["Robbie Williams", "Jonno Davies", "Kate Ashfield"],
    description:
      "A biographical film exploring the life and career of singer Robbie Williams.",
    genre: "Biography, Drama, Music",
    rating: "4.0/5",
    release_date: "2025-01-24",
    poster_link:
      "https://streamcoimg-a.akamaihd.net/000/583/25/58325-Banner-L2-0a35e311a2bb853e774e5d393f05dd2a.jpeg",
  
   {
    title: "Ponniyin Selvan: Part I",
    duration: "2h 50m",
    language: "Tamil",
    director: "Mani Ratnam",
    cast: [
      "Vikram",
      "Aishwarya Rai Bachchan",
      "Karthi",
      "Trisha",
      "Jayam Ravi",
    ],
    description:
      "An epic tale of power, ambition, and love set in the Chola dynasty.",
    genre: "Historical, Drama",
    rating: "8.1/10",
    release_date: "2022-09-30",
    poster_link:
      "https://tse3.mm.bing.net/th?id=OIP.Zl3Sg6o9E7MGXWYn6J9gpgHaKH&pid=Api&P=0&h=180",
  },
  {
    title: "Vikram",
    duration: "2h 53m",
    language: "Tamil",
    director: "Lokesh Kanagaraj",
    cast: [
      "Kamal Haasan",
      "Vijay Sethupathi",
      "Fahadh Faasil",
      "Narain",
      "Kalidas Jayaram",
    ],
    description:
      "A retired cop takes on a drug cartel in this action-packed thriller.",
    genre: "Action, Thriller",
    rating: "8.4/10",
    release_date: "2022-06-03",
    poster_link:
      "https://tse4.mm.bing.net/th?id=OIP.lf4wHtY9FN5G7icO2xqAzAHaLH&pid=Api&P=0&h=180",
  },
  {
    title: "Master",
    duration: "2h 59m",
    language: "Tamil",
    director: "Lokesh Kanagaraj",
    cast: [
      "Vijay",
      "Vijay Sethupathi",
      "Malavika Mohanan",
      "Andrea Jeremiah",
      "Shanthanu Bhagyaraj",
    ],
    description:
      "A troubled professor is sent to a juvenile school, where he clashes with a gangster.",
    genre: "Action, Thriller",
    rating: "7.8/10",
    release_date: "2021-01-13",
    poster_link:
      "https://imgs.search.brave.com/zA1ErHzQAo6FlvTuTzUdvP4LY-7pZjoxDsOfSNEIO54/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ubGVjZG4uY29t/L2ltYWdlcy8yMDIx/LzAxLzE0LzQ4MS8x/MDc1NTk0My9tYXN0/ZXItbW92aWUuanBn",
  },
  {
    title: "Jai Bhim",
    duration: "2h 44m",
    language: "Tamil",
    director: "T.J. Gnanavel",
    cast: ["Suriya", "Lijomol Jose", "Manikandan", "Rajisha Vijayan"],
    description:
      "A lawyer fights for the rights of a tribal woman wrongfully accused of a crime.",
    genre: "Drama, Legal",
    rating: "9.4/10",
    release_date: "2021-11-02",
    poster_link:
      "https://imgs.search.brave.com/WUkg1VE-AXunHs78e9mF-E7CB9cggdvvAeM7p1PuzAs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b2lsYW5jZWRvbWUu/bmV0L3RoZS1zdXJp/eWEtc3RhcnJlci1p/bi1qYWktYmhpbS8x/LmpwZw",
  },
  {
    title: "Doctor",
    duration: "2h 28m",
    language: "Tamil",
    director: "Nelson Dilipkumar",
    cast: ["Sivakarthikeyan", "Vinay Rai", "Priyanka Arul Mohan"],
    description:
      "A military doctor devises a cunning plan to rescue his fiancée's kidnapped niece.",
    genre: "Comedy, Thriller",
    rating: "8.0/10",
    release_date: "2021-10-09",
    poster_link:
      "https://imgs.search.brave.com/49yIW9x70Ue5GOnqLgAHK2uw_VElxyGQ9FxxHo5m-rY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b2lsYW5jZWRvbWUu/bmV0L2RvY3Rvci1m/aWxtLXNraWwtYXJ0/aXN0cy8xLmpwZw",
  },
  {
    title: "Soorarai Pottru",
    duration: "2h 29m",
    language: "Tamil",
    director: "Sudha Kongara",
    cast: ["Suriya", "Aparna Balamurali", "Paresh Rawal"],
    description:
      "A man's dream of starting a low-cost airline inspires a journey of passion and determination.",
    genre: "Drama, Biography",
    rating: "9.1/10",
    release_date: "2020-11-12",
    poster_link:
      "https://imgs.search.brave.com/XybLMp1wHoFCXHGiIzQQyOYihXxfjj_-mdCNyS6O91k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YWxvb3MuY29tL2lt/YWdlcy9zb29yYXJh/aV9wb3R0cnVfY292/ZXJfcmV2aWV3LnBu/Zw",
  },
  {
    title: "Asuran",
    duration: "2h 21m",
    language: "Tamil",
    director: "Vetrimaaran",
    cast: ["Dhanush", "Manju Warrier", "Pasupathy", "Teejay Arunasalam"],
    description:
      "A gripping rural drama about caste-based oppression and a father's fierce protection of his family.",
    genre: "Action, Drama",
    rating: "8.5/10",
    release_date: "2019-10-04",
    poster_link:
      "https://imgs.search.brave.com/xlpBrP8VmYDW_FfxWCEixfbnH8OaMhAtHZfMdvm_d6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mMTEy/Yy5zYXZld2ViLmNv/bS9tZWRpYS8tVmVi/cjRyN2RyTEpZL2Fz/dXJhbi1wb3N0ZXIu/anBn",
  },
  {
    title: "Kaithi",
    duration: "2h 25m",
    language: "Tamil",
    director: "Lokesh Kanagaraj",
    cast: ["Karthi", "Narain", "Arjun Das", "George Maryan"],
    description:
      "An ex-convict must save injured policemen from a ruthless gang while transporting them to safety.",
    genre: "Action, Thriller",
    rating: "8.6/10",
    release_date: "2019-10-25",
    poster_link:
      "https://imgs.search.brave.com/lXKxwAr_5KImu2clv9uJhAi3NUbSCGVoaYosKZ16B7Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mMTEy/Yy5zYXZld2ViLmNv/bS9tZWRpYS8tb0N1/eTlzM29MbnFLL2th/aXRoLXJldmlldy5q/cGc",
  },
  {
    title: "Soorarai Pottru",
    duration: "2h 29m",
    language: "Tamil",
    director: "Sudha Kongara",
    cast: ["Suriya", "Aparna Balamurali", "Paresh Rawal", "Urvashi"],
    description:
      "An inspiring story about an ordinary man's dream to launch a low-cost airline in India.",
    genre: "Drama, Biography",
    rating: "9.1/10",
    release_date: "2020-11-12",
    poster_link:
      "https://imgs.search.brave.com/XKujZlcsh_h-vUNvNqLKZCT7mWbnf3CoVtNYoeKxR44/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5p/bWFnZXNtdnkuY29t/L2ltYWdlcy9zb29y/YXJhaXBvdHRydS1w/b3N0ZXIuanBn",
  },
  {
    title: "Thalapathi",
    duration: "2h 37m",
    language: "Tamil",
    director: "Mani Ratnam",
    cast: ["Rajinikanth", "Mammootty", "Shobana", "Arvind Swami"],
    description:
      "A gripping tale of loyalty and betrayal, exploring the friendship between two men amidst a backdrop of crime.",
    genre: "Drama, Action",
    rating: "8.6/10",
    release_date: "1991-11-05",
    poster_link:
      "https://imgs.search.brave.com/5AgzgDdEV1cDX77bFTkTKHZYTA7QCOBYF4emWQQyHFo/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5p/bWFnZXNtdnkuY29t/L2ltYWdlcy90aGFs/YXBhdGhpLXBvc3Rl/ci5qcGc",
  },
  {
    title: "Enthiran",
    duration: "2h 54m",
    language: "Tamil",
    director: "Shankar",
    cast: ["Rajinikanth", "Aishwarya Rai Bachchan", "Danny Denzongpa"],
    description:
      "A scientist builds a humanoid robot that eventually develops emotions, leading to a catastrophic conflict.",
    genre: "Sci-Fi, Action",
    rating: "7.2/10",
    release_date: "2010-10-01",
    poster_link:
      "https://imgs.search.brave.com/vpq7LyW9F5SBUNXAd0a6NeNRPK1G3REn6ioUnuC3co4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY29sdGx5Lmlu/L3VwbG9hZHMvcG9z/dGVycy9vcmlnaW5h/bC85L2UvdGgvZW50/aGlyYW4tcG9zdGVy/LXNjaWZpLmpwZw",
  },
];

export default movieDetails;
