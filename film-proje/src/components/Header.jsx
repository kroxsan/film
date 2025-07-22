import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

import logo from '../icons/logo.png';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Header() {

   const labels = [ "Action", "Adventure", "Alien Invasion","Animal Adventure",
      "Animation",
      "B-Horror",
      "Biography",
      "Body Horror",
      "Body Swap Comedy",
      "Boxing",
      "Buddy Comedy",
      "Buddy Cop",
      "Caper",
      "Comedy",
      "Coming-of-Age",
      "Computer Animation",
      "Conspiracy Thriller",
      "Contemporary Western",
      "Cop Drama",
      "Crime",
      "Cyberpunk",
      "Dark Comedy",
      "Dark Fantasy",
      "Desert Adventure",
      "Disaster",
      "Docudrama",
      "Drama",
      "Drug Crime",
      "Dystopian Sci-Fi",
      "Extreme Sport",
      "Family",
      "Fantasy",
      "Farce",
      "Feel-Good Romance",
      "Film Noir",
      "Football",
      "Gun Fu",
      "Hand-Drawn Animation",
      "High-Concept Comedy",
      "Horror",
      "Jungle Adventure",
      "Martial Arts",
      "Monster Horror",
      "Music",
      "Musical",
      "Mystery",
      "One-Person Army Action",
      "Parody",
      "Period Drama",
      "Psychological Drama",
      "Psychological Horror",
      "Psychological Thriller",
      "Quest",
      "Quirky Comedy",
      "Raunchy Comedy",
      "Road Trip",
      "Romance",
      "Romantic Comedy",
      "Satire",
      "Sci-Fi",
      "Serial Killer",
      "Slapstick",
      "Slasher Horror",
      "Sport",
      "Space Sci-Fi",
      "Spy",
      "Stoner Comedy",
      "Stop Motion Animation",
      "Supernatural Fantasy",
      "Supernatural Horror",
      "Suspense Mystery",
      "Teen Adventure",
      "Teen Comedy",
      "Teen Horror",
      "Thriller",
      "Time Travel",
      "Tragedy",
      "Urban Adventure",
      "Vampire Horror",
      "War",
      "Western"
   ];

   const col1 = labels.slice(0, 27);
   const col2 = labels.slice(27, 54);
   const col3 = labels.slice(54);

   const navigate = useNavigate();

   const [yearRange, setYearRange] = React.useState([1995, 2025]);
   
   const [durationFilter, setDurationFilter] = React.useState('');

   const [rating, setRating] = React.useState(2);

   // search bar states
   const [searchValue, setSearchValue] = useState("");
   // for search bar
   const handleSearch = (e) => {
      if (e.key === "Enter") {
         navigate(`/search?query=${encodeURIComponent(searchValue)}`);
         setSearchValue("");
      }
   }

   return (
      <div>
         {/* Header Satırı */}
         <div className="header d-flex align-items-center bg-dark p-2">
            <div onClick={() => navigate('/')} style={{cursor: "pointer"}}>
               <img className="logo" src={logo} alt="logo" />
            </div>

            <div className="ms-auto d-flex align-items-center">
               <input
                  type="text"
                  placeholder="Enter a movie name..."
                  className="rounded-input mx-2 me-3"
                  style={{ maxWidth: '300px' }}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={handleSearch}
               />

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

         {/* Collapse İçerik */}
         <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
               <h4 className="text-white">Filter</h4>

               {/*Accordion*/}
               <div className="accordion custom-accordion accordion-horizontal" id="accordionExample">
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
                           <div style={{ flex: 1 }}>
                              {col1.map((label) => (
                                 <FormControlLabel
                                 key={label}
                                 value={label}
                                 control={<Checkbox />}
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

                           <div style={{ flex: 1 }}>
                              {col2.map((label) => (
                                 <FormControlLabel
                                 key={label}
                                 value={label}
                                 control={<Checkbox />}
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

                           <div style={{ flex: 1 }}>
                              {col3.map((label) => (
                                 <FormControlLabel
                                 key={label}
                                 value={label}
                                 control={<Checkbox />}
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
                        </div>
                     </div>
                  </div>

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
                     >
                        <div className="accordion-body">
                           <div style={{ width: 300, margin: '0 auto' }}>
                              <h5 style={{ color: 'white' }}>Year Range</h5>
                              <Slider
                                 value={yearRange}
                                 onChange={(e, newValue) => setYearRange(newValue)}
                                 valueLabelDisplay="auto"
                                 min={1945}
                                 max={2025}
                                 step={5}
                                 sx={{
                                    color: '#1976d2'
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
                           <Select
                           value={durationFilter}
                           onChange={(e) => setDurationFilter(e.target.value)}
                           displayEmpty
                           >
                              <MenuItem value="">All durations</MenuItem>
                              <MenuItem value="short">Short (&lt; 90 min)</MenuItem>
                              <MenuItem value="medium">Medium (90-150 min)</MenuItem>
                              <MenuItem value="long">Long (&gt; 150 min)</MenuItem>
                           </Select>
                        </div>
                     </div>
                  </div>

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
                                 name="customized-10"
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
               <button>Filter</button>
            </div>
         </div>
      </div>
   )
}

export default Header;