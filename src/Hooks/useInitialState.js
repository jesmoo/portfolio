import { useState, useEffect } from 'react';
const useInitialState = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        titles: 'What you get',
        Skills: [
          {
            title: 'Responsive',
            description:
              'Adapt to the size of each device, allowing an adequate user experience using the mobile first methodology.',
          },
          {
            title: 'version control',
            description:
              'I log changes made to source code of projects via git to store them in GitHub.',
          },
          {
            title: 'Teamwork',
            description:
              'I like working in a team as it multiplies productivity and contributes to everyone`s development.',
          },
          {
            title: 'Resolutive',
            description:
              'I do not stop in the search for information to reach the solution of the problem that is at that moment in code.',
          },
          {
            title: 'React',
            description:
              'I work with Javascript library to create single page user interfaces. ',
          },
        ],
      },
      {
        proyects: [
          {
            title: 'Flags',
            description:
              'Page that shows the content of each country, plus you can see in detail each one. You can search by name, you can filter by continent.',
            url: 'https://www.flags.jesmoo.xyz/',
            icons: [
              { icon: 'github' },
              { icon: 'react' },
              { icon: 'wsl' },
              { icon: 'javaScript' },
            ],
          },
          {
            title: 'Rick and mort',
            description:
              'Displays the content of Rick and Morty characters through its API by obtaining the data with the REST protocol and displaying it with ReactJS.',
            url: 'https://www.rickandmorty.jesmoo.xyz/',
            icons: [
              { icon: 'github' },
              { icon: 'react' },
              { icon: 'wsl' },
              { icon: 'javaScript' },
            ],
          },
          {
            title: 'Rock, Paper, Scissors',
            description:
              'The user chooses an option to play against the computer, which also chooses an option randomly by a class of JavaScript.',
            url: 'https://www.rockpaperscissors.jesmoo.xyz/',
            icons: [
              { icon: 'github' },
              { icon: 'react' },
              { icon: 'wsl' },
              { icon: 'javaScript' },
            ],
          },
          {
            title: 'Simon Says',
            description:
              'Game consisting of levels, the more levels the more patterns you have to follow to complete the challenge, all through a JavaScript class.',
            url: 'https://www.simonsay.jesmoo.xyz/',
            icons: [
              { icon: 'github' },
              { icon: 'react' },
              { icon: 'wsl' },
              { icon: 'javaScript' },
            ],
          },
          {
            title: 'Tip Calculator',
            description:
              'Calculate what you will pay at a restaurant, from the cost of the meal, the tip and even if they split the bill. Using JavaScript and hooks.',
            url: 'https://www.simonsay.jesmoo.xyz/',
            icons: [
              { icon: 'github' },
              { icon: 'react' },
              { icon: 'wsl' },
              { icon: 'javaScript' },
            ],
          },
        ],
      },
    ]);
  }, []);
  return data;
};

export default useInitialState;
