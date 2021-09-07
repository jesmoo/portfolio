import React from 'react';
import '../styles/components/Navbar.css';

const Navbar = () => {
  return (
    <>
      <section className="main--text">
        <h1>Hi, i am jesmoo</h1>
        <p>
          Especially interested in the frontend. I am currently learning UX/UI,
          React.
        </p>
      </section>
      <section className="main--menu">
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
            <a href="#work">
              <h2>work</h2>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
