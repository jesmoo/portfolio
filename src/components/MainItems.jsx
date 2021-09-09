import React from 'react';
import Tecno from './Tecno';
import '../styles/components/MainItem.css';

const MainItems = ({ title, description, url, alternative, technologies }) => {
  return (
    <a
      href="https://www.batabit.jesmoo.xyz/"
      className={`work--container project1 ${title}`}
    >
      <section className="elements--card">
        <section className={`card--text ${title}__text`}>
          <h2>{title}</h2>
          <p>{description} </p>
        </section>
        <section className="card--technologies">
          <div className="technologies--item__group">
            <span className="technologies--itemIcon Use"></span>
          </div>
          {technologies.map((item) => (
            <Tecno key={item.altTitle} {...item} />
          ))}
        </section>
      </section>
      <section className="card--img ">
        <picture>
          <img loading="lazy" src={url} alt={alternative} />
        </picture>
      </section>
    </a>
  );
};

export default MainItems;
