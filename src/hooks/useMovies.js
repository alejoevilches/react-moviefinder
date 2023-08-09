import { searchMovies } from "../services/movies";
import { useState, useRef, useMemo } from "react";

export const useMovies=({search, sort})=>{
  const [movies, setMovies]=useState([])
  const previousSearch=useRef(search)
  const getMovies=async()=>{
    if (search===previousSearch.current) return
    previousSearch.current=search; 
    const newMovies=await searchMovies({search})
    setMovies(newMovies)
  }

  const sortedMovies = useMemo(()=>{
    return sort 
    ? [...movies].sort((a,b)=>{
      return a.title.localeCompare(b.title)
    })
    : movies
  }, [sort, movies])
  return { movies:sortedMovies, getMovies }
}
