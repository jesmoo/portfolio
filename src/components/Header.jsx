import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <>
      <header>
        <section className="header--section">
          <Link to="/">
            <span className="section--span"></span>
          </Link>
          <div className="header--menu">
            <a href="https://www.jesmoo.xyz/about.html">
              <h3>about</h3>
            </a>
            <section className="donatios--menu">
              <a href="https://paypal.me/jesmoo?locale.x=es_XC" title="Paypal">
                <h3>paypal</h3>
              </a>
              <a
                href="https://www.buymeacoffee.com/jesmoo"
                className="donatios--coffe"
                title="Buy me a coffe:D"
              >
                <h3>Coffe</h3>
              </a>
            </section>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
