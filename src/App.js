import "./App.css";
import Moviesnext from "./Components/Moviesnext";
import Listmovies from "./Components/Listmovies";
import { useState } from "react";
import Navmovies from "./Components/Navmovies";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Addmovies from "./Components/Addmovies";
function App() {
  const [titre, setTitre] = useState("");
  const [note, setnote] = useState(0);
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      title: "Inception",
      description:
        "Un voleur infiltre les rêves pour voler des secrets cachés dans l'inconscient.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/HcoZbHBDHQA?si=xZ4_uZUHqFK3u8AX" ,
    },
    {
      id: Math.random(),
      title: "Interstellar",
      description:
        "Des astronautes voyagent à travers un trou de ver à la recherche d'une nouvelle planète habitable.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRepS35SH9SsiJuNgPeHJTF1Y15aZ-XUHO9Zg&sg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/VaOijhK3CRU?si=75M66r1lXpAyU8CG" ,
    },
    {
      id: Math.random(),
      title: "The Dark Knight",
      description:
        "Batman affronte le Joker dans une lutte pour sauver Gotham.",
      posterUrl:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/UMgb3hQCb08?si=uVoW_rkEsN3QSrzk",
    },
    {
      id: Math.random(),
      title: "Parasite",
      description:
        "Une famille pauvre infiltre la vie d'une riche famille en cachant sa véritable identité.",
      posterUrl:
        "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      rating: 3,
      trailer: "https://www.youtube.com/embed/5xH0HfJHsaY?si=widyAw2uDvZkb_Ce" ,
    },
    {
      id: Math.random(),
      title: "The Godfather",
      description:
        "Un patriarche mafieux transmet son empire criminel à son fils réticent.",
      posterUrl:
        "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
      rating: 4,
      trailer:"https://www.youtube.com/embed/UaVTIH8mujA?si=z0ToAtidyfJbqzhh",
    },
    {
      id: Math.random(),
      title: "Fight Club",
      description:
        "Un homme crée un club secret de combat avec un vendeur de savon charismatique.",
      posterUrl:
        "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
      rating: 2,
      trailer:"https://www.youtube.com/embed/BdJKm16Co6M?si=2yuCFzHXYAltEEOE" ,
    },
    {
      id: Math.random(),
      title: "Forrest Gump",
      description:
        "L'histoire touchante d'un homme simple qui traverse des décennies d'histoire américaine.",
      posterUrl:
        "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      rating: 2,
      trailer:"https://www.youtube.com/embed/bLvqoHBptjg?si=Yw_uqq9REcKr2HJq" ,
    },
    {
      id: Math.random(),
      title: "Pulp Fiction",
      description:
        "Une série d'histoires interconnectées de criminels dans le Los Angeles des années 90.",
      posterUrl:
        "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      rating: 3,
      trailer: "https://www.youtube.com/embed/WSLMN6g_Od4?si=JK_EfotbLZXhurNL" ,
    },
    {
      id: Math.random(),
      title: "The Matrix",
      description:
        "Un pirate informatique découvre la vérité sur la réalité et rejoint une rébellion contre les machines.",
      posterUrl:
        "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      rating: 5,
      trailer:"https://www.youtube.com/embed/Z2eCmhBgsyI?si=cvAXrFAWct3nx0a0" ,
    },
    {
      id: Math.random(),
      title: "Gladiator",
      description:
        "Un général romain déchu devient gladiateur pour venger sa famille.",
      posterUrl:
        "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/P5ieIbInFpg?si=TdZ4_9SeLxJLmznq" ,
    },
  ]);
  return (
    <div className="App">
      <Navmovies
        titre={titre}
        note={note}
        setTitre={setTitre}
        setnote={setnote}
        movies={movies}
        setMovies={setMovies}   
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={<Listmovies movies={movies} titre={titre} note={note} />}
        />
        <Route path="/nextmovies/:id" element={<Moviesnext movies={movies} />} />
      </Routes>

{/* <Addmovies movies={movies} setMovies={setMovies}/> */}
    </div>
  );
}

export default App;
