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
                <Movie movie={movie} key={movie.id} />
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

export default Home

