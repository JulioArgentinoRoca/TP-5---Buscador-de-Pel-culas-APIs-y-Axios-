import "./SearchBar.css"

function SearchBar() {

    const handleSubmit = () => {
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Busca una pelicula..." id="peliculaInpu" />
                <button><img src="./img/lupa.png" alt=""/></button>
            </form>
        </div>
    )
}

export default SearchBar