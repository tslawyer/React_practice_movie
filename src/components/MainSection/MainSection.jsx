import BoxComponent from "../BoxComponent/BoxComponent";
import WatchedMoviesList from "../WatchedMoviesList/WatchedMoviesList";
import MoviesListComponent from "../MoviesListComponent/MoviesListComponent";

const MainSection = ({ watched, movies }) => {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));

  const avgUserRating = average(watched.map((movie) => movie.userRating));

  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <>
      <main className="main">
        <BoxComponent children={<MoviesListComponent movies={movies} />} />
        <BoxComponent
          children={
            <WatchedMoviesList
              watched={watched}
              avgImdbRating={avgImdbRating}
              avgUserRating={avgUserRating}
              avgRuntime={avgRuntime}
            />
          }
        />
      </main>
    </>
  );
};

export default MainSection;
