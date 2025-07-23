import React from 'react';
import '../css/FilmCard.css';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToWatchLater } from '../redux/slices/watchLaterSlice';

const FilmCard = ({ film }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cardWidth = 250;
  const cardHeight = 450;
  const imageHeight = 350;
  const imageFit = 'cover';

  const handleAddToWatchLater = (e) => {
    e.preventDefault();
    dispatch(addToWatchLater(film));
  };

  const handleGoToWatchlist = (e) => {
    e.preventDefault();
    navigate('/watchlist');
  };

  return (
    <Link to={`/film-details/${film.id}`} style={{ textDecoration: 'none' }}>
      <div className="card" style={{ width: cardWidth, height: cardHeight }}>
        <div className="card-inner">
          {/* Ön Yüz */}
          <div className="card-front">
            <Card
              elevation={0}
              sx={{
                border: 'none',
                boxShadow: 'none',
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <CardMedia
                component="img"
                image={film.poster}
                alt={film.title}
                sx={{
                  width: '100%',
                  height: imageHeight,
                  objectFit: imageFit,
                  display: 'block',
                }}
              />
              <CardContent sx={{ padding: '0.5rem 1rem' }}>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  {film.title}
                </Typography>
                <Typography variant="caption" sx={{ textAlign: 'center', display: 'block' }}>
                  Year: {film.year}
                </Typography>
              </CardContent>
            </Card>
          </div>

          {/* Arka Yüz */}
          <div className="card-back">
            <Card
              elevation={0}
              sx={{
                border: 'none',
                boxShadow: 'none',
                maxWidth: cardWidth,
                height: cardHeight - 100,
                bgcolor: '#960000ff',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6">{film.title}</Typography>
                <Typography variant="body2">{film.plot}</Typography>
                <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
                  Year: {film.year}
                </Typography>

                <Button
                  onClick={handleAddToWatchLater}
                  variant="contained"
                  size="small"
                  sx={{ mt: 2, bgcolor: 'white', color: '#f65c5cff', '&:hover': { bgcolor: '#ddd' } }}
                >
                  Watch Later
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
