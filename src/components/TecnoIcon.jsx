import React from 'react';

const TecnoIcon = ({ icon }) => {
  return (
    <div className="container__iconTecno" title={icon}>
      <span className={`${icon}-proyects iconTecno`} />
    </div>
  );
};

export default TecnoIcon;
