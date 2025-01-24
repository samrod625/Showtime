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
      "https://imgs.search.brave.com/OG8lm8ltP6nXR0_EzicvMhHUgV69O3YLY-5AP2zaMhE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q4Lzdi/LzlkL2Q4N2I5ZGY3/YzVmNjNiN2M4ZmRj/YTNkZWUwN2M1NWMw/LmpwZw",
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
      "https://imgs.search.brave.com/JfOcWHkNH2oHqcrG6RP4YlXgm2_80AblThtEeX-SnZU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzM4Mzk1Mzk1L3Iv/aWwvMDVhNGQ2LzU4/OTc0NzMxNjYvaWxf/NjAweDYwMC41ODk3/NDczMTY2X3J1aTMu/anBn",
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
      "https://imgs.search.brave.com/MRR4AXag1plpJlwF6DQw_ndX048wCY_VqIZ3SJjgdhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YyL2Nl/LzgzL2YyY2U4MzYz/Mzc4OWIxNTliNTgw/NGE3YjE5M2E2M2Jh/LmpwZw",
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
      "https://imgs.search.brave.com/zD2Z0wF-SgrK3Zez9_9C8Yx1CXI-h-mQTnwEOB2FheA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHNjZG4xLnBheXRt/LmNvbS9pbWFnZXMv/Y2luZW1hL1NreS1m/b3JjZV9Qb3RzZXIt/LWdhbGVyeS05MTky/MmRiMC1jYmZmLTEx/ZWYtYTI1OS00YjNj/NmQyNmY0YTkuanBn/P2Zvcm1hdD13ZWJw",
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
      "https://imgs.search.brave.com/dyLV9PI1kdpazrOECtn3K0jzXlkYEUCbzBuvRidQ4cU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/NS5ib2xseXdvb2Ro/dW5nYW1hLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAx/L0RldmEtMS0zMjJ4/NDAxLmpwZw",
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
      "https://imgs.search.brave.com/ZyMQ7JvbCcrW4IoPH_fg5InQok-GC9v3AJcfzKwESGs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmlsbWliZWF0/LmNvbS9pbWcvcG9w/Y29ybi9tb3ZpZV9w/b3N0ZXJzL2dhbWVj/aGFuZ2VyLTIwMjUw/MTAyMTgyNjMzLTE5/OTExLmpwZw",
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
      "https://imgs.search.brave.com/ufQgkMcOFFFV1dbMPnNerC4tJY4KqMKMYzQIdoHmuxI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHNjZG4xLnBheXRt/LmNvbS9pbWFnZXMv/Y2luZW1hL0ZhdGVo/MS0xYmE3YTZjMC1j/OWNmLTExZWYtOWQ2/Ny00MTNjMGZiNzVj/OGUuanBlZz9mb3Jt/YXQ9d2VicA",
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
      "https://imgs.search.brave.com/gjxbMf1laRQgwXNF6-OwrqFCHstx6n9-AgBGBn6YhNg/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/LzIwMjQvcG9zdGVy/cy9kZW5fb2ZfdGhp/ZXZlc190d29fcGFu/dGVyYV92ZXIyLmpw/Zw",
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
      "https://imgs.search.brave.com/pLdyyxrS-lVJ5n4yFVsog4mHY3Nk5t8z3euYwJNNVXw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JhZnQuY2xvdWQv/MTEwMzM3OWQtNGZm/ZS00MmM5LWFhNjEt/NmEwZjk0OTdmY2U2/L2Fzc2V0cy9maWxt/L2EtcmVhbC1wYWlu/L2EtcmVhbC1wYWlu/LXBvc3Rlci5qcGc_/d2lkdGg9ODAwJnF1/YWxpdHk9ODAmZml0/PWNvbnRhaW4mcz16/TjN1MWJ4RnhUUXRn/TG1OOEloWUdSblVz/QzQ4NjB3RWpucTJM/RWVrRGZN",
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
      "https://imgs.search.brave.com/fzZlOAEYBroANAis_pXWFVh2077R_36LpCBazolS_-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb3Zp/ZXMudW5pdmVyc2Fs/cGljdHVyZXMuY29t/L21lZGlhL3dvbGZt/YW4tcG9zdGVyLTY2/ZGIxYmEyOGM1ZTQt/MS5qcGc",
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
      "https://imgs.search.brave.com/UVmyS_sKXXhOheFJ-0xsFJpOj0oxCZI5UVfjMMWsCBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tbHBu/azcyeWNpd2MuaS5v/cHRpbW9sZS5jb20v/Y3FoaUhMYy5JSVpT/fjJlZjczL3c6NjAw/L2g6ODg5L3E6NzUv/aHR0cHM6Ly9ibGVl/ZGluZ2Nvb2wuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzA5L05vc2ZlcmF0/dV9PZmZpY2lhbFBv/c3Rlci5qcGc",
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
      "https://imgs.search.brave.com/oDj8bbZkNXWs1mS8YSZbQ7qNSZHAN6TsJdQGN8IeI7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bmV3LXBvc3Rlci1m/b3ItYmV0dGVyLW1h/bi12MC1lY2Y2M3p6/dGh2MGUxLmpwZWc_/d2lkdGg9NjQwJmNy/b3A9c21hcnQmYXV0/bz13ZWJwJnM9Mjky/MGI4Yjk1NGM1NDY3/MDY2NTU3ZWNmNDE2/NDgwY2ViZWNmNjkw/Nw",
  },
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
      "https://imgs.search.brave.com/N9S-XJeoI4rQayVR1ymdMsAcj3ldxPVHiEYkT0fhzgM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmFqYWNob3phLmNvbS9wL2ltYWdlcy9wb25u/aXlpbl9zZWx2YW4xLmpwZw",
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
      "https://imgs.search.brave.com/oz1uT9djP-RMch_7trO0XISv57XM4nEyAGQy1owx_Hc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbGxz/aG9zLmNvbS92aWty/YW0tcG9zdGVyLmpwZw",
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
