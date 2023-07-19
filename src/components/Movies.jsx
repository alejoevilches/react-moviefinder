/* eslint-disable react/prop-types */
import withResults from "../mocks/with-results.json"

export const ListOfMovies = ( {movies} )=>{
    return (
        <ul>
              {
                movies.map(movie=>{
                  return <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                })
              }
            </ul>
          )
}

export const RenderNoResults=()=>{
    return (
        <p>Lo sentimos! No se encontraron resultados para esta busqueda </p>
    )
}

export const Movies=()=>{
    const movies=withResults.Search;
    const hasMovies=movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <RenderNoResults />
  )
}