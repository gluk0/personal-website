import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      fontFamily: 'JetBrains Mono, monospace',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #eee'
    }}>
      <div style={{
        fontSize: '1.3rem',
        fontWeight: 500
      }}>
        🌿 rich clarke
      </div>
      <nav>
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          <li><Link to="/" style={linkStyle}>home</Link></li>
          <li><Link to="/art" style={linkStyle}>art</Link></li>
          <li><Link to="/blog" style={linkStyle}>blog</Link></li>
          <li><a href="https://github.com/gluk0" style={linkStyle} target="_blank" rel="noopener noreferrer">git</a></li>
          <li><a href="mailto:me@rich-clarke.dev" style={linkStyle} target="_blank" rel="noopener noreferrer">contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const linkStyle = {
  color: '#334',
  textDecoration: 'none',
  fontSize: '1.2rem',
  transition: 'color 0.2s ease',
  ':hover': {
    color: '#666'
  }
};

export default Header; 