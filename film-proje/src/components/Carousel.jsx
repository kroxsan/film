import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FilmCardCarousel from './FilmCardCarousel';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Carousel = () => {
  const { items: films } = useSelector((state) => state.movie);
  const scrollRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(5);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1200) setCardsPerView(5);
      else if (width >= 900) setCardsPerView(4);
      else if (width >= 600) setCardsPerView(3);
      else setCardsPerView(2);
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const topRatedFilms = [...films]
    .filter(film => !isNaN(Number(film.imdb)))
    .sort((a, b) => Number(b.imdb) - Number(a.imdb))
    .slice(0, 10);

  const scrollAmount = () => {
    if (!scrollRef.current) return 0;
    return scrollRef.current.offsetWidth;
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        mt: 4,
        mb: 4,
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#212529',
        boxShadow: '0 0 33px rgba(255, 60, 60, 0.4)'
      }}
    >
      {/* Sol yön butonu */}
      <IconButton
        onClick={scrollLeft}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          color: 'white',
          boxShadow: 1,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
          },
        }}
        aria-label="scroll left"
      >
        <ChevronLeft />
      </IconButton>

      {/* Scrollable film listesi */}
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: 2,
          px: 3,
          py: 1,
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {topRatedFilms.map(film => (
          <Box
            key={film.id}
            sx={{
              flex: `0 0 calc((100% - ${(cardsPerView - 1) * 16}px) / ${cardsPerView})`,
              scrollSnapAlign: 'start',
              '&:hover': {
                transform: 'translateY(-5px)',
                transition: 'transform 0.35s ease',
              },
            }}
          >
            <FilmCardCarousel film={film} />
          </Box>
        ))}
      </Box>

      {/* Sağ yön butonu */}
      <IconButton
        onClick={scrollRight}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          color: 'white',
          boxShadow: 1,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
          },
        }}
        aria-label="scroll right"
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default Carousel;
