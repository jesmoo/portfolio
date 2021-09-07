import React from 'react';
import MainItems from './MainItems';

import useInitialState from '../Hooks/useInitialState';

const MainElements = () => {
  const initialState = useInitialState();

  return (
    <section className="main--elements" id="work">
      {initialState &&
        initialState.map((item) => <MainItems key={item.title} {...item} />)}
    </section>
  );
};

export default MainElements;
