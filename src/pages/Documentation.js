import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Documentation.css';

const Documentation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  // const [isLoading, setIsLoading] = useState(false); // might need this later

  const components = [
    { name: 'ResponsiveNavbar', path: '/docs/responsivenavbar', description: 'Responsive navigation component' },
    { name: 'HeroSection', path: '/docs/herosection', description: 'Hero slider with carousel functionality' },
    { name: 'TicketCards', path: '/docs/ticketcards', description: 'Card components for ticket display' },
    { name: 'ImageGallery', path: '/docs/imagegallery', description: 'Responsive image gallery grid' },
    { name: 'CustomButton', path: '/docs/custombutton', description: 'Customizable button component' },
    { name: 'ResponsiveFooter', path: '/docs/responsivefooter', description: 'Responsive footer with links' }
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Get current component name
  const getCurrentComponentName = () => {
    const currentComponent = components.find(comp => comp.path === location.pathname);
    return currentComponent ? currentComponent.name : null;
  };

  const currentComponentName = getCurrentComponentName();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="documentation">
      <div className="docs-container">
        {/* Desktop Sidebar */}
        <aside className="docs-sidebar">
          <div className="sidebar-header">
            <h3 className="sidebar-title">Components</h3>
          </div>
          <nav className="sidebar-nav">
            <ul className="sidebar-list">
              {components.map((component) => (
                <li key={component.name} className="sidebar-item">
                  <Link 
                    to={component.path} 
                    className={`sidebar-link ${location.pathname === component.path ? 'active' : ''}`}
                  >
                    {component.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="docs-main">
          <div className="docs-header">
            <h1 className="docs-title">Documentation</h1>
            
            {/* Mobile/Tablet Dropdown */}
            <div className="docs-dropdown" ref={dropdownRef}>
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                {currentComponentName ? `Components - ${currentComponentName}` : 'Components'}
                <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {components.map((component) => (
                    <Link 
                      key={component.name}
                      to={component.path} 
                      className={`dropdown-link ${location.pathname === component.path ? 'active' : ''}`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="dropdown-link-content">
                        <span className="dropdown-link-name">{component.name}</span>
                        <span className="dropdown-link-desc">{component.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="docs-content">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Documentation;

