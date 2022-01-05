import React from 'react';
import SkillsOne from './SkillsOne';
import useInitialState from '../Hooks/useInitialState';
import figmaVsc from '../assets/img/figmaVsc.png';
import '../styles/components/Skills.css';

const Skills = () => {
  const initialState = useInitialState();
  return (
    <section className="container__skills" id="skills">
      <h1>{`${initialState[0] && initialState[0].titles}`}</h1>
      <section className="skills__text">
        {initialState[0] &&
          initialState[0].Skills.map((item, id) => (
            <SkillsOne key={id} {...item} />
          ))}
      </section>
      <section className="skills__img">
        <img src={figmaVsc} alt="Figma and Visual" />
      </section>
    </section>
  );
};

export default Skills;
