import { useState } from 'react'
import './App.css'
import SearchBar from "./SearchBar.jsx"

function App() {

  const [movies, setMovies] = useState[]

  const handleSearch = (busqueda) => {
    const res = await simpleMovie(busqueda)
    const data = res.json()
    setMovies(data)
  }

  return (
    <>
      <SearchBar handleSearch={handleSearch}/>
    </>
  )
}

export default App
