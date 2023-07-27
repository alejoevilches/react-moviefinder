const API_KEY="ce0fcaf8"

export const searchMovies=async({search})=>{
    if (search=="") return null
    try {
        const response=await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json=await response.json()
        const movies=json.Search
        return movies?.map(movie=>(
            {
            id: movie.imdbID,
            poster:movie.Poster,
            year:movie.Year,
            type:movie.Year,
            title:movie.Title
        }
    ))
    }
    catch(e){
        throw new Error("Error searching movies. Check the developer console for more details");
    }
  }
