import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const title = document.querySelector('#root > main > article > h2');

  useEffect(() => {
    setTimeout(() => {
      if (title) {
        title.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);
  }, [pathname, title]);

  return null;
}
