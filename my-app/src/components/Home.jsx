import React, { useEffect, useState } from 'react'
import AddMovie from './AddMovie'
import Movie from './Movie'

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://127.0.0.1:9290/movies")
      .then(response => response.json())
      .then(data => {
        setMovies(data)
        setLoading(false)
      })
      .catch(error => console.error(error))
  }, [])

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie])
  }

  
const handleDeleteMovie = (movieId) => {
    fetch(`http://127.0.0.1:9290/movies/${movieId}`, {
      method: 'DELETE',
    })
    .then(response => {
      console.log('response', response);
      return response.json();
    })
    .then(data => {
      console.log('data', data);
        setMovies(movies.filter(movie => movie.id !== movieId))
        window.location.reload();


    })
    .catch(error => console.error(error))
  }
  return (
    <div>
      <h1>Movies {movies.length}</h1>
      <div className='container'>
        <div className='row justify-content-start'>
          <div className='col-sm-8'>
            {loading ? (
              <p>Loading movies...</p>
            ) : (
              movies.map((movie) => (
                <Movie movie={movie} key={movie.id} onDeleteMovie={handleDeleteMovie} />
              ))
            )}
          </div>
          <div className='col-sm-4'>
            <AddMovie onAddMovie={handleAddMovie} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
