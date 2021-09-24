import React from 'react';
import '../styles/components/Tecno.css';

const Tecno = ({ grid = '', block = '', altTitle, classIcon }) => {
  return (
    <div className={`technologies--item ${block}`} title={altTitle}>
      <span className={` technologies--itemIcon ${grid} ${classIcon}`}></span>
    </div>
  );
};

export default Tecno;
