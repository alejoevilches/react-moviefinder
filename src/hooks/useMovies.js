import moviesResults from "../mocks/with-results.json";

export const useMovies=()=>{
  const movies=moviesResults.Search
  const mappedMovies=movies?.map(movie=>(
    {
      id: movie.imdbID,
      poster:movie.Poster,
      year:movie.Year,
      type:movie.Year,
      title:movie.Title
    }
  ))
  return { movies:mappedMovies }
}