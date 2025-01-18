import React from "react";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.posterURL} alt={movie.title} style={{ width: "200px" }} />
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
    <p>⭐ {movie.rating}</p>
  </div>
);

export default MovieCard;
