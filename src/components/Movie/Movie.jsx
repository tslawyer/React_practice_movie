import { useEffect, useState } from "react";

const Movie = ({ movieId, KEY }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchGetOneMovie = async () => {
      try {
        console.log("MOVIE ID: ", movieId);
        const res = await fetch(
          `https://www.omdbapi.com/?i=${movieId}&apikey=${KEY}`,
        );

        if (!res.ok) {
          throw new Error("Someting went wrong with fetch movies");
        }

        const data = await res.json();

        console.log("DATA", data);

        setSelectedMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGetOneMovie();
  }, [movieId]);
  return (
    <div>
      {selectedMovie ? (
        <div>
          <img src={selectedMovie.Poster} alt="" />
          <h1>{selectedMovie.Title}</h1>
          <p>{selectedMovie.Year}</p>
          <p>{selectedMovie.Runtime}</p>
          <p>{selectedMovie.Plot}</p>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Movie;
