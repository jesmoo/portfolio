import { useState, useEffect } from 'react';
import bataImg from '../assets/img/batatabit-jesmoo.png';
import simonsImg from '../assets/img/simon-jesmoo.png';
import tificImg from '../assets/img/spa-jesmoo.png';

const useInitialState = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        title: 'BatataBit',
        description:
          'Static page made with html and css. My most important challenge was to be able to make a semantic html layout along with learning the order of css styles.',
        url: bataImg,
        alternative: 'Page layout with semantic html ',
        technologies: [
          {
            altTitle: 'Html5',
            classIcon: 'Html',
          },
          {
            altTitle: 'Css3',
            classIcon: 'Css',
          },
        ],
      },
      {
        title: 'Simons',
        description:
          'A game of following randomly formed patterns. My most difficult challenge was to learn JavaScript to be able to make the logic of the game and its correct functioning.',
        url: simonsImg,
        alternative: 'a game of following randomly ordered patterns',
        technologies: [
          {
            altTitle: 'Html5',
            classIcon: 'Html',
          },
          {
            altTitle: 'Css3',
            classIcon: 'Css',
          },
          {
            altTitle: 'JavaScript',
            classIcon: 'Js',
          },
        ],
      },
      {
        title: '100tifico',
        description:
          'Single Page Application (SPA) with Rick and morty api. My most important challenge was the integration with webpack to be able to integrate all the elements in a way',
        url: tificImg,
        alternative: 'SPA page with the api of rick and morty ',
        technologies: [
          {
            altTitle: 'Html5',
            classIcon: 'Html',
          },
          {
            altTitle: 'Css3',
            classIcon: 'Css',
          },
          {
            altTitle: 'JavaScript',
            classIcon: 'Js',
          },
          {
            altTitle: 'Webpack',
            classIcon: 'webpack',
          },
        ],
      },
    ]);
  }, []);
  return data;
};

export default useInitialState;
