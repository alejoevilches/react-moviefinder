import { searchMovies } from "../services/movies";
import { useState, useRef, useMemo, useCallback } from "react";

export const useMovies=({search, sort})=>{
  const [movies, setMovies]=useState([])
  const [error, setError] = useState(false);
  const previousSearch=useRef(search)
  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    try {
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    }
  }, [])

  const sortedMovies = useMemo(()=>{
    return sort 
    ? [...movies].sort((a,b)=>{
      return a.title.localeCompare(b.title)
    })
    : movies
  }, [sort, movies])
  return { movies:sortedMovies, getMovies }
}
