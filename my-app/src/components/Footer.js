import React from 'react';

function MovieFooter() {
  return (
    <div className="movie-footer">
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
}

export default MovieFooter;
