// App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PageContainer from './container/PageContainer'
import Header from './components/Header' // ayrica headerda bootstaps kullandim JS ve CSS olarak
import RouterConfig from './config/RouterConfig';


import { fetchFilms } from './redux/slices/movieSlice';
import { setAllMovies } from './redux/slices/filterSlice';

import './App.css'
import Loading from './components/Loading';

function App() {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchFilms()).then(({ payload }) => {
         dispatch(setAllMovies(payload));
      });
   }, [dispatch]);

   return (
      <div>
         <Header />
         <PageContainer>
            <RouterConfig/>
            <Loading/>
         </PageContainer>
      </div>
   );
}

export default App;