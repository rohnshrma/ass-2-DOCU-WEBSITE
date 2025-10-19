import React from 'react';
import ImageGallery from '../components/ImageGallery';
import './DocsPage.css';

const ImageGalleryDocs = () => {
  const codeExample = `import ImageGallery from './components/ImageGallery';

function App() {
  const customImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Concert Photo 1",
      title: "Live Performance"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Concert Photo 2",
      title: "Stage Setup"
    }
  ];

  return <ImageGallery images={customImages} />;
}`;

  return (
    <div className="docs-page">
      <div className="docs-header">
        <h1 className="docs-title">ImageGallery</h1>
        <p className="docs-description">
          A responsive image gallery component that displays images in a grid layout with hover effects and overlay information.
        </p>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Interactive Example</h2>
        <div className="example-container">
          <div className="example-demo">
            <ImageGallery />
          </div>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Description</h2>
        <div className="docs-content">
          <p>
            The ImageGallery component creates a responsive grid layout for displaying images with elegant hover effects. 
            It automatically adjusts the number of columns based on screen size: 4 columns on desktop, 2 on tablets, and 1 on mobile.
          </p>
          <p>
            Each image includes a hover overlay with title information and smooth transitions. The component is perfect for 
            showcasing concert photos, portfolio images, or any collection of visual content that needs to be displayed attractively.
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
          <li>Responsive grid layout (4/2/1 columns)</li>
          <li>Hover overlay effects</li>
          <li>Image zoom on hover</li>
          <li>Customizable image data</li>
          <li>Smooth transitions and animations</li>
          <li>Mobile-optimized design</li>
          <li>Accessible image alt text</li>
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
            <span>images</span>
            <span>Array</span>
            <span>Default images</span>
            <span>Array of image objects with id, src, alt, title</span>
          </div>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Image Object Structure</h2>
        <div className="code-block">
          <pre><code>{`{
  id: number,      // Unique identifier
  src: string,     // Image URL
  alt: string,     // Alt text for accessibility
  title: string    // Title to display on hover
}`}</code></pre>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Responsive Behavior</h2>
        <div className="docs-content">
          <ul className="features-list">
            <li><strong>Desktop (1025px+):</strong> 4 images per row</li>
            <li><strong>Tablet (769px-1024px):</strong> 2 images per row</li>
            <li><strong>Mobile (768px and below):</strong> 1 image per row</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryDocs;

