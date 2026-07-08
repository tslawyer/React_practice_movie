import { useEffect, useState } from "react";
import StarRating from "../StarRating/StarRating";
import Loader from "../Loader/Loader";

const Movie = ({ movieId, KEY, onBack }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGetOneMovie = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?i=${movieId}&apikey=${KEY}`,
        );

        if (!res.ok) {
          throw new Error("Someting went wrong with fetch movies");
        }

        const data = await res.json();

        setSelectedMovie(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGetOneMovie();
  }, [movieId]);
  return (
    <div>
      <button className="btn-back" onClick={onBack}>
        &larr;
      </button>
      {isLoading && <Loader />}
      {selectedMovie && (
        <div>
          <img src={selectedMovie.Poster} alt="" />
          <div className="rating">
            <StarRating maxRating={10} />
          </div>
          <h1>{selectedMovie.Title}</h1>
          <p>{selectedMovie.Year}</p>
          <p>{selectedMovie.Runtime}</p>
          <p>{selectedMovie.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default Movie;
