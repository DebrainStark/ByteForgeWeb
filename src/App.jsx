import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import BlogLayout from './layouts/BlogLayout';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import CaseStudy from './pages/CaseStudy';
import Process from './pages/Process';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:caseStudyId" element={<CaseStudy />} />
        <Route path="process" element={<Process />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<Blog />} />
        <Route path=":postId" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}

export default App;