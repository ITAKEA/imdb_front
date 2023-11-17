// src/components/MovieDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Length: {movie.length} minutes</p>
      <p>Subject: {movie.subject || 'N/A'}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>Awards: {movie.awards ? 'Yes' : 'No'}</p>  
    </div>
  );
}

export default MovieDetails;
