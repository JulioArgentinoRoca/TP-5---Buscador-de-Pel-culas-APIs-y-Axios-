import { useState } from 'react'
import './App.css'
import SearchBar from "./SearchBar.jsx"
import { simpleMovie, movieDetail } from './api.jsx'
import MovieCard from './MovieCard.jsx'

function App() {

  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState("")

  const handleSearch = async (busqueda) => {
    const res = await simpleMovie(busqueda)
    setMovies(res.Search)
    console.log(res.Search)
  }

  const mostrarPelicula = async (id) => {
    const res = await movieDetail(id)
    setMovie(res)
    setMovies([])
  }

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      
      <div className="movie-grid">
        {
          movies.map((pelicula) => (
            <MovieCard key={pelicula.imdbID} pelicula={pelicula} mostrarPelicula={mostrarPelicula} />
          ))
        }
      </div>
      
    </>
  )
}

export default App
