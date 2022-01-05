import React from 'react';
import useInitialState from '../Hooks/useInitialState';
import ProyectItem from './ProyectsItem';

const ProyectsList = () => {
  const initalState = useInitialState();
  return (
    <section className="container__proyectList">
      {initalState[1] &&
        initalState[1].proyects.map((item, id) => (
          <ProyectItem key={id} {...item} />
        ))}
    </section>
  );
};

export default ProyectsList;
