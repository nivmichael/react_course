import { useState } from "react"

const Movies = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: "Spider Man", ratings: 8 },
        { id: 2, title: "Hulk", ratings: 4 }
    ])

    const handleClick = () => {
        setMovies(movies.map((m) => (m.id === 1 ? { ...movies, title: "whatever" } : m)))
    }

    return (
        <div>
            <ul>
                {movies.map(m => (
                    <li>{m.title}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Change movie</button>
        </div>
    )
}

export default Movies