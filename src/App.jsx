import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./tempData";
import NavComponent from "./components/NavComponent/NavComponent";
import MainSection from "./components/MainSection/MainSection";

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavComponent movies={movies} />
      <MainSection watched={watched} movies={movies} />
    </>
  );
}

export default App;
