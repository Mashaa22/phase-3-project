import React from 'react';

function DeleteMovie({ movieId, onDeleteMovie }) {
  const handleDelete = () => {
    fetch(`http://127.0.0.1:9290/movies/${movieId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
          onDeleteMovie(movieId);
          window.location.href = window.location.href;

      })
      .catch(error => console.error(error));
  }

  return (
    <button className='btn btn-danger mt-2' onClick={handleDelete}>
      Delete
    </button>
  )
}

export default DeleteMovie;

