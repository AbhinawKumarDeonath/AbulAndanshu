// src/PhotoGallery.js
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PhotoGallery.css';

const PhotoGallery = ({ photos }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(photos.map(photo => photo.category))];

  const filterPhotos = (category) => {
    setSelectedCategory(category);
  };

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>


        <div className="container">
        <h2>All Beautiful Memories</h2>
      <div className="button-group my-3 ">
        {categories.map(category => (
          <button
            key={category}
            className={`btn btn-primary mx-1 my-1 ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => filterPhotos(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredPhotos.map(photo => (
          <div key={photo.id} className="masonry-item">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="masonry-img"
            />
          </div>
        ))}
      </Masonry>
    </div>
    </>
  );
};

export default PhotoGallery;
