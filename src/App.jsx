import './App.css'

import MovieCard from './assets/Component/MovieCard';
import moviesData from './assets/Component/moviesData';

function App() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">TOP MOVIE LIST 2024</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moviesData.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              subtitle={movie.subtitle}
              description={movie.description}
              imageUrl={movie.imageUrl}
              poster={movie.poster} // Add character image URL
              rating={movie.rating}
              duration={movie.duration}
              category={movie.category}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
