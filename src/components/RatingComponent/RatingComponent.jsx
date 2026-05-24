const RatingComponent = ({ movie }) => {
  return (
    <div>
      <p>
        <span>⭐️</span>
        <span>{movie.imdbRating}</span>
      </p>

      <p>
        <span>🌟</span>
        <span>{movie.userRating}</span>
      </p>

      <p>
        <span>⏳</span>
        <span>{movie.runtime} min</span>
      </p>
    </div>
  );
};

export default RatingComponent;
