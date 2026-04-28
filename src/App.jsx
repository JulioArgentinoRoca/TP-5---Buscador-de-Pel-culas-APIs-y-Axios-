import { useState } from 'react'
import './App.css'
import SearchBar from "./SearchBar.jsx"
import { simpleMovie, movieDetail } from './api.jsx'
import MovieCard from './MovieCard.jsx'
import MovieDetail from './MovieDetail.jsx'

function App() {

  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState()

  const handleSearch = async (busqueda) => {
    const res = await simpleMovie(busqueda)
    setMovie()
    setMovies(res.Search)
    console.log(res.Search)
  }

  const mostrarPelicula = async (id) => {
    const res = await movieDetail(id)
    console.log(res)
    setMovie(res)
    setMovies([])
  }

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {
        movies.map((pelicula) => (
          <MovieCard key={pelicula.imdbID} pelicula={pelicula} mostrarPelicula={mostrarPelicula} />
        ))
      }

      { movie && <MovieDetail movie={movie} /> }
    </>
  )
}

export default App
