import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies';

function App() {
  const {movies:mappedMovies}=useMovies();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data=new FormData(e.target);
    const query=data.get("query");
  }
  return (
    <div className='page'>
      <h1>Buscador de peliculas</h1>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="movie-name">¿Que pelicula querés buscar?</label>
          <input name="query" type="text" id="movie-name" placeholder='Licorice Pizza, Everything Everywhere All At Once...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App
