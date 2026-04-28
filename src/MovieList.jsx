import './MovieList.css'
import React,{ useState, useEffect } from 'react'
import {simpleMovie} from './api.jsx'

const MovieList = () => {

    const [movies, setMovies] = useState([])
    //const [loading, setLoading] = useState(true)

	return (
		<div className="movie-list">
			<h2>Peliculas de la api</h2>
			<ul>
				{(movies && movies.map((simpleMovie) => (
					<li className="movie-item" key={simpleMovie.id}>
						
						<img className="movie-poster" src={simpleMovie.Poster} alt={simpleMovie.Title} />
						
						<div className="movie-placeholder">No hay imagen</div>
						

						<div className="movie-info">
							<h3 className="movie-title">{simpleMovie.Title}</h3>
							<div className="movie-extra">
								<span className="movie-year">{simpleMovie.Year}</span>
								<span className="movie-type">{simpleMovie.Type}</span>
							</div>
						</div>
					</li>
				)))}
			</ul>			
		</div>
	)
}

export default MovieList;