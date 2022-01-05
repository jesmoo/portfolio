import React from 'react';
import '../styles/components/Proyects.css';
import ProyectsList from './ProyectsList';

const Proyects = () => {
  return (
    <>
      <div className="container__proyects" id="proyects">
        <h2>My Proyects</h2>
        <span className="proyects-img" alt="My proyects" title="My proyects" />
      </div>
      <ProyectsList />
    </>
  );
};

export default Proyects;
