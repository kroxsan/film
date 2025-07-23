import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, applyFilters } from '../redux/slices/filterSlice';

import logo from '../icons/logo.png';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { BiFilm } from 'react-icons/bi';
import { styled } from '@mui/material/styles';

import Collapse from 'bootstrap/js/dist/collapse';

const StyledSelect = styled(Select)(({ theme }) => ({
   '& .MuiOutlinedInput-notchedOutline': {
     borderColor: 'grey',
   },
   '&:hover .MuiOutlinedInput-notchedOutline': {
     borderColor: 'darkred',
   },
   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
     borderColor: 'red',
   },
 
   '& .MuiSelect-icon': {
     color: 'grey',
   },
   '&:hover .MuiSelect-icon': {
     color: 'darkred',
   },
   '&.Mui-focused .MuiSelect-icon': {
     color: 'red',
   },
 
   // Yazı rengi için
   '& .MuiSelect-select': {
     color: 'grey',
   },
   '&:hover .MuiSelect-select': {
     color: 'darkred',
   },
   '&.Mui-focused .MuiSelect-select': {
     color: 'red',
   },
 }));

function Header() {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   // guncel genrelari al
   const allGenres = useSelector(state => state.filter.allGenres);
   // Esit sutunlara bol
   const col1 = allGenres.slice(0, Math.ceil(allGenres.length / 3));
   const col2 = allGenres.slice(Math.ceil(allGenres.length / 3), Math.ceil(2 * allGenres.length / 3));
   const col3 = allGenres.slice(Math.ceil(2 * allGenres.length / 3));

   const handleFilterClick = () => {
      dispatch(setFilters({
         genres: selectedGenres,
         yearMin: yearRange[0],
         yearMax: yearRange[1],
         duration: durationFilter,
         imdb: rating,
      }));
      dispatch(applyFilters());

      const collapseElement = document.getElementById('navbarToggleExternalContent');
      if (collapseElement) {
         const bsCollapse = new Collapse(collapseElement, { toggle: false });
         bsCollapse.hide();
      }

      navigate('/filtered-movies');
   }

   const [selectedGenres, setSelectedGenres] = useState([]);
   const [yearRange, setYearRange] = useState([1995, 2025]);
   const [durationFilter, setDurationFilter] = useState('');
   const [rating, setRating] = useState(2);

   const watchLaterList = useSelector(state => state.watchLater.list);
   const watchLaterCount = watchLaterList.length;

   // for genre select
   const handleGenreChange = (genre) => {
      setSelectedGenres(prev => 
        prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
      );
    };    

   // search bar states
   const [searchValue, setSearchValue] = useState("");
   // for search bar
   const handleSearch = (e) => {
      if (e.key === 'Enter') {
        navigate(`/search?query=${encodeURIComponent(searchValue)}`);
        setSearchValue('');
      }
   };

  return (
    <div>
      {/* Header */}
      <div className="header d-flex align-items-center bg-dark p-2">
        <div onClick={() => navigate('/')} style={{ cursor: "pointer", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
          <img className="logo" src={logo} alt="logo" />
          <h3 style={{marginTop: '13px', color: 'rgb(255, 208, 0)'}}>CinePop</h3>
        </div>

        <div className="ms-auto d-flex align-items-center">
          <input
            type="text"
            placeholder="Enter a movie name..."
            className="rounded-input mx-2 me-3"
            style={{ maxWidth: '300px', padding: '3px 13px', outlineColor: 'red' }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch}
          />

          {/* WATCH LATER BADGE */}
          <IconButton
            onClick={() => navigate('/watchlist')}
            sx={{ 
              color: 'grey', 
              marginRight: '1rem',
              '&:hover': {
                color: 'white'
              }
            }}
            aria-label={`Watch later list: ${watchLaterCount} items`}
          >
            <Badge
              badgeContent={watchLaterCount}
              color="error"
              overlap="circular"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              max={10}
            >
              <BiFilm size={27} />
            </Badge>
          </IconButton>

          <button
            className="navbar-toggler navbar-dark mx-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      {/* Collapse Content */}
      <div className="collapse" id="navbarToggleExternalContent" style={{margin: '73px auto 0 auto'}}>
        <div className="bg-dark p-4 collapse-content">

          {/*Accordion*/}
          <div className="accordion-wrapper">
                  <div className="accordion custom-accordion accordion-horizontal" id="accordionExample">
                     {/*Genre*/}
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                           <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                           >
                              Genres
                           </button>
                        </h2>
                        <div
                           id="collapseOne"
                           className="accordion-collapse collapse show"
                           aria-labelledby="headingOne"
                           data-bs-parent="#accordionExample"
                        >
                           <div className="accordion-body" style={{ display: 'flex', gap: '16px' }}>
                              {[col1, col2, col3].map((col, idx) => (
                                 <div key={idx} style={{ flex: 1 }}>
                                    {col.map((label) => (
                                       <FormControlLabel
                                          key={label}
                                          value={label}
                                          control={
                                             <Checkbox sx={{
                                                color: 'grey',
                                                '&.Mui-checked': { color: 'red' }
                                             }}
                                             checked={selectedGenres.includes(label)}
                                             onChange={() => handleGenreChange(label)}
                                             />
                                          }
                                          label={label}
                                          labelPlacement="end"
                                          sx={{
                                             '& .MuiFormControlLabel-label': {
                                                fontSize: '0.8rem',
                                             },
                                          }}
                                       />
                                    ))}
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                     
                     {/*Year*/}
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                           <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                           >
                              Year
                           </button>
                        </h2>
                        <div
                           id="collapseTwo"
                           className="accordion-collapse collapse"
                           aria-labelledby="headingTwo"
                           data-bs-parent="#accordionExample"
                           style={{padding: "30px 20px"}}
                        >
                           <div className="accordion-body">
                              <div style={{ width: 300, margin: '0 auto' }}>
                                 <Slider
                                    value={yearRange}
                                    onChange={(e, newValue) => setYearRange(newValue)}
                                    valueLabelDisplay="auto"
                                    min={1945}
                                    max={2025}
                                    step={5}
                                    disableSwap
                                    sx={{
                                       color: 'red'
                                    }}
                                 />
                                 <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: '0.9rem' }}>
                                    <span>1945</span>
                                    <span>2025</span>
                                 </div>
                                 <div style={{ color: 'white', marginTop: 8 }}>
                                    Selected: {yearRange[0]} - {yearRange[1]}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/*Duration*/}
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                           <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                           >
                              Duration
                           </button>
                        </h2>
                        <div
                           id="collapseThree"
                           className="accordion-collapse collapse"
                           aria-labelledby="headingThree"
                           data-bs-parent="#accordionExample"
                        >
                           <div className="accordion-body">
                              <StyledSelect
                              value={durationFilter}
                              onChange={(e) => setDurationFilter(e.target.value)}
                              displayEmpty
                              input={<OutlinedInput />}
                              renderValue={(selected) => {
                              if (!selected) {
                                 return 'All durations';
                              }
                              return selected;
                              }}
                              >
                                 <MenuItem value="">All durations</MenuItem>

                                 <MenuItem value="Short">Short (&lt; 90 min)</MenuItem>

                                 <MenuItem value="Medium">Medium (90-150 min)</MenuItem>

                                 <MenuItem value="Long">Long (&gt; 150 min)</MenuItem>
                              </StyledSelect>
                           </div>
                        </div>
                     </div>
                     
                     {/*IMDB*/}
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                           <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                           >
                              IMDB
                           </button>
                        </h2>
                        <div
                           id="collapseFour"
                           className="accordion-collapse collapse"
                           aria-labelledby="headingFour"
                           data-bs-parent="#accordionExample"
                        >
                           <div className="accordion-body">
                              <Box sx={{ '& > legend': { mt: 2 } }}>
                                 <Typography component="legend">Min: {rating}</Typography>
                                 <Rating
                                    name="imdb"
                                    value={rating}
                                    max={10}
                                    precision={0.5}  // yarım adımlar
                                    onChange={(event, newValue) => {
                                       setRating(newValue);
                                    }}
                                 />
                              </Box>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
               {/*Filter Button*/}
               <div className="filter-button-wrapper">
                  <button className="filter-button" onClick={handleFilterClick}>Filter</button>
               </div>
               
            </div>
         </div>
      </div>
   )
}

export default Header;
