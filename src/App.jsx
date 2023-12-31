import './App.css'
import { useState, useCallback } from 'react';
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch';
import { useMovies } from './hooks/useMovies';
import debounce from 'just-debounce-it';



function App() {
  const [sort, setSort]=useState(false)
  const {search, updateSearch, error} = useSearch();
  const {movies, getMovies}=useMovies({search, sort});
  const debouncedGetMovies = useCallback(
    debounce((search)=>{
      getMovies({search});
  },500)
  , [])
  const handleSubmit=(e)=>{
    e.preventDefault();
    getMovies(search);
    }
  const handleSort=()=>{
    setSort(!sort)
  }
  const handleChange=(e)=>{
    const newSearch=e.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  }

  return (
    <div className='page'>
      <h1>Buscador de peliculas</h1>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="movie-name">¿Que pelicula querés buscar?</label>
          <div className='inputs'>
            <input value={search} onChange={handleChange} name="query" type="text" id="movie-name" placeholder='Licorice Pizza, Everything Everywhere All At Once...' />
            <input type="checkbox" onChange={handleSort} checked={sort} />
          </div>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
