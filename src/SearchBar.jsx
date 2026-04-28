import { useState } from 'react'
import "./SearchBar.css"

function SearchBar({ handleSearch, home }) {

    const [mostrarPopUp, setMostrarPopUp] = useState(false)
    const [busqueda, setBusqueda] = useState("")
    const [filter, setFilter] = useState()

    const displayHistory = () =>{
        let historyArray = JSON.parse(sessionStorage.getItem('history'))
        if(!historyArray)return <></>

        return historyArray.map((item) => (
                /* Siempre usa una 'key' única al hacer maps */
                <p>{item.name}</p>
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
        <section>
            

            <div>
                <form>
                    <input type="text" name="searchBar" placeholder="Busca una pelicula..." id="peliculaInput" onChange={(e) => setBusqueda(e.target.value)} />
                    <button type="button" onClick={toggleFilters}>⚙️</button>
                    <button type="submit" onClick={handleSubmit}>🔍</button>

                    {
                        mostrarPopUp && (
                            <div id='popUp' className="popup-estilo">
                                <input type="radio" value={"movie"} name='filter' onChange={(e) => setFilter(e.target.value)} /><p>Movie</p>
                                <input type="radio" value={"series"} name='filter' onChange={(e) => setFilter(e.target.value)} /><p>Series</p>
                                <input type="radio" value={"episode"} name='filter' onChange={(e) => setFilter(e.target.value)} /><p>Episode</p>
                            </div>
                        )
                    }
                    <button type="submit" onClick={home}>Clear All</button>
                </form>
            </div>

            {displayHistory()}
        </section>

    )
}

export default SearchBar