import "./MovieCard.css"
import { useState } from "react"


function MovieCard({ pelicula, mostrarPelicula }) {

    const [hovered, setHovered] = useState(false)

    const handleClick = () => {
        mostrarPelicula(pelicula.imdbID)
    }


    return (
        <section>
            <div className="movie-card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

                <img src={pelicula.Poster} alt="Poster" onClick={handleClick} className="movie-card-poster" />
                <p className="movie-card-title">{pelicula.Title}</p>
                <p className="movie-card-year">{pelicula.Year}</p>
                <p className="movie-card-type">{pelicula.Type}</p>

            </div>

            {hovered && (
                <div className="movie-card-popup">
                    <p className="popup-title">{pelicula.Title}</p>
                    <p className="popup-year">{pelicula.Year}</p>
                    <p className="popup-type">{pelicula.Type}</p>
                    <p className="popup-id">{pelicula.imdbID}</p>
                    <span className="popup-hint">Click para ver detalles</span>
                </div>
            )}
        </section>

    )

}

export default MovieCard