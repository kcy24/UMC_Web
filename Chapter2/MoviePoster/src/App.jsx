import { useState } from 'react';
import { movies } from './api/api.js';
import MovieCard from './components/MovieCard.jsx';
import Description from './components/Description.jsx'
import './App.css';

function App() {
  const [movieData, setMovieData] = useState(movies);

  return (
    <>
      <div className="movie-grid">
        {movieData.results.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
