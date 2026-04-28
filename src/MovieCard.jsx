import "./MovieCard.css"

function MovieCard({ pelicula, mostrarPelicula }) {

    const handleClick = () => {
        mostrarPelicula(pelicula.imdbID)
    }


    return (
        <section onClick={handleClick}>

            <img src={pelicula.Poster} alt="Poster" />
            <p>{pelicula.Title}</p>
            <p>{pelicula.Year}</p>
            <p>{pelicula.Type}</p>

        </section>
    )

}

export default MovieCard