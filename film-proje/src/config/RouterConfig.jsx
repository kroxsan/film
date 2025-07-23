import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import FilmDetails from '../pages/FilmDetails'
import SearchedMovies from '../pages/SearchedMovies'
import WatchList from '../pages/watchList'



function RouterConfig() {
   return (
      <div>
         <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/film-details/:id' element = {<FilmDetails/>}/>
            <Route path='/search' element = {<SearchedMovies/>}/>
            <Route path="/watchlist" element={<WatchList />} />

         </Routes>
      </div>
   )
}

export default RouterConfig