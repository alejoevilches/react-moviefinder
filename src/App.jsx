import './App.css'
import { useState, useEffect } from 'react';
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies';

function useSearch(){
  const [search, updateSearch]=useState("");
  const [error, setError]=useState(null);

  useEffect(() => {
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return {search, updateSearch, error}
}

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
