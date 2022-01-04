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
    ]);
  }, []);
  return data;
};

export default useInitialState;
