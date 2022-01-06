import React from 'react';
import '../styles/components/Navbar.css';
import mainImg from '../assets/img/mainImg.png';

const Navbar = () => {
  return (
    <section className="container__navbar-bg">
      <section className="container__navbar">
        <section className="navbar__text">
          <h1>Hi, i am jesmoo</h1>
          <p>
            I am HTMl, CSS and JS with React, I am interested in Design. I want
            to be part of an IT company as Frontend.
          </p>
          <a href="#skills" className="text__skills">
            <p>Skills</p>
          </a>
        </section>
        <section className="navbar__img">
          <img src={mainImg} alt="Proyects" />
        </section>
      </section>
      <section className="navbar__menu">
        <ul>
          <li>
            <a href="https://bit.ly/CVJesusMoo">
              <h2>cv</h2>
            </a>
          </li>
          <li>
            <a href="#socialNetwork">
              <h2>contact</h2>
            </a>
          </li>
          <li>
            <a href="#proyects">
              <h2>proyects</h2>
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Navbar;
