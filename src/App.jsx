import './App.css'
import { useRef } from 'react';
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies';

function App() {
  const {movies:mappedMovies}=useMovies();
  const inputRef=useRef();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const value=inputRef.current.value;
    alert(value);
  }
  return (
    <div className='page'>
      <h1>Buscador de peliculas</h1>
      <header>
        <form className='form'>
          <label htmlFor="movie-name">¿Que pelicula querés buscar?</label>
          <input ref={inputRef}type="text" id="movie-name" placeholder='Licorice Pizza, Everything Everywhere All At Once...' />
          <button onClick={handleSubmit} type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App
