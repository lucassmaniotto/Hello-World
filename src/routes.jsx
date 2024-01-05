import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import DefaultPage from './components/DefaultPage';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import ScrollToTop from './hooks/ScrollToTop';
import GlobalStyle from './components/GlobalStyle';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Menu from './components/Menu';
import ScrollToCertificates from './hooks/ScrollToCertificates';

function AppRoutes() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToCertificates />
        <Menu />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutMe />} />
          </Route>
          <Route path="projects/:id" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
