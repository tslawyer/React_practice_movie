import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./tempData";
import NavComponent from "./components/NavComponent/NavComponent";
import MainSection from "./components/MainSection/MainSection";
import BoxComponent from './components/BoxComponent/BoxComponent'
import WatchedMoviesList from './components/WatchedMoviesList/WatchedMoviesList'
import MoviesListComponent from './components/MoviesListComponent/MoviesListComponent'

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
    const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));

  const avgUserRating = average(watched.map((movie) => movie.userRating));

  const avgRuntime = average(watched.map((movie) => movie.runtime));


  return (
    <>
      <NavComponent movies={movies} />
      <MainSection>
        <BoxComponent>
         <MoviesListComponent movies={movies} />
        </BoxComponent>
        <BoxComponent>
           <WatchedMoviesList
              watched={watched}
              avgImdbRating={avgImdbRating}
              avgUserRating={avgUserRating}
              avgRuntime={avgRuntime}
            />
        </BoxComponent>

      </MainSection>
    </>
  );
}

export default App;
