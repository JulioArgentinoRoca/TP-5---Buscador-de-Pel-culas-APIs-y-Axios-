import "./MovieCard.css"

function MovieCard({ pelicula, mostrarPelicula }) {

    const handleClick = () => {
        mostrarPelicula(pelicula.imdbID)
    }


    return (
        <section>

            <img src={pelicula.Poster} alt="Poster" onClick={handleClick}/>
            <p>{pelicula.Title}</p>
            <p>{pelicula.Year}</p>
            <p>{pelicula.Type}</p>
            <p>{pelicula.imdbID}</p>

        </section>
    )

}

export default MovieCard