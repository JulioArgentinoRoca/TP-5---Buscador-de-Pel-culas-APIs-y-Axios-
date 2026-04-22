import './MovieList.css'

const MovieList = () => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get('/movies')
            .then(response => {
                setMovies(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching movies:', error)
                setLoading(false)
            })
    } , [])

	if (loading) return <p className="no-results">Cargando resultados...</p>

	return (
		<div className="movie-list">
			{movies.map((movie, index) => (
				<div className="movie-item" key={movie.id || index}>
					{movie.Poster && movie.Poster !== 'N/A' ? (
						<img className="movie-poster" src={movie.Poster} alt={movie.Title} />
					) : (
                        <div className="movie-placeholder">No hay imagen</div>
                    )}

					<div className="movie-info">
						<h3 className="movie-title">{movie.Title}</h3>
						<div className="movie-extra">
							<span className="movie-year">{movie.Year}</span>
							<span className="movie-type">{movie.Type}</span>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default MovieList;