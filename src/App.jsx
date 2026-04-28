import { useState } from 'react'
import './App.css'
import SearchBar from "./SearchBar.jsx"
import { simpleMovie, movieDetail, filterSeacrh } from './api.jsx'
import MovieCard from './MovieCard.jsx'
import MovieDetail from './MovieDetail.jsx'
import { useTheme } from './themeContext.jsx';

function App() {
  const { theme, toggleTheme } = useTheme();
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
    setMovie(res)
    setMovies([])
  }

  const home = (e) => {
    setMovie(null);
    setMovies([]);
    sessionStorage.removeItem('history');
  };




  return (
    <div className={theme}>
      <SearchBar handleSearch={handleSearch} home={home} />
      <div className="movie-grid">
        {
          (movies && movies.map((pelicula) => (
            <MovieCard key={pelicula.imdbID} pelicula={pelicula} mostrarPelicula={mostrarPelicula} />
          )))
        }
      </div>

      {movie && <MovieDetail movie={movie} />}
    </div>
  )
}

export default App
