// Header.tsx
import React from 'react';
import './Header.css';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="header">
      <h3>IP Address Tracker</h3>
      {children}
    </header>
  );
};

export default Header;
