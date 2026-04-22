import "./MovieCard.css"

function MovieCard({pelicula}){

    return(

        <section>

            <img src={pelicula.Poster} alt="Poster"/>
            <p>{pelicula.Title}</p>
            <p>{pelicula.Year}</p>
            <p>{pelicula.Type}</p>

        </section>
    )

}

export default MovieCard