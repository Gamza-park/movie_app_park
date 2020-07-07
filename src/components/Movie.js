import React from "react";
import {Link } from "react-router-dom";
import PropType from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
    return (
        <div className="movies_movie">
            <Link to={{
                    pathname: `/movie/${id}`,
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres
                        }
                    }}
                >
            
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="movie_genres">
                        {genres.map((genres, index) =>(
                            <li key={index} className="generes_generes">{genres}</li>
                        ))}
                    </ul>
                    <p className="movie_summary">{summary.slice(0,180)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.PropType = {
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired
};

export default Movie;