import React from 'react';
import '../css/FilmCard.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const FilmCardCarousel = ({ film }) => {
  const cardWidth = 300;
  const cardHeight = 500;
  const imageHeight = 500; // poster tam kaplasın diye yüksekliği arttırdım
  const imageFit = 'cover'; // poster tam doldursun

  return (
    <Link to={`/film-details/${film.id}`} style={{ textDecoration: 'none', cursor: 'pointer' }}>
      <div
        className="card"
        style={{ width: cardWidth, height: cardHeight, cursor: 'pointer', border: 'none' }}
        onClick={(e) => e.stopPropagation()} // sadece link tıklaması aktif, hover yok
      >
        <div className="card-inner" style={{ transform: 'none' /* hover flip kapalı */ }}>
          {/* Ön Yüz */}
          <div className="card-front" style={{ position: 'relative', zIndex: 2 }}>
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

          {/* Arka Yüz (Carousel'de yok) */}
          {/* Back side tamamen kaldırıldı, hover flip yok */}
        </div>
      </div>
    </Link>
  );
};

export default FilmCardCarousel;
