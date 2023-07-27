/* eslint-disable react/prop-types */
export const ListOfMovies = ( {movies} )=>{
    return (
        <ul className="movies">
              {
                movies.map(movie=>{
                  return <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title} />
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

export const Movies=({movies})=>{
    const hasMovies=movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <RenderNoResults />
  )
}