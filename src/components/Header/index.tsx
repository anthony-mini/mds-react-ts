import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <Link to="/">
          <h1>Welcome to React APP Courses !</h1>
        </Link>
      </header>
    </>
  );
};

export default Header;
