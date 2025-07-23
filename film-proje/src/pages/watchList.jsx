import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWatchLater } from '../redux/slices/watchLaterSlice';
import { useNavigate } from 'react-router-dom';

function WatchList() {
  const watchList = useSelector((state) => state.watchLater.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Watch Later List</h1>
      {watchList.length === 0 ? (
        <p>List is empty.</p>
      ) : (
        watchList.map((movie) => (
          <div key={movie.id} style={{ display: 'flex', marginBottom: '20px' }}>
            <img src={movie.poster} width={100} alt="" />
            <div style={{ marginLeft: '20px' }}>
              <h3>{movie.title}</h3>
              <button onClick={() => navigate(`/film-details/${movie.id}`)}>Detaya Git</button>
              <button onClick={() => dispatch(removeFromWatchLater(movie.id))} style={{ marginLeft: '10px', background: 'red', color: 'white' }}>Sil</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default WatchList;
