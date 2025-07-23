import React from 'react';
import { useSelector } from 'react-redux';

import { Backdrop, Box, LinearProgress } from '@mui/material';
import { store } from '../redux/store';

function Loading() {
  const { status } = useSelector((store) => store.movie);

  return (
      <Backdrop
         sx={{
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            flexDirection: 'column',
         }}
         open={status === 'loading'}
      >
         <Box sx={{ width: '50%' }}>
         <LinearProgress color="inherit" />
         </Box>
      </Backdrop>
  );
}

export default Loading;
