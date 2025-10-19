import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import ResponsiveFooter from './components/ResponsiveFooter';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import ResponsiveNavbarDocs from './docs/ResponsiveNavbarDocs';
import HeroSectionDocs from './docs/HeroSectionDocs';
import TicketCardsDocs from './docs/TicketCardsDocs';
import ImageGalleryDocs from './docs/ImageGalleryDocs';
import CustomButtonDocs from './docs/CustomButtonDocs';
import ResponsiveFooterDocs from './docs/ResponsiveFooterDocs';
import MainDocs from './pages/MainDocs';

function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveNavbar />
        <main style={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Documentation />}>
              <Route index element={<MainDocs />} />
              <Route path="responsivenavbar" element={<ResponsiveNavbarDocs />} />
              <Route path="herosection" element={<HeroSectionDocs />} />
              <Route path="ticketcards" element={<TicketCardsDocs />} />
              <Route path="imagegallery" element={<ImageGalleryDocs />} />
              <Route path="custombutton" element={<CustomButtonDocs />} />
              <Route path="responsivefooter" element={<ResponsiveFooterDocs />} />
            </Route>
          </Routes>
        </main>
        <ResponsiveFooter />
      </div>
    </Router>
  );
}

export default App;

