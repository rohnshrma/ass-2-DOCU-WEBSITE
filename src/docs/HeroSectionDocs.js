import React from 'react';
import HeroSection from '../components/HeroSection';
import './DocsPage.css';

const HeroSectionDocs = () => {
  const codeExample = `import HeroSection from './components/HeroSection';

function App() {
  const customSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Custom Title",
      subtitle: "Custom subtitle"
    }
  ];

  return (
    <HeroSection 
      slides={customSlides}
      tourName="Custom Tour"
      buttonText="Get Tickets"
    />
  );
}`;

  return (
    <div className="docs-page">
      <div className="docs-header">
        <h1 className="docs-title">HeroSection</h1>
        <p className="docs-description">
          A full-screen hero section with image carousel functionality, perfect for showcasing tours, events, or featured content.
        </p>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Interactive Example</h2>
        <div className="example-container">
          <div className="example-demo">
            <HeroSection />
          </div>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Description</h2>
        <div className="docs-content">
          <p>
            The HeroSection component creates an immersive full-screen experience with automatic image carousel functionality. 
            It features smooth transitions between slides, navigation controls, and dot indicators for easy navigation.
          </p>
          <p>
            The component includes customizable tour names, button text, and slide content. It automatically cycles through 
            images every 5 seconds and provides manual navigation controls. The design features a dark overlay for 
            optimal text readability and includes responsive behavior for all screen sizes.
          </p>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Usage</h2>
        <div className="code-block">
          <pre><code>{codeExample}</code></pre>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Features</h2>
        <ul className="features-list">
          <li>Automatic image carousel with 5-second intervals</li>
          <li>Manual navigation with arrow buttons</li>
          <li>Dot indicators for slide navigation</li>
          <li>Responsive design for all screen sizes</li>
          <li>Customizable tour name and button text</li>
          <li>Smooth transitions and hover effects</li>
          <li>Full-screen hero experience</li>
        </ul>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Props</h2>
        <div className="props-table">
          <div className="props-header">
            <span>Prop</span>
            <span>Type</span>
            <span>Default</span>
            <span>Description</span>
          </div>
          <div className="props-row">
            <span>slides</span>
            <span>Array</span>
            <span>Default slides</span>
            <span>Array of slide objects with id, image, title, subtitle</span>
          </div>
          <div className="props-row">
            <span>tourName</span>
            <span>String</span>
            <span>"Utopia Tour"</span>
            <span>Name of the tour/event to display</span>
          </div>
          <div className="props-row">
            <span>buttonText</span>
            <span>String</span>
            <span>"Buy Tickets"</span>
            <span>Text for the call-to-action button</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionDocs;

