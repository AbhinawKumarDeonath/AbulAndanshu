
// src/App.js
import React from 'react';
import PhotoGallery from './PhotoGallery';
import ImageCarousel from './ImageCarousel';
import HeroSection from './HeroSection';

const photos = [
  { id: 1, src: 'images/1.jpg', alt: 'Photo 1', category: 'Abul & Anshu' },
  { id: 2, src: 'images/2.jpg', alt: 'Photo 2', category: 'Abul & Anshu' },
  { id: 3, src: 'images/3.jpg', alt: 'Photo 3', category: 'Abul' },
  { id: 4, src: 'images/4.jpg', alt: 'Photo 4', category: 'Abul' },
  { id: 5, src: 'images/5.jpg', alt: 'Photo 1', category: 'Abul & Anshu' },
  { id: 6, src: 'images/6.jpg', alt: 'Photo 2', category: 'vication' },
  { id: 7, src: 'images/7.jpg', alt: 'Photo 3', category: 'vication' },
  { id: 8, src: 'images/8.jpg', alt: 'Photo 4', category: 'Anshu' },
 
  // Add more photos here
];

const carouselPhotos = [
  {id: 1, src: 'images/1.jpg', alt: 'Nature 1' },
  { id: 2, src: 'images/2.jpg', alt: 'Architecture 1' },
  { id: 3, src: 'images/3.jpg',  alt: 'Animals 1' },
  // Add more carousel photos here
];

const App = () => {
  return (
    <div className="App">
    <HeroSection 
        videoSrc="vid.mp4" 
        videoType="video/mp4" 
      />
    <ImageCarousel photos={carouselPhotos} />
      <PhotoGallery photos={photos} />
    </div>
  );
};

export default App;


