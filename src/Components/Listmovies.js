import Cardmovies from "./Cardmovies";


const Listmovies = ({ movies, titre, note }) => {
  const filteredMovies = movies.filter(
    (el) =>
      el.title.toLowerCase().includes(titre.toLowerCase()) &&
      el.rating >= note
  );

  return (
    <div className="listmovies-container">
      {filteredMovies.length === 0 ? (
        <h1>No movies found</h1>
      ) : (
        filteredMovies.map((el, i) => <Cardmovies key={i} el={el} />)
      )}
    </div>
  );
};

export default Listmovies;
