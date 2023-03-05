import React, { useState } from 'react';

function AddMovie({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleImageUrlChange = (event) => setImageUrl(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMovie = {
      title,
      description,
      image_url: imageUrl,
    };

    fetch('http://127.0.0.1:9290/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddMovie(data);
        setTitle('');
        setDescription('');
        setImageUrl('');
      });
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows="3" value={description} onChange={handleDescriptionChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" className="form-control" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
