import { useState } from 'react'
import './App.css'
import SearchBar from "./SearchBar.jsx"
import { simpleMovie, movieDetail } from './api.jsx'
import MovieCard from './MovieCard.jsx'

function App() {

  const [movies, setMovies] = useState([])

  const handleSearch = async (busqueda) => {
    const res = await simpleMovie(busqueda)
    setMovies(res.Search)
    console.log(res.Search)
  }

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {
        movies.forEach((pelicula) => {
          <MovieCard pelicula={pelicula}/>
        })
      }
    </>
  )
}

export default App
