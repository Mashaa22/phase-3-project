import React from 'react'
import { useEffect, useState } from 'react'
import Movie from './Movie'



function Home() {

    const [movies, setMovie] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch("http://127.0.0.1:9290/movies", {
            method: "GET",
            headers: {
                Accept:"application/json"
            }
        })
            .then(r => r.json())
            .then((response) => {
                console.log(response)
                setMovie(response)
            })
    }, [])
  return (
    <div>
          <h1>Movies {movies && movies.length }</h1>
          <div className='container '>
              <div className='row justify-content-start'>
                  <div className='col-sm-8'>
            
                      {
                          movies && movies.map((movie) => (
                              <Movie movie={movie} key={movie.id} />
                          ))
                      }
                      

                  </div>
                  <div className='col-sm-4'>
                  </div>
                  
              </div>
              
          </div>
    </div>
  )
}

export default Home
