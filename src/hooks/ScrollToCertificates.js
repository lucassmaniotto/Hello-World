import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToCertificates() {
  let { pathname } = useLocation();
  pathname = pathname + '#certificates-section';
  const certificates = document.querySelector('#certificates-section');

  useEffect(() => {
    setTimeout(() => {
      if (certificates && pathname === '/about#certificates-section') {
        certificates.scrollIntoView({ behavior: 'smooth' });
      } else {
        setTimeout(() => {
          certificates.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }, 200);
  }, [pathname, certificates]);

  return null;
}
