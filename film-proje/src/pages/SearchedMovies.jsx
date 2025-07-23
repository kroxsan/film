import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FilmCard from '../components/FilmCard';
import { Box } from '@mui/material';

function useQuery() {
   return new URLSearchParams(useLocation().search);
}

const SearchedMovies = () => {
   const query = useQuery().get('query')?.toLowerCase() || '';
   const films = useSelector(state => state.movie.items);

   // filtrele
   const filteredFilms = films.filter(film =>
      film.title.toLowerCase().includes(query)
   );

   useEffect(() => {
      const originalBg = document.body.style.backgroundColor;
      document.body.style.backgroundColor = '#2c2c2c';

      return () => {
      document.body.style.backgroundColor = originalBg;
      };
   }, []);

   return (
      <Box display="flex" flexWrap="wrap" justifyContent="center" p={3} sx={{margin: '103px auto 0 auto'}}>
         {filteredFilms.length > 0 ? (
         filteredFilms.map(film => (
            <FilmCard key={film.id} film={film} />
         ))
         ) : (
         <p style={{ color: 'black' }}>No movies found for <strong>{query}</strong></p>
         )}
      </Box>
   );
};

export default SearchedMovies;