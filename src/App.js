// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import EditMovie from './components/EditMovie';
import DeleteMovie from './components/DeleteMovie';
import CreateMovie from './components/CreateMovie';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/edit/:id" element={<EditMovie />} />
        <Route path="/delete/:id" element={<DeleteMovie />} />
        <Route path="/create" element={<CreateMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
