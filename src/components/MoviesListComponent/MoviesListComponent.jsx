import MovieComponent from "../MovieComponent/MovieComponent";

const MoviesListComponent = ({ movies, onSetMovieId }) => {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <MovieComponent
          key={movie.imdbID}
          movie={movie}
          onSetMovieId={onSetMovieId}
        />
      ))}
    </ul>
  );
};

export default MoviesListComponent;
