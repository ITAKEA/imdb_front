// src/components/CreateMovie.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateMovie() {
  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState({
    title: '',
    year: 0,
    length: 0,
    subject: '',
    popularity: 0,
    awards: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/movies', newMovie)
      .then(() => navigate('/'))
      .catch(error => console.error('Error creating movie:', error));
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setNewMovie({ ...newMovie, [e.target.name]: value });
  };

  return (
    <div>
  <h2>Create New Movie</h2>
  <form onSubmit={handleSubmit}>
    <div>
      <label>Title:</label>
      <input
        name="title"
        value={newMovie.title}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>Year:</label>
      <input
        type="number"
        name="year"
        value={newMovie.year}
        onChange={handleChange}
        min="1800"
        max={new Date().getFullYear()}
      />
    </div>
    <div>
      <label>Length (minutes):</label>
      <input
        type="number"
        name="length"
        value={newMovie.length}
        onChange={handleChange}
        min="1"
      />
    </div>
    <div>
      <label>Subject:</label>
      <input
        name="subject"
        value={newMovie.subject}
        onChange={handleChange}
      />
    </div>
    <div>
      <label>Popularity (0-100):</label>
      <input
        type="number"
        name="popularity"
        value={newMovie.popularity}
        onChange={handleChange}
        min="0"
        max="100"
      />
    </div>
    <div>
      <label>Awards:</label>
      <input
        type="checkbox"
        name="awards"
        checked={newMovie.awards}
        onChange={handleChange}
      />
    </div>
    <button type="submit">Create Movie</button>
  </form>
</div>

  );
}

export default CreateMovie;
