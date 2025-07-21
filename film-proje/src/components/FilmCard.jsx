// src/components/FilmCard.jsx
import React from 'react';
import '../css/FilmCard.css'; // flip effect buraya

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const FilmCard = ({ film }) => {
  return (
    <div className="card">
      <div className="card-inner">
        {/* Ön Yüz */}
        <div className="card-front">
          <Card
  elevation={0}
  sx={{
    border: 'none',
    boxShadow: 'none',
    width: 250,      // kesin genişlik
    height: 450,     // kesin yükseklik
  }}
>
  <CardMedia
    component="img"
    image={film.poster}
    alt={film.title}
    sx={{
      width: '100%',     // kartın genişliği kadar
      height: 350,       // istediğin yükseklik
      objectFit: 'cover', // resmi kart alanına tam doldur ve kes
      display: 'block',  // inline img sorunlarını önlemek için
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
          <Card style={{ border: "none", boxShadow: "none" }} sx={{maxWidth: 250, height: 400, bgcolor: '#8b5cf6', color: 'white',display:'flex',flexDirection:'column', justifyContent: 'center', alignItems:'center' }}>
            <CardContent >
              <Typography variant="h6" sx={{ textAlign: 'center' }}>{film.title}</Typography>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>{film.plot}</Typography>
              <Typography variant="caption" sx={{textAlign: 'center', width: '100%', display: 'block'}}>Year: {film.year}</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
