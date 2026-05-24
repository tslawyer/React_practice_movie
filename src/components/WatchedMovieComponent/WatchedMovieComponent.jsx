import RatingComponent from "../RatingComponent/RatingComponent";

const WatchedMovieComponent = ({ movie }) => {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />

      <h3>{movie.Title}</h3>

      <RatingComponent movie={movie} />
    </li>
  );
};

export default WatchedMovieComponent;
