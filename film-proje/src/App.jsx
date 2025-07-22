// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageContainer from './container/PageContainer'
import FilmDetails from './pages/FilmDetails';

import './App.css'
import Header from './components/Header' // ayrica headerda bootstaps kullandim JS ve CSS olarak

function App() {
   return (
      <BrowserRouter>
         <Header />
         <PageContainer>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/film-details/:id" element={<FilmDetails />} />
            </Routes>
         </PageContainer>
      </BrowserRouter>
   );
}

export default App;
