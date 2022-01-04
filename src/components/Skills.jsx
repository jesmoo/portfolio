import React from 'react';
import SkillsOne from './SkillsOne';
import useInitialState from '../Hooks/useInitialState';
import '../styles/components/Skills.css';

const Skills = () => {
  const initialState = useInitialState();
  return (
    <div className="container__skills">
      <section className="skills__text">
        <h1>{`${initialState[0] && initialState[0].titles}`}</h1>
        {initialState[0] &&
          initialState[0].Skills.map((item, id) => (
            <SkillsOne key={id} {...item} />
          ))}
      </section>
      <section className="skills__img"></section>
    </div>
  );
};

export default Skills;
