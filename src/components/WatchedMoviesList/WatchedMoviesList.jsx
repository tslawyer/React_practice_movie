import SummaryComponent from "../SummaryComponent/SummaryComponent";
import WatchedMovieComponent from "../WatchedMovieComponent/WatchedMovieComponent";
import { tempWatchedData } from "../../tempData";
import { useState } from "react";

const WatchedMoviesList = () => {

  const [watched, setWatched] = useState(tempWatchedData);
    const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));

  const avgUserRating = average(watched.map((movie) => movie.userRating));

  const avgRuntime = average(watched.map((movie) => movie.runtime));


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
