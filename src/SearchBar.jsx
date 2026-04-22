import { useState } from 'react'
import "./SearchBar.css"

function SearchBar({ handleSearch }) {

    const [busqueda, setBusqueda] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(busqueda)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchBar" placeholder="Busca una pelicula..." id="peliculaInput" onChange={(e) => setBusqueda(e.target.value)}/>
                <button type="submit"><img src="./img/lupa.png" alt="" /></button>
            </form>
        </div>
    )
}

export default SearchBar