import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = ({ slides = [], tourName = "Utopia Tour", buttonText = "Buy Tickets" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Default slides if none provided - using some sick images I found
  const defaultSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Travis Scott Live",
      subtitle: "Experience the energy"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Utopia Tour",
      subtitle: "Coming to a city near you"
    },
    {
      id: 3,
      image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTUPpcLSXuWk/v0/-1x-1.webp",
      title: "Astroworld",
      subtitle: "The journey continues"
    }
  ];

  const slidesToUse = slides.length > 0 ? slides : defaultSlides;

  useEffect(() => {
    // Auto-rotate slides every 5 seconds - might change this later
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesToUse.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slidesToUse.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesToUse.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesToUse.length) % slidesToUse.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {slidesToUse.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <h2 className="tour-name">{tourName}</h2>
                <button className="hero-button">
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <button className="hero-nav hero-nav-prev" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="hero-nav hero-nav-next" onClick={nextSlide}>
          &#8250;
        </button>
        
        <div className="hero-dots">
          {slidesToUse.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

