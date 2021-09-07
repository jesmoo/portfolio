import React from 'react';

const Tecno = ({ altTitle, classIcon }) => {
  return (
    <div className="technologies--item" title={altTitle}>
      <span className={`technologies--itemIcon ${classIcon}`}></span>
    </div>
  );
};

export default Tecno;
