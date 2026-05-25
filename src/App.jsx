import { useState } from "react";
import { tempMovieData} from "./tempData";
import NavComponent from "./components/NavComponent/NavComponent";
import MainSection from "./components/MainSection/MainSection";
import BoxComponent from './components/BoxComponent/BoxComponent'
import WatchedMoviesList from './components/WatchedMoviesList/WatchedMoviesList'
import MoviesListComponent from './components/MoviesListComponent/MoviesListComponent'

function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavComponent movies={movies} />
      <MainSection>
        <BoxComponent>
         <MoviesListComponent movies={movies} />
        </BoxComponent>
        <BoxComponent>
           <WatchedMoviesList
            />
        </BoxComponent>

      </MainSection>
    </>
  );
}

export default App;
