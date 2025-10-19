import React from 'react';
import CustomButton from '../components/CustomButton';
import './DocsPage.css';

const CustomButtonDocs = () => {
  const codeExample = `import CustomButton from './components/CustomButton';

function App() {
  return (
    <div>
      <CustomButton variant="primary" size="large">
        Primary Button
      </CustomButton>
      
      <CustomButton variant="secondary" size="medium">
        Secondary Button
      </CustomButton>
      
      <CustomButton variant="outline" size="small">
        Outline Button
      </CustomButton>
    </div>
  );
}`;

  return (
    <div className="docs-page">
      <div className="docs-header">
        <h1 className="docs-title">CustomButton</h1>
        <p className="docs-description">
          A highly customizable button component with multiple variants, sizes, and interactive effects.
        </p>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Interactive Example</h2>
        <div className="example-container">
          <div className="example-demo">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <CustomButton variant="primary" size="large">Primary Large</CustomButton>
                <CustomButton variant="secondary" size="large">Secondary Large</CustomButton>
                <CustomButton variant="outline" size="large">Outline Large</CustomButton>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <CustomButton variant="primary" size="medium">Primary Medium</CustomButton>
                <CustomButton variant="secondary" size="medium">Secondary Medium</CustomButton>
                <CustomButton variant="outline" size="medium">Outline Medium</CustomButton>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <CustomButton variant="primary" size="small">Primary Small</CustomButton>
                <CustomButton variant="secondary" size="small">Secondary Small</CustomButton>
                <CustomButton variant="outline" size="small">Outline Small</CustomButton>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <CustomButton variant="dark" size="medium">Dark Button</CustomButton>
                <CustomButton variant="primary" size="medium" disabled>Disabled</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Description</h2>
        <div className="docs-content">
          <p>
            The CustomButton component provides a flexible and reusable button solution with multiple styling options. 
            It supports different variants for various use cases, three size options, and includes smooth hover animations.
          </p>
          <p>
            The component features a ripple effect on click, hover animations, and proper disabled states. 
            It's built with accessibility in mind and includes proper focus states and keyboard navigation support.
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
          <li>Multiple color variants</li>
          <li>Three size options</li>
          <li>Hover and click animations</li>
          <li>Ripple effect on click</li>
          <li>Disabled state support</li>
          <li>Accessible keyboard navigation</li>
          <li>Customizable styling</li>
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
            <span>children</span>
            <span>ReactNode</span>
            <span>-</span>
            <span>Button content/text</span>
          </div>
          <div className="props-row">
            <span>variant</span>
            <span>String</span>
            <span>"primary"</span>
            <span>Button style variant (primary, secondary, outline, dark)</span>
          </div>
          <div className="props-row">
            <span>size</span>
            <span>String</span>
            <span>"medium"</span>
            <span>Button size (small, medium, large)</span>
          </div>
          <div className="props-row">
            <span>onClick</span>
            <span>Function</span>
            <span>-</span>
            <span>Click event handler</span>
          </div>
          <div className="props-row">
            <span>disabled</span>
            <span>Boolean</span>
            <span>false</span>
            <span>Whether the button is disabled</span>
          </div>
          <div className="props-row">
            <span>className</span>
            <span>String</span>
            <span>""</span>
            <span>Additional CSS classes</span>
          </div>
          <div className="props-row">
            <span>type</span>
            <span>String</span>
            <span>"button"</span>
            <span>HTML button type</span>
          </div>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Variants</h2>
        <div className="docs-content">
          <ul className="features-list">
            <li><strong>primary:</strong> Gradient background with accent color</li>
            <li><strong>secondary:</strong> Transparent background with accent border</li>
            <li><strong>outline:</strong> Transparent background with light border</li>
            <li><strong>dark:</strong> Dark background with secondary color</li>
          </ul>
        </div>
      </div>

      <div className="docs-section">
        <h2 className="section-title">Sizes</h2>
        <div className="docs-content">
          <ul className="features-list">
            <li><strong>small:</strong> Compact button for tight spaces</li>
            <li><strong>medium:</strong> Standard button size</li>
            <li><strong>large:</strong> Prominent button for primary actions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomButtonDocs;

