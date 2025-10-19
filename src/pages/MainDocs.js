import React from 'react';
import { Link } from 'react-router-dom';
import './MainDocs.css';

// Main docs page - probably could organize this better but it works
const MainDocs = () => {
  // Component data - could move this to a separate file but lazy
  const components = [
    { 
      name: 'ResponsiveNavbar', 
      path: '/docs/responsivenavbar', 
      description: 'Clean nav bar that collapses nicely on mobile. No fuss, just works.',
      features: ['Hamburger menu on mobile', 'Smooth animations', 'Easy to customize']
    },
    { 
      name: 'HeroSection', 
      path: '/docs/herosection', 
      description: 'Full-screen hero with image slideshow. Perfect for landing pages.',
      features: ['Auto-rotating images', 'Touch/swipe support', 'Customizable content']
    },
    { 
      name: 'TicketCards', 
      path: '/docs/ticketcards', 
      description: 'Ticket cards that look great on any screen. Built for events and shows.',
      features: ['Responsive grid', 'Price highlighting', 'Featured options']
    },
    { 
      name: 'ImageGallery', 
      path: '/docs/imagegallery', 
      description: 'Simple image gallery that adapts to your screen size. Clean and fast.',
      features: ['Responsive grid', 'Hover effects', 'Easy to set up']
    },
    { 
      name: 'CustomButton', 
      path: '/docs/custombutton', 
      description: 'Button component you can style however you want. Multiple variants included.',
      features: ['Different styles', 'Custom colors', 'Smooth hover effects']
    },
    { 
      name: 'ResponsiveFooter', 
      path: '/docs/responsivefooter', 
      description: 'Footer with social links and copyright. Looks good on everything.',
      features: ['Social media icons', 'Copyright section', 'Mobile-friendly']
    }
  ];

  return (
    <div className="main-docs">
      <div className="main-docs-header">
        <h1 className="main-docs-title">Component Library</h1>
        <p className="main-docs-description">
          A handcrafted collection of React components inspired by Travis Scott's aesthetic. 
          Built for developers who want to create stunning web experiences without the hassle.
        </p>
      </div>

      <div className="main-docs-content">
        <div className="components-overview">
          <h2 className="overview-title">Available Components</h2>
          <div className="components-grid">
            {components.map((component) => (
              <div key={component.name} className="component-card">
                <div className="component-card-header">
                  <h3 className="component-name">{component.name}</h3>
                  <Link to={component.path} className="view-docs-btn">
                    View Docs →
                  </Link>
                </div>
                <p className="component-description">{component.description}</p>
                <div className="component-features">
                  <h4 className="features-title">Features:</h4>
                  <ul className="features-list">
                    {component.features.map((feature, index) => (
                      <li key={index} className="feature-item">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="getting-started">
          <h2 className="getting-started-title">Getting Started</h2>
          <div className="getting-started-content">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Pick Your Component</h3>
                <p>Take a look at what we've got. Each component is ready to drop into your project.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Check Out the Docs</h3>
                <p>Click on any component to see it in action and grab the code you need.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Copy & Go</h3>
                <p>Copy the code, paste it in your project, and you're good to go. It's that simple.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="theme-info">
          <h2 className="theme-title">Theme & Styling</h2>
          <p className="theme-description">
            Everything here follows the same dark vibe with some teal pops. 
            We kept it simple with CSS variables so you can easily tweak things if you want.
          </p>
          <div className="color-palette">
            <div className="color-item">
              <div className="color-swatch" style={{backgroundColor: '#222831'}}></div>
              <span className="color-name">Primary Dark</span>
              <span className="color-hex">#222831</span>
            </div>
            <div className="color-item">
              <div className="color-swatch" style={{backgroundColor: '#393e46'}}></div>
              <span className="color-name">Secondary Dark</span>
              <span className="color-hex">#393e46</span>
            </div>
            <div className="color-item">
              <div className="color-swatch" style={{backgroundColor: '#00adb5'}}></div>
              <span className="color-name">Teal Accent</span>
              <span className="color-hex">#00adb5</span>
            </div>
            <div className="color-item">
              <div className="color-swatch" style={{backgroundColor: '#eeeeee'}}></div>
              <span className="color-name">Light Text</span>
              <span className="color-hex">#eeeeee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDocs;
