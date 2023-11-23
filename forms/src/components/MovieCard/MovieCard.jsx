
const MovieCard = ({ _id, title, director, IMDBRating, hasOscars, removeMovie }) => {

    return (
        <div className="MovieCard">
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {IMDBRating}</p>
            <p>{hasOscars ? '¡TUVO OSCAR!' : 'NO TUVO OSCAR :('}</p>
            <button className="btn-delete" onClick={() => removeMovie(_id)}>Eliminar película</button>
        </div>
    )
}

export default MovieCard