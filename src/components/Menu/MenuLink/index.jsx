import React from 'react';
import Link from './styles';

function MenuLink({ children, to }) {
  return (
    <Link
      to={to}
      className={({ isActive }) => `
                ${isActive ? 'active' : ''}
            `}
      end
    >
      {children}
    </Link>
  );
}

export default MenuLink;
