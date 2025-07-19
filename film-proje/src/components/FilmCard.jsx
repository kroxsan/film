// src/components/FilmCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const FilmCard = ({ film }) => {
  return (
    <Card sx={{ maxWidth: 250, m: 2 }}>
      <CardMedia
        component="img"
        height="350"
        image={film.poster}
        alt={film.title}
      />
      <CardContent>
        <Typography variant="h6">{film.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          Year: {film.year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FilmCard;
