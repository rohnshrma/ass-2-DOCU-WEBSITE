import React from 'react';
import TicketCards from '../components/TicketCards';
import './DocsPage.css';

const TicketCardsDocs = () => {
  const codeExample = `import TicketCards from './components/TicketCards';

function App() {
  const customTickets = [
    {
      id: 1,
      title: "VIP Package",
      description: "Premium experience with exclusive benefits",
      price: "$399",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Standard Ticket",
      description: "General admission access",
      price: "$99",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: false
    }
  ];

  return <TicketCards tickets={customTickets} />;
}`;

  return (
    <div className="docs-page">
      <div className="docs-header">
        <h1 className="docs-title">TicketCards</h1>
        <p className="docs-description">
          A responsive card component system for displaying ticket options with images, descriptions, and pricing information.
        </p>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Interactive Example</h2>
        <div className="example-container">
          <div className="example-demo">
            <TicketCards />
          </div>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Description</h2>
        <div className="docs-content">
          <p>
            The TicketCards component creates an attractive grid layout for displaying different ticket options. 
            Each card includes an image, title, description, price, and a call-to-action button. 
            Cards can be marked as "featured" to highlight premium options.
          </p>
          <p>
            The component automatically adapts to different screen sizes using CSS Grid, displaying multiple cards 
            per row on desktop, fewer on tablets, and a single column on mobile devices. 
            Each card includes hover effects and smooth transitions for an engaging user experience.
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
          <li>Featured card highlighting</li>
          <li>Hover animations and effects</li>
          <li>Customizable ticket data</li>
          <li>Price display with formatting</li>
          <li>Call-to-action buttons</li>
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
            <span>tickets</span>
            <span>Array</span>
            <span>Default tickets</span>
            <span>Array of ticket objects with id, title, description, price, image, featured</span>
          </div>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Ticket Object Structure</h2>
        <div className="code-block">
          <pre><code>{`{
  id: number,           // Unique identifier
  title: string,        // Ticket type name
  description: string,  // Ticket description
  price: string,        // Price display (e.g., "$99")
  image: string,        // Image URL
  featured: boolean     // Whether to highlight this ticket
}`}</code></pre>
        </div>
      </div>
    </div>
  );
};

export default TicketCardsDocs;

