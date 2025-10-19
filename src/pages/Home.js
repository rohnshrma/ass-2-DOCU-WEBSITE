import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CustomButton from '../components/CustomButton';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <h1 className="welcome-title">Welcome to TravisComponentLib</h1>
            <p className="welcome-description">
              A modern React component library inspired by Travis Scott's aesthetic. 
              Build stunning web experiences with our collection of responsive, 
              customizable components designed for the next generation of web applications.
            </p>
            <div className="welcome-actions">
              <Link to="/docs">
                <CustomButton variant="primary" size="large">
                  Get Started
                </CustomButton>
              </Link>
              <CustomButton variant="outline" size="large">
                View Examples
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="features-title">Why Choose TravisComponentLib?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Modern Design</h3>
              <p className="feature-description">
                Beautiful components with a contemporary aesthetic inspired by Travis Scott's visual style.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Fully Responsive</h3>
              <p className="feature-description">
                All components are mobile-first and adapt seamlessly across all device sizes.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">High Performance</h3>
              <p className="feature-description">
                Optimized for speed and efficiency with minimal bundle size impact.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3 className="feature-title">Easy to Use</h3>
              <p className="feature-description">
                Simple API with comprehensive documentation and TypeScript support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

