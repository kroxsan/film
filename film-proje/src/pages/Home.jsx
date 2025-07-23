import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../redux/slices/movieSlice';
import FilmCard from '../components/FilmCard';
import { Box, CircularProgress, Typography } from '@mui/material';
import Carousel from '../components/Carousel';


const Home = () => {
  const dispatch = useDispatch();
  const { items: films, status, error } = useSelector(state => state.movie);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFilms());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <Box textAlign="center"><CircularProgress /></Box>;
  }

  if (status === 'failed') {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <div>
    <Carousel />    
    <Box display="flex" flexWrap="wrap" justifyContent="center" p={3}>
      {films.map(film => (
        <FilmCard key={film.id} film={film} />
      ))}
    </Box>
    </div>
  );
};

export default Home;