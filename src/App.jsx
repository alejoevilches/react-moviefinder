import './App.css'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch';
import { useMovies } from './hooks/useMovies';



function App() {
  const {movies:mappedMovies}=useMovies();
  const {search, updateSearch, error} = useSearch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log({search})
    }
  const handleChange=(e)=>{
    updateSearch(e.target.value);
  }
  return (
    <div className='page'>
      <h1>Buscador de peliculas</h1>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="movie-name">¿Que pelicula querés buscar?</label>
          <input value={search} onChange={handleChange} name="query" type="text" id="movie-name" placeholder='Licorice Pizza, Everything Everywhere All At Once...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App
