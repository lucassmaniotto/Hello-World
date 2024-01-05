import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  const title = document.querySelector('#root > main > article > h2');
  const urlParams = new URLSearchParams(search);
  const scrollToElement = urlParams.get('scrollToElement');

  useEffect(() => {
    setTimeout(() => {
      if (pathname !== '/about') {
        if (title) {
          title.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      } else if (scrollToElement) {
        const element = document.querySelector(`#${scrollToElement}`);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [pathname, title, scrollToElement]);

  return null;
}
