import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWatchLater } from '../redux/slices/watchLaterSlice';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function WatchList() {

      useEffect(() => {
         const originalBg = document.body.style.backgroundColor;
         document.body.style.backgroundColor = '#2c2c2c';
   
         return () => {
         document.body.style.backgroundColor = originalBg;
         };
      }, []);

   const watchList = useSelector((state) => state.watchLater.list);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   return (
      <Box sx={{ minHeight: '100vh', backgroundColor: '#2c2c2c', padding: '2rem', margin: '83px auto 0 auto' }}>
         <Typography
         variant="h4"
         color="white"
         gutterBottom
         sx={{ textAlign: 'start', mb: 4 }}
         >
         Watch Later List
         </Typography>

         {watchList.length === 0 ? (
         <Typography color="white" textAlign="center">
            List is empty.
         </Typography>
         ) : (
         watchList.map((movie) => (
            <Box
               key={movie.id}
               sx={{
               display: 'flex',
               gap: 2,
               mb: 3,
               backgroundColor: '#444',
               padding: 2,
               borderRadius: '8px',
               alignItems: 'center'
               }}
            >
               {/* Poster */}
               <Box
               sx={{
                  width: '170px',
                  height: '255px',
                  flexShrink: 0,
                  borderRadius: '4px',
                  overflow: 'hidden'
               }}
               >
               <img
                  src={movie.poster}
                  alt={movie.title}
                  style={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover'
                  }}
               />
               </Box>

               {/* Info & Buttons */}
               <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, color: 'white' }}>
               <Typography variant="h4">{movie.title}</Typography>

               <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                  <Button
                     variant="contained"
                     color="primary"
                     onClick={() => navigate(`/film-details/${movie.id}`)}
                     sx={{backgroundColor: 'grey', '&:hover': {
                        backgroundColor: '#A29415'
                     }}}
                  >
                     Go to Details
                  </Button>
                  <IconButton aria-label="delete" size="large">
                     <DeleteIcon onClick={() => dispatch(removeFromWatchLater(movie.id))} 
                     fontSize="inherit" sx={{color: 'grey', '&:hover': {
                        color: 'red'
                     }}}/>
                  </IconButton>
               </Box>
               </Box>
            </Box>
         ))
         )}
      </Box>
   );
}

export default WatchList;
