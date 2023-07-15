import './App.css'
import { Movies } from './components/Movies';
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
        <Movies />
      </main>
    </div>
  )
}

export default App
