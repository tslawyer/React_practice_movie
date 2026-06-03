import { useEffect, useState } from "react";
import NavComponent from "./components/NavComponent/NavComponent";
import MainSection from "./components/MainSection/MainSection";
import BoxComponent from './components/BoxComponent/BoxComponent'
import WatchedMoviesList from './components/WatchedMoviesList/WatchedMoviesList'
import MoviesListComponent from './components/MoviesListComponent/MoviesListComponent'
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const KEY = "1e1aeaa4"

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const [isError,setIsError] = useState('')
  const [query, setQuery] = useState("");

  useEffect(()=>{ 
    const fetchMovies = async ()=>{

    try {
      setIsLoading(true)
      setIsError("")
      const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`)
      if(!res.ok){
        throw new Error("Someting went wrong with fetch movies")
      }
      
      const data = await res.json()

      if(data.Response === 'False') throw new Error("Movie not found")


      setMovies(data.Search || [])
      setIsError('')

    }  
    catch (error) {
        setIsError(error.message)
      }

    finally{
      setIsLoading(false)
    }
    }
    
    fetchMovies() 
    
  },[query])

  return (
    <>
      <NavComponent movies={movies} query={query} setQuery={setQuery} />
      <MainSection>
        <BoxComponent>
       {isLoading && <Loader/>}
       {!isLoading  && !isError &&  <MoviesListComponent movies={movies} />}
       {isError && <ErrorMessage message={isError}/>}
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
