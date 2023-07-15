import './App.css'
import withResults from "./mocks/with-results.json"
import withoutResults from "./mocks/no-results.json"


function App() {
  const movies=withResults.Search;
  const hasMovies=movies?.length > 0
  return (
    <div className='page'>
      <h1>Buscador de peliculas</h1>
      <header>
        <form className='form'>
          <label htmlFor="movie-name">¿Que pelicula querés buscar?</label>
          <input type="text" id="movie-name" placeholder='Licorice Pizza, Everything Everywhere All At Once...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
       {
        hasMovies ? (
          movies.map((movie)=>{
            return (<li key={movie}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>)
          })
        ) : (
          <h1>No se encontraron resultados. Proba buscar nuevamente</h1>
        )
       }
      </main>
    </div>
  )
}

export default App
