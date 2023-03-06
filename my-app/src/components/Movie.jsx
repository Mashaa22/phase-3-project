// import React from 'react';
// import DeleteMovie from './DeleteMovie';

// function Movie({ movie, onDeleteMovie }) {
//   return (
//     <div>
//       <div className="card mb-2">
//         <img src={movie.image_url} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <strong className="card-title">{movie.title}</strong>
//           <br></br>

//           <p className="card-text">{movie.description}</p>
//           <DeleteMovie movieId={movie.id} onDeleteMovie={onDeleteMovie} />
//         </div>
//         <hr />
//         <div className='p-4'>
//           <h6>Comments</h6>
//           {movie.comments && movie.comments.map((onecomment) => (
//             <p className='bg-light-bordered mb-2' key={onecomment.id}>{onecomment.comment}</p>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Movie;

import React, { useState, useEffect } from 'react';
import DeleteMovie from './DeleteMovie';
import CommentList from './CommentList';

function Movie({ movie, onDeleteMovie }) {
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [updatedComment, setUpdatedComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9290/movies/${movie.id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => console.error(error));
  }, [movie.id]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    fetch(`http://localhost:9290/movies/${movie.id}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment: newComment }),
    })
      .then((response) => response.json())
      .then((data) => {
        setComments([...comments, data]);
        setNewComment('');
      })
      .catch((error) => console.error(error));
  };

  const handleCommentDelete = (commentId) => {
    fetch(`http://localhost:9290/movies/${movie.id}/comments/${commentId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log('response', response);
        return response.json();
      })
      .then((data) => {
        setComments(comments.filter((comment) => comment.id !== commentId));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="card mb-2">
        <img src={movie.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <strong className="card-title">{movie.title}</strong>
          <br />

          <p className="card-text">{movie.description}</p>
          <DeleteMovie movieId={movie.id} onDeleteMovie={onDeleteMovie} />
        </div>
        <hr />
        <div className="p-4">
          <h6>Comments</h6>
          <div className="mb-2">
            <textarea
              className="form-control"
              placeholder="Type your comment here"
              value={newComment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <button
            className="btn btn-primary mb-2"
            onClick={handleCommentSubmit}
          >
            Add Comment
          </button>
          <CommentList comments={comments} onDeleteComment={handleCommentDelete} />
        </div>
      </div>
    </div>
  );
}

export default Movie;



