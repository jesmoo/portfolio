import React from 'react';
import { Link } from 'react-router-dom';
import Tecno from './Tecno';
import '../styles/components/MainItem.css';

const MainItems = ({
  title,
  description,
  urlImg,
  alternative,
  technologies,
}) => {
  return (
    <Link
      to={`/preview/${title}`}
      className="btn btn-primary mb-4"
      href="https://www.batabit.jesmoo.xyz/"
      // eslint-disable-next-line react/jsx-no-duplicate-props
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
          <img loading="lazy" src={urlImg} alt={alternative} />
        </picture>
      </section>
    </Link>
  );
};

export default MainItems;
