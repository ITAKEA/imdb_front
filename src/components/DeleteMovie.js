// src/components/DeleteMovie.js
import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteMovie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/movies/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error('Error deleting movie:', error));
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Delete Movie</h2>
      <p>Are you sure you want to delete this movie?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={handleCancel}>No, Cancel</button>
    </div>
  );
}

export default DeleteMovie;
