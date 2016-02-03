import React from 'react';
import {Navbar} from '../components/navbar.jsx';

export const Header = () => (
  <div className="header-container">
    <Navbar links={['Home','About','My Work']} />
    <h2 className="text-center slogan">
      Developing beautiful apps using modern technology
    </h2>
  </div>
);
