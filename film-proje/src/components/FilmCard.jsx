import React from 'react';
import '../css/FilmCard.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const FilmCard = ({ film }) => {
  return (
    <Link to={`/film-details/${film.id}`} style={{ textDecoration: 'none' }}>
      <div className="card">
        <div className="card-inner">
          {/* Ön Yüz */}
          <div className="card-front">
            <Card elevation={0} sx={{
              border: 'none',
              boxShadow: 'none',
              width: 250,
              height: 450,
            }}>
              <CardMedia
                component="img"
                image={film.poster}
                alt={film.title}
                sx={{
                  width: '100%',
                  height: 350,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <CardContent sx={{ padding: '0.5rem 1rem' }}>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>{film.title}</Typography>
                <Typography variant="caption" sx={{ textAlign: 'center', display: 'block' }}>Year: {film.year}</Typography>
              </CardContent>
            </Card>
          </div>

          {/* Arka Yüz */}
          <div className="card-back">
            <Card elevation={0} sx={{
              border: 'none',
              boxShadow: 'none',
              maxWidth: 250,
              height: 400,
              bgcolor: '#8b5cf6',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>{film.title}</Typography>
                <Typography variant="body2" sx={{ textAlign: 'center' }}>{film.plot}</Typography>
                <Typography variant="caption" sx={{ textAlign: 'center', width: '100%', display: 'block' }}>Year: {film.year}</Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
