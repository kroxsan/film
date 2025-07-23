import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   allMovies: [],
   filteredMovies: [],
   allGenres: [], // header'da kullanılacak güncel türler
   filters: {
      genres: [],
      yearMin: 1995,
      yearMax: 2025,
      duration: '',
      imdb: 0,
   }
};

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      /**
       * API'den gelen tüm filmleri ve unique türleri state'e yazar.
       */
      setAllMovies(state, action) {
         const movies = action.payload;

         state.allMovies = movies; // tüm filmleri tut
         state.filteredMovies = movies; // defaultta filtrelenmemiş hali

         // API'den gelen filmlerin türlerinden eşsiz bir set oluştur
         const genreSet = new Set();

         movies.forEach(movie => {
            movie.genres.forEach(g => genreSet.add(g));
         });

         // allGenres'a alfabetik sırayla ata
         state.allGenres = Array.from(genreSet).sort();
      },

      /**
       * Filtre kriterlerini güncelle
       */
      setFilters(state, action) {
         state.filters = { ...state.filters, ...action.payload };
      },

      /**
       * Şu anki filtrelere göre filtrelenmiş listeyi hesapla
       */
      applyFilters(state) {
         const { genres, yearMin, yearMax, duration, imdb } = state.filters;

         state.filteredMovies = state.allMovies.filter(movie => {
            const matchesGenres =
               genres.length === 0 ||
               genres.some(g => movie.genres.includes(g));

            const matchesYear =
               movie.year >= yearMin && movie.year <= yearMax;

            const matchesDuration =
               !duration ||
               (duration === 'Short' && movie.time < 90) ||
               (duration === 'Medium' && movie.time >= 90 && movie.time <= 150) ||
               (duration === 'Long' && movie.time > 150);

            const matchesImdb = movie.imdb >= imdb;

            return matchesGenres && matchesYear && matchesDuration && matchesImdb;
         });
      }
   },
});

export const { setAllMovies, setFilters, applyFilters } = filterSlice.actions;
export default filterSlice.reducer;
