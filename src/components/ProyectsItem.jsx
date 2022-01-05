import React from 'react';
import TecnoIcon from './TecnoIcon';

const ProyectsItem = ({ title, description, url, icons, img }) => {
  return (
    <section className="section__proyectList">
      <section className="container__proyectLists-text">
        <h2 className="proyectList__title">{title}</h2>
        <p className="proyectList__description">{description}</p>
        <div className="proyectList__icons">
          {icons && icons.map((icon, id) => <TecnoIcon key={id} {...icon} />)}
        </div>
        <a className="proyectList__btn" href={url}>
          See
        </a>
      </section>
      <section className="proyectList__img">
        <img src={img} alt={`${title} proyect`} />
      </section>
    </section>
  );
};

export default ProyectsItem;
