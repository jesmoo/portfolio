import React from 'react';
import '../styles/components/MainInicio.css';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Proyects from '../components/Proyects';

const MainInicio = () => {
  return (
    <main>
      <Navbar />
      <Skills />
      <Proyects />
    </main>
  );
};

export default MainInicio;
