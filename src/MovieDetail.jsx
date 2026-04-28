import "./MovieDetail.css"

function MovieDetail({movie}){

    return (

        <section>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt="" />
            <p>{movie.Released}</p>
            <p>{movie.Genre}</p>
            <p>{movie.Director}</p>
            <p>{movie.Actors}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Runtime}</p>
            <p>{movie.Language}</p>
            <p>{movie.Country}</p>
            <p>{movie.imdbRating || ""}</p>

          
        </section>
    )
}

export default MovieDetail