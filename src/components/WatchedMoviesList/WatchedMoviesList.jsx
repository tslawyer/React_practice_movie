import SummaryComponent from "../SummaryComponent/SummaryComponent";
import WatchedMovieComponent from "../WatchedMovieComponent/WatchedMovieComponent";

const WatchedMoviesList = ({
  watched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
}) => {
  return (
    <>
      <SummaryComponent
        watched={watched}
        avgImdbRating={avgImdbRating}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
      />
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovieComponent key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default WatchedMoviesList;
