// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilmCard from '../components/FilmCard';
import { Box } from '@mui/material';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/movies')
      .then(res => setFilms(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" p={3}>
      {films.map(film => (
        <FilmCard key={film.id} film={film} />
      ))}
    </Box>
  );
};

export default Home;
