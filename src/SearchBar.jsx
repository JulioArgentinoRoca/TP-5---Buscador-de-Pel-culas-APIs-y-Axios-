import { useState } from 'react'
import "./SearchBar.css"
import lupaIcon from './img/lupa.png'

function SearchBar({ handleSearch }) {

    const [busqueda, setBusqueda] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(busqueda)
    }

    return (
        <div className="search-bar-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        name="searchBar"
                        placeholder="Busca una película..."
                        id="peliculaInput"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="search-input"
                    />
                </div>
                <button type="submit" className="search-button">
                    <img className="search-icon" src={lupaIcon} alt="Buscar" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar