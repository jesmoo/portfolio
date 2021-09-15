import React, { useState, useEffect } from 'react';
import useInitialState from '../Hooks/useInitialState';

const Preview = (props) => {
  // datos que vamos a usar
  const initialState = useInitialState();

  const [data, setData] = useState({
    loading: true,
    error: null,
    information: undefined,
  });

  //   useEffect(() => {
  //     effect;
  //     return () => {
  //       cleanup;
  //     };
  //   }, [input]);

  // obtner lo pasado por los props
  console.log(props.match.params.title);
  const datas = () => {
    //   correr hasta encontrar el llamado
    for (props.title in initialState) {
    }
  };

  return (
    <main className="container__Preview">
      <section className="Preview__text">
        <p className="text__subtitle">Proyect</p>
        <h2 className="text__title">Proyect</h2>
        <p className="text__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          expedita vitae consectetur aut aliquam harum possimus in asperiores,
          quam, vero modi sapiente, atque ipsum nesciunt architecto. Alias ab
          facilis expedita?
        </p>
        <p className="text__justText">Se utilizo </p>
        <section className="tecnologies"></section>
      </section>
      <section className="Preview__img">
        <img src="" alt="" />
      </section>
    </main>
  );
};

export default Preview;
