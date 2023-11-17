// src/components/EditMovie.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditMovie() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({
        title: '',
        year: 0,
        length: 0,
        subject: '',
        popularity: 0,
        awards: false
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/api/movies/${id}`)
            .then(response => setMovie(response.data))
            .catch(error => console.error('Error fetching movie:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/movies/${id}`, movie)
            .then(() => navigate('/'))
            .catch(error => console.error('Error updating movie:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setMovie({ ...movie, [e.target.name]: value });
    };

    return (
        <div>
            <h2>Edit Movie</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        name="title"
                        value={movie.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Year:</label>
                    <input
                        type="number"
                        name="year"
                        value={movie.year}
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
                        value={movie.length}
                        onChange={handleChange}
                        min="1"
                    />
                </div>
                <div>
                    <label>Subject:</label>
                    <input
                        name="subject"
                        value={movie.subject || ''}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Popularity (0-100):</label>
                    <input
                        type="number"
                        name="popularity"
                        value={movie.popularity}
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
                        checked={movie.awards}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Movie</button>
            </form>
        </div>

    );
}

export default EditMovie;
