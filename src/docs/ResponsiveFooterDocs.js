import React from 'react';
import ResponsiveFooter from '../components/ResponsiveFooter';
import './DocsPage.css';

const ResponsiveFooterDocs = () => {
  const codeExample = `import ResponsiveFooter from './components/ResponsiveFooter';

function App() {
  return (
    <div className="App">
      {/* Your app content */}
      <ResponsiveFooter />
    </div>
  );
}`;

  return (
    <div className="docs-page">
      <div className="docs-header">
        <h1 className="docs-title">ResponsiveFooter</h1>
        <p className="docs-description">
          A comprehensive footer component with links, social icons, and responsive design that adapts to all screen sizes.
        </p>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Interactive Example</h2>
        <div className="example-container">
          <div className="example-demo">
            <ResponsiveFooter />
          </div>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Description</h2>
        <div className="docs-content">
          <p>
            The ResponsiveFooter component provides a complete footer solution with organized sections for different types of links. 
            It includes social media icons, component documentation links, resource links, and support information.
          </p>
          <p>
            The footer automatically adapts its layout based on screen size, displaying multiple columns on desktop and 
            stacking vertically on mobile devices. It includes proper spacing, typography, and hover effects for an 
            engaging user experience.
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
          <li>Responsive grid layout</li>
          <li>Social media icons</li>
          <li>Organized link sections</li>
          <li>Copyright information</li>
          <li>Legal links</li>
          <li>Hover effects and transitions</li>
          <li>Mobile-optimized design</li>
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
            <span>No props required</span>
            <span>-</span>
            <span>-</span>
            <span>This component doesn't accept any props</span>
          </div>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Footer Sections</h2>
        <div className="docs-content">
          <ul className="features-list">
            <li><strong>Brand Section:</strong> Logo, description, and social media links</li>
            <li><strong>Components:</strong> Links to all component documentation pages</li>
            <li><strong>Resources:</strong> Documentation, getting started, examples, and GitHub links</li>
            <li><strong>Support:</strong> Help center, community, contact, and issues links</li>
            <li><strong>Footer Bottom:</strong> Copyright information and legal links</li>
          </ul>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Responsive Behavior</h2>
        <div className="docs-content">
          <ul className="features-list">
            <li><strong>Desktop (1025px+):</strong> 4-column grid layout</li>
            <li><strong>Tablet (769px-1024px):</strong> 2-column grid layout</li>
            <li><strong>Mobile (768px and below):</strong> Single column stack</li>
          </ul>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Social Icons</h2>
        <div className="docs-content">
          <p>
            The footer includes social media icons for GitHub, Twitter, and LinkedIn. 
            Each icon is properly sized and includes hover effects with color transitions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveFooterDocs;

