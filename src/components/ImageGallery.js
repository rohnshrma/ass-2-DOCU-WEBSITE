import React from 'react';
import './ImageGallery.css';
// import { useState } from 'react'; // might need this later for modal 
const ImageGallery = ({ images = [] }) => {
  // Default images if none provided
  const defaultImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      alt: "Travis Scott Concert 1",
      title: "Live Performance"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      alt: "Travis Scott Concert 2",
      title: "Stage Setup"
    },
    {
      id: 3,
      src: "https://www.hdwallpapers.in/download/american_rapper_travis_scott_is_sitting_on_brown_couch_wearing_white_dress_hd_travis_scott-2560x1440.jpg",
      alt: "Travis Scott Portrait",
      title: "Travis Scott"
    },
    {
      id: 4,
      src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTUPpcLSXuWk/v0/-1x-1.webp",
      alt: "Astroworld Background",
      title: "Astroworld"
    }
  ];

  const imagesToUse = images.length > 0 ? images : defaultImages;
  
  // TODO: Add click to enlarge functionality
  // const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="image-gallery">
      <div className="container">
        <h2 className="gallery-title">Gallery</h2>
        <p className="gallery-subtitle">Experience the energy of Travis Scott's performances</p>
        
        <div className="gallery-grid">
          {imagesToUse.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <h3 className="gallery-image-title">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;

