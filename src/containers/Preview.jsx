import React, { useState, useEffect } from 'react';
import useInitialState from '../Hooks/useInitialState';
import Tecno from '../components/Tecno';

import '../styles/containers/Preview.css';

const Preview = (props) => {
  // datos que vamos a usar
  const initialState = useInitialState();

  const [data, setData] = useState({
    loading: true,
    error: null,
    information: initialState,
  });
  let titleProps = props.match.params.title;
  useEffect(() => {
    // La idea principal es llamarlo y que se guarde de manera "natural"
    // const datas = async () => {
    //   setData({ loading: true, error: false });
    //   console.log('datas adentro');
    //   const asy = () => {
    //     console.log('asyn');
    //     for (let i = 0; i < InitialState.length; i++) {
    //       console.log('a');
    //       if (titleProps === InitialState[i].title) {
    //         console.log(InitialState[i].title);
    //         console.log(data);
    //         return InitialState[i];
    //       }
    //     }
    //   };
    //   setData({ loading: false, information: await asy() });
    // };
    // console.log('adentro');
    // // return () => {
    // //   cleanup;
    // // };
    // datas();
  }, []);

  console.log(
    'Por alguna razon necesito este console para que funcione mi proyecto, estaria muy agradecido si me ayudas a corregirlo',
    initialState
  );

  return (
    <>
      {initialState &&
        initialState.map((item) =>
          item.title === titleProps ? (
            <main className="container__Preview">
              <section className="Preview__text" key={item.title}>
                <p className="text__subtitle">data</p>
                <h2 className="text__title">{item && item.title}</h2>
                <p className="text__description">{item && item.description}</p>
                <p className="text__justText">Se utilizo </p>
                <section className="tecnologies">
                  {console.log(item.technologies)}
                  {item &&
                    item.allTechnologies.map((subitem) => (
                      <Tecno key={subitem.id} {...subitem} />
                    ))}
                </section>
              </section>
              <section className="Preview__img">
                <img src="" alt="" />
              </section>
            </main>
          ) : null
        )}
    </>
  );
};
export default Preview;
