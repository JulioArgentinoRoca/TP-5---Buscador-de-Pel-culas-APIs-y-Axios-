import { useState } from 'react'
import "./SearchBar.css"

function SearchBar({ handleSearch, home }) {
    const [theme, setTheme] = useState();
    const [mostrarPopUp, setMostrarPopUp] = useState(false)
    const [busqueda, setBusqueda] = useState("")
    const [filter, setFilter] = useState()

    const displayHistory = () => {
        let historyArray = JSON.parse(sessionStorage.getItem('history'))
        if (!historyArray) return <></>

        return historyArray.map((item) => (
            <span className="history-item">{item.name}</span>
        ))
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(busqueda, filter)
    }

    const toggleFilters = (e) => {
        e.preventDefault()
        setMostrarPopUp(!mostrarPopUp)
    }

    return (
        <section className="search-bar-section">


            <div className="search-bar-container">
                <form className="search-form">
                    <input type="text" className="search-input" placeholder="Busca una pelicula..." id="peliculaInput" onChange={(e) => setBusqueda(e.target.value)} />
                    <button className="filter-button" type="button" onClick={toggleFilters}>⚙️</button>
                    <button className="submit-button" type="submit" onClick={handleSubmit}>🔍</button>

                    {
                        mostrarPopUp && (
                            <div id='popUp' className="popup-estilo">
                                <input type="radio" value={"movie"} name='filter' onChange={(e) => setFilter(e.target.value)} /><p>Movie</p>
                                <input type="radio" value={"series"} name='filter' onChange={(e) => setFilter(e.target.value)} /><p>Series</p>
                                <input type="radio" value={"episode"} name='filter' onChange={(e) => setFilter(e.target.value)} /><p>Episode</p>
                            </div>
                        )
                    }
                    <button className="clear-button" type="submit" onClick={home}>Clear All</button>
                </form>
            </div>

            <div className="history-section">
                {displayHistory()}
            </div>
        </section>

    )
}

export default SearchBar