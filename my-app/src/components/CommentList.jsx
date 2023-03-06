// import React from 'react';

// function CommentList({ comments, onDeleteComment }) {
//   return (
//     <div>
//       <h2>Comments</h2>
//       {comments.map((comment) => (
//         <div key={comment.id} className="card mb-2">
//           <div className="card-body">
//             <p className="card-text">{comment.comment}</p>
//             <button
//               className="btn btn-danger btn-sm"
//               onClick={() => onDeleteComment(comment.id)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CommentList;

import React from 'react';

function CommentList({ comments, onDeleteComment }) {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="card mb-2">
          <div className="card-body">
            <p className="card-text">{comment.comment}</p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDeleteComment(comment.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;


