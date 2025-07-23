import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Box, CircularProgress, Button } from '@mui/material';
import '../css/FilmCard.css';
import { FaPlay } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToWatchLater } from '../redux/slices/watchLaterSlice';
import { PiFilmSlateDuotone } from "react-icons/pi";

const FilmDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const trailerRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/movies/${id}`)
      .then((res) => setFilm(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  // Body arka plan rengini sadece FilmDetails açıkken değiştiriyoruz
  useEffect(() => {
    const originalBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#2c2c2c';

    return () => {
      document.body.style.backgroundColor = originalBg;
    };
  }, []);

  const scrollToTrailer = () => {
    if (trailerRef.current) {
      trailerRef.current.style.display = 'block';
      trailerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (!film) {
    return <Typography align="center" mt={5}>Film not found.</Typography>;
  }

  const hours = Math.floor(film.time / 60);
  const minutes = film.time % 60;

  return (
    <Box
      sx={{
        backgroundColor: "#2c2c2c",
        minHeight: "100vh",
        
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        paddingTop: "2rem"
      }}
    >
      <Box
        style={{
          background: "#444",
          width: "1200px",
          borderRadius: '8px',
          padding: '2rem'
        }}
      >
        {/* Poster ve Bilgiler */}
        <Box sx={{ height: '750px', alignItems: 'start' }} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
          {/* Poster */}
          <Box
            sx={{
              maxHeight: '100%',
              width: { xs: '100%', md: '40%' },
              maxWidth: '400px',
              aspectRatio: '2 / 3',
              borderRadius: '8px',
              overflow: 'hidden',
              flexShrink: 0
            }}
          >
            <img
              src={film.poster}
              alt={film.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </Box>

          {/* Bilgi Alanı */}
          <Box sx={{ color: "white" }} display="flex" flexDirection="column" flex={1}>
            <Typography variant="h4" gutterBottom>{film.title}</Typography>
            <Typography variant="body1"><strong>Year:</strong> {film.year}</Typography>
            <Typography variant="body1"><strong>IMDb Rating:</strong> {film.imdb ?? 'N/A'}</Typography>
            <Typography variant="body1" mt={2}><strong>Plot:</strong> {film.plot}</Typography>
            <Typography variant="body1" mt={2}>
              <strong>Time:</strong> {hours > 0 ? `${hours} saat ` : ''}{minutes} dakika
            </Typography>
            <Typography variant="body1" mt={2}>
              <strong>Genres:</strong> {film.genres.join(', ')}
            </Typography>
            <Typography variant="body1" mt={2}>
              <strong>Director:</strong> {film.director}
            </Typography>
            <Typography variant="body1" mt={2}>
              <strong>Actors:</strong> {film.actors.join(', ')}
            </Typography>

            {/* Butonlar */}
            <Box mt={4} display="flex" alignItems="center" gap="30px">
              <button className="trailer-btn" onClick={scrollToTrailer}>
                <FaPlay style={{ fontSize: '20px' }} />
                <span className="title"></span>
              </button>
              <button className="trailer-btn" onClick={() => dispatch(addToWatchLater(film))}>
              <PiFilmSlateDuotone style={{ fontSize: '20px' }}  />
            
             <span className="title"></span>
            </button>
            </Box>
          </Box>
        </Box>

        {/* Trailer */}
        <Box
          ref={trailerRef}
          className="trailer-container"
          style={{ display: 'none', padding: '2rem' }}
        >
          <iframe
            src={film.trailer}
            title="Film Fragmanı"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default FilmDetails;
