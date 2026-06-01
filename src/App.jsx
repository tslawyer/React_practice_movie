import { useEffect, useState } from "react";
import NavComponent from "./components/NavComponent/NavComponent";
import MainSection from "./components/MainSection/MainSection";
import BoxComponent from './components/BoxComponent/BoxComponent'
import WatchedMoviesList from './components/WatchedMoviesList/WatchedMoviesList'
import MoviesListComponent from './components/MoviesListComponent/MoviesListComponent'
import Loader from "./components/Loader/Loader";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false)


  useEffect(()=>{ 
    const fetchMovies = async ()=>{
    setIsLoading(true)

    const res = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1e1aeaa4&s=spiderman")
    const data = await res.json()
    setMovies(data.Search)
    setIsLoading(false)
    }  
    fetchMovies()
  },[])

  return (
    <>
      <NavComponent movies={movies} />
      <MainSection>
        <BoxComponent>

      {isLoading ? <Loader/> :  <MoviesListComponent movies={movies} />}
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
