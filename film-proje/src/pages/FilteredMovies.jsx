import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LiaHandMiddleFingerSolid } from "react-icons/lia";
import FilmCard from '../components/FilmCard';
import { Box } from '@mui/material';

function FilteredMovies() {

   useEffect(() => {
      const originalBg = document.body.style.backgroundColor;
      document.body.style.backgroundColor = '#2c2c2c';
  
      return () => {
        document.body.style.backgroundColor = originalBg;
      };
   }, []);

  const filteredMovies = useSelector(state => state.filter.filteredMovies);

   if (filteredMovies.length === 0) {
      return <div style={{fontSize: '19px', textAlign:'center', color: 'grey', padding: '24px', margin: '103px auto 0 auto'}}>No movies found.</div>;
  }

   return (
      <div>
         <Box display="flex" flexWrap="wrap" justifyContent="center" p={3}>
            {filteredMovies.map(movie => (
               <FilmCard key={movie.id} film={movie} />
         ))}
         </Box>
      </div>
   );
}

export default FilteredMovies;
