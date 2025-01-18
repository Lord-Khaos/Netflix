import React, { useState } from "react";
import MovieList from "./component/MovieList";
import Filter from "./component/Filter";
import AddMovieForm from "./component/AddMovieForm";
import "./index.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://www.google.com/imgres?q=inception%20&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw%40%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt1375666%2F&docid=xTQ-svvkUc9QrM&tbnid=TLq3nxfI4q0PQM&vet=12ahUKEwiEseu5lv-KAxVOW0EAHcSyOIUQM3oECHkQAA..i&w=1404&h=2048&hcb=2&ved=2ahUKEwiEseu5lv-KAxVOW0EAHcSyOIUQM3oECHkQAA",
      rating: 5,
    },
    {
      title: "The Dark Knight",
      description: "A heroic saga",
      posterURL: "https://www.google.com/imgres?q=dark%20knight&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw%40%40._V1_FMjpg_UX1000_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt1345836%2F&docid=7lVgZVyPfY6uMM&tbnid=SkdsNzvqpnC66M&vet=12ahUKEwi676mWlv-KAxVpTkEAHceIBNkQM3oECBcQAA..i&w=1000&h=1481&hcb=2&ved=2ahUKEwi676mWlv-KAxVpTkEAHceIBNkQM3oECBcQAA",
      rating: 4.5,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (!rating || movie.rating >= rating)
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div className="container">
      <h1 className="header">Netflix</h1>
      <Filter onFilter={handleFilter} />
      <AddMovieForm onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
