import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = (props) => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>Movie Title: {props.movie.Title}</h3>
        <p>
          <strong>Released: </strong> {props.movie.Released}<br />
          <strong>Directed By: </strong> {props.movie.Director}<br />
          <strong>Genre:</strong> {props.movie.Genre}
        </p>
        <p><strong>Plot: </strong>{props.movie.Plot}</p>
        <div><strong>Poster: </strong><img src={props.movie.Poster} alt={props.movie.Title}/></div>
        <bnr />
      </div>
    </section>
  );
};

export default Movie;

