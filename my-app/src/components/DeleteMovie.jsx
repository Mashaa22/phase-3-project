import React from 'react'

function DeleteMovie({ movieId, onDeleteMovie }) {
  const handleDelete = () => {
    fetch(`http://127.0.0.1:9290/movies/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => onDeleteMovie(movieId))
      .catch(error => console.error(error))
  }

  return (
    <button onClick={handleDelete}>Delete</button>
  )
}

export default DeleteMovie
