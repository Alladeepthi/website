import { useEffect, lazy, Suspense } from 'react';
import type { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileMenu } from './components/layout/MobileMenu';
import { Home } from './pages/Home';

// Lazy load other pages to improve initial bundle size
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const CaseStudies = lazy(() => import('./pages/CaseStudies').then(module => ({ default: module.CaseStudies })));
const CaseStudies2 = lazy(() => import('./pages/CaseStudies2').then(module => ({ default: module.CaseStudies2 })));
const Pricing = lazy(() => import('./pages/Pricing').then(module => ({ default: module.Pricing })));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails').then(module => ({ default: module.ServiceDetails })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Team = lazy(() => import('./pages/Team').then(module => ({ default: module.Team })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const FAQ = lazy(() => import('./pages/FAQ').then(module => ({ default: module.FAQ })));
const Industry = lazy(() => import('./pages/Industry').then(module => ({ default: module.Industry })));
const Platforms = lazy(() => import('./pages/Platforms').then(module => ({ default: module.Platforms })));
const Products = lazy(() => import('./pages/Products').then(module => ({ default: module.Products })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));

declare global {
  interface Window {
    rtsJs: any;
  }
}

let isInitialLoad = true;

const PageWrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (isInitialLoad) {
      isInitialLoad = false;
      return;
    }

    const timer = setTimeout(() => {
      if (window.rtsJs && typeof window.rtsJs.m === 'function') {
        window.rtsJs.m();
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [location]);

  return <>{children}</>;
};

const PageLoader = () => (
  <div className="loader-wrapper" style={{ opacity: 1, visibility: 'visible', background: 'rgba(255,255,255,0.8)' }}>
    <div className="loader"></div>
  </div>
);

function App() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <Router>
      <Header />
      <MobileMenu />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
          <Route path="/case-studies-2" element={<PageWrapper><CaseStudies2 /></PageWrapper>} />
          <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
          <Route path="/service-details" element={<PageWrapper><ServiceDetails /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          <Route path="/industry" element={<PageWrapper><Industry /></PageWrapper>} />
          <Route path="/platforms" element={<PageWrapper><Platforms /></PageWrapper>} />
          <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
          <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        </Routes>
      </Suspense>
      <Footer />

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
