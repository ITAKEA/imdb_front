// src/components/MovieList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title} - 
            <Link to={`/movie/${movie.id}`}>Details</Link> | 
            <Link to={`/edit/${movie.id}`}>Edit</Link> | 
            <Link to={`/delete/${movie.id}`}>Delete</Link>
          </li>
        ))}
      </ul>
      <Link to="/create">Add New Movie</Link>
    </div>
  );
}

export default MovieList;
