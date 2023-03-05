import React from 'react'

function Movie({movie}) {
  return (
    <div>
                        <div className="card mb-2">
                     <img src={movie.image_url} className="card-img-top" alt="..."/>
                       <div className="card-body">
                  <strong className="card-title">{movie.title}</strong>
                  <br></br>

                  <p className="card-text">{ movie.description}</p>
                     </div> 
              <hr />
              <div className='p-4'>
                  <h6>Comments</h6>
                  {movie.comments && movie.comments.map((onecomment) => (
                      <p className='bg-light-bordered mb-2'key={onecomment.id} >{onecomment.comment }</p> 
                  ))}
                  
              </div>
                  </div> 
    </div>
  )
}

export default Movie
