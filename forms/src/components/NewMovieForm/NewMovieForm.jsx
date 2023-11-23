import { useState } from "react";

const NewMovieForm = ({ addMovie }) => {

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [IMDBRating, setIMDBRating] = useState(5);
    const [hasOscars, setHasOscars] = useState(false);

    const handleTitleValue = e => {
        const { value } = e.target
        setTitle(value)
    }

    const handleDirectorValue = e => {
        const { value } = e.target
        setDirector(value)
    }

    const handleRatingValue = e => {
        const { value } = e.target
        setIMDBRating(value)
    }

    const handleOscarsValue = e => {
        const { checked } = e.target
        setHasOscars(checked)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        const movie = { title, director, IMDBRating, hasOscars }
        addMovie(movie)
    }

    return (
        <div className="NewMovieForm" onSubmit={handleFormSubmit}>
            <form>
                Título: <input type="text" value={title} onChange={handleTitleValue} />
                <br /><br />

                Director: <input type="text" value={director} onChange={handleDirectorValue} />
                <br /><br />

                Puntuación: <input type="number" value={IMDBRating} onChange={handleRatingValue} />
                <br /><br />

                ¿Tuvo Oscar?: <input type="checkbox" checked={hasOscars} onChange={handleOscarsValue} />
                <br /><br />

                <input type="submit" value="Crear película" />
            </form>
        </div>
    );


}

export default NewMovieForm