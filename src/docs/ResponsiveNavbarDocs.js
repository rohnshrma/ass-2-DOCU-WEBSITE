import React from 'react';
import ResponsiveNavbar from '../components/ResponsiveNavbar';
import './DocsPage.css';

const ResponsiveNavbarDocs = () => {
  const codeExample = `import ResponsiveNavbar from './components/ResponsiveNavbar';

function App() {
  return (
    <div className="App">
      <ResponsiveNavbar />
      {/* Your app content */}
    </div>
  );
}`;

  return (
    <div className="docs-page">
      <div className="docs-header">
        <h1 className="docs-title">ResponsiveNavbar</h1>
        <p className="docs-description">
          A clean navigation bar that works everywhere. Collapses into a hamburger menu on mobile, 
          stays clean on desktop. No complicated setup needed.
        </p>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Interactive Example</h2>
        <div className="example-container">
          <div className="example-demo">
            <ResponsiveNavbar />
            <div style={{ padding: '2rem', background: 'var(--secondary-dark)', minHeight: '200px' }}>
              <h3 style={{ color: 'var(--light)', marginBottom: '1rem' }}>Page Content</h3>
              <p style={{ color: '#b0b0b0' }}>
                This is where your page content would go. The navbar stays fixed at the top.
                Try resizing your browser window to see the responsive behavior.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Description</h2>
        <div className="docs-content">
          <p>
            The ResponsiveNavbar component provides a modern, responsive navigation solution for React applications. 
            It features a clean design with the TravisComponentLib branding and includes navigation links for Home and Documentation pages.
          </p>
          <p>
            On desktop screens, the navbar displays the logo on the left and navigation links on the right. 
            On mobile devices, it collapses into a hamburger menu icon that reveals the navigation options when tapped.
            The component automatically handles the responsive behavior and provides smooth transitions.
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
          <li>Fully responsive design</li>
          <li>Mobile hamburger menu</li>
          <li>Smooth animations and transitions</li>
          <li>Accessible navigation</li>
          <li>Modern styling with theme colors</li>
          <li>Fixed positioning with proper z-index</li>
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
    </div>
  );
};

export default ResponsiveNavbarDocs;
