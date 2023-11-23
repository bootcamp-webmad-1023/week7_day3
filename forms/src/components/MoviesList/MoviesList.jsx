import { useState } from "react"
import { moviesData } from "../../fakeAPI"
import MovieCard from "../MovieCard/MovieCard"
import NewMovieForm from "../NewMovieForm/NewMovieForm"
import MoviesFilter from '../MoviesFilter/MoviesFilter'

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesData)
    const [moviesBackup, setMoviesBackup] = useState(moviesData)

    const removeMovie = movieToDelete => {
        const newMovies = movies.filter(elm => elm._id != movieToDelete)
        setMovies(newMovies)

        const newBackupMovies = moviesBackup.filter(elm => elm._id != movieToDelete)
        setMoviesBackup(newBackupMovies)
    }

    const addMovie = newMovie => {
        const moviesCopy = [newMovie, ...movies]
        setMovies(moviesCopy)

        const moviesBackupCopy = [newMovie, ...moviesBackup]
        setMoviesBackup(moviesBackupCopy)
    }

    const filterMovies = firstLetter => {

        if (firstLetter === 'All') {
            setMovies(moviesBackup)
        } else {
            const filteredMovies = moviesBackup.filter(elm => elm.title.toUpperCase().startsWith(firstLetter))
            setMovies(filteredMovies)
        }
    }


    return (
        <section className="MoviesList">

            <h1>Nueva película</h1>

            <NewMovieForm addMovie={addMovie} />

            <hr />

            <MoviesFilter filterMovies={filterMovies} />

            <hr />

            <h1>Listado de películas</h1>
            {
                movies.map(eachMovie => {
                    return (
                        <MovieCard key={eachMovie._id} {...eachMovie} removeMovie={removeMovie} />
                    )
                })
            }
        </section>
    )
}

export default MoviesList