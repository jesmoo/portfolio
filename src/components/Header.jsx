import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <header>
      <section className="container__header">
        <Link to="/" className="header__linkHome">
          <span className="section__span"></span>
        </Link>
        <a className="section__about" href="https://www.jesmoo.xyz/about.html">
          <h3>about</h3>
        </a>
        <section className="donatios__menu">
          <a href="https://paypal.me/jesmoo?locale.x=es_XC" title="Paypal">
            <h3>paypal</h3>
          </a>
          <a
            href="https://www.buymeacoffee.com/jesmoo"
            className="donatios__coffe"
            title="Buy me a coffe:D"
          >
            <h3>Coffe</h3>
          </a>
        </section>
      </section>
    </header>
  );
};

export default Header;
