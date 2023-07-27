import { searchMovies } from "../services/movies";
import { useState } from "react";

export const useMovies=({search})=>{
  const [movies, setMovies]=useState([])
  const getMovies=async()=>{
    const newMovies=await searchMovies({search})
    setMovies(newMovies)
  }

  return { movies, getMovies }
}
