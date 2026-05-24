import MovieComponent from "../MovieComponent/MovieComponent";

const MoviesListComponent = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <MovieComponent key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesListComponent;
