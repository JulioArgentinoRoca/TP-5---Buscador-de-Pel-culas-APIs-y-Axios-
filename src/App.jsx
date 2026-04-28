import { useState } from 'react'
import './App.css'
import SearchBar from "./SearchBar.jsx"
import { simpleMovie, movieDetail, filterSeacrh } from './api.jsx'
import MovieCard from './MovieCard.jsx'
import MovieDetail from './MovieDetail.jsx'

function App() {

  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState()


  const handleSearch = async (busqueda, filter = null) => {
    let res
    setMovie()

    if (filter) {
      res = await filterSeacrh(busqueda, filter)
    }
    else {
      res = await simpleMovie(busqueda)
    }

    let history

    if (sessionStorage.getItem('history')) {
      history = JSON.parse(sessionStorage.getItem('history'))
    } else {
      history = []
    }
    history.push({ name: busqueda })

    sessionStorage.setItem('history', JSON.stringify(history))

    setMovies(res.Search)
  }

  const mostrarPelicula = async (id) => {
    const res = await movieDetail(id)
    console.log(res)
    setMovie(res)
    setMovies([])
  }

  const home = (e) => {
    setMovie(null);
    setMovies([]);
    sessionStorage.removeItem('history');
  };




  return (
    <>
      <SearchBar handleSearch={handleSearch} home={home} />
      {
        movies.map((pelicula) => (
          <MovieCard key={pelicula.imdbID} pelicula={pelicula} mostrarPelicula={mostrarPelicula} />
        ))
      }

      {movie && <MovieDetail movie={movie} />}
    </>
  )
}

export default App
