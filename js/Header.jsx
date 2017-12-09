import React from 'react';
import styled from 'styled-components';

const Navbar = styled.header`
  background: #0c002b;
  color: white;
  overflow: auto;
  padding: 20px 15px;
`;

const Header = () => (
  <Navbar>
    <div className="logo">Real Estate</div>
    <nav>
      <a href="/">Create Ads</a>
      <a href="/">About Us</a>
      <a href="/">Login</a>
      <a href="/" className="register-btn">
        Register
      </a>
    </nav>
  </Navbar>
);

export default Header;
