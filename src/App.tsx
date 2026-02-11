import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileMenu } from './components/layout/MobileMenu';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CaseStudies } from './pages/CaseStudies';
import { CaseStudies2 } from './pages/CaseStudies2';
import { Pricing } from './pages/Pricing';
import { ServiceDetails } from './pages/ServiceDetails';
import { Contact } from './pages/Contact';
import { Team } from './pages/Team';
import { Blog } from './pages/Blog';
import { FAQ } from './pages/FAQ';
import { Industry } from './pages/Industry';
import { PlatformDetails } from './pages/PlatformDetails';
import { Products } from './pages/Products';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

function App() {
  useEffect(() => {
    // Force preloader removal in case main.js misses the window.load event
    document.body.classList.add('loaded');
  }, []);

  return (
    <Router>
      <Header />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies-2" element={<CaseStudies2 />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/industry" element={<Industry />} />
        {/* <Route path="/platforms" element={<Platforms />} /> */}
        <Route path="/platform/:id" element={<PlatformDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />

      {/* Loaders/Progress */}
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </Router>
  );
}

export default App;
