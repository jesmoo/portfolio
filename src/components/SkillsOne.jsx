import React from 'react'

const SkillsOne = ({title, description}) => {
    return (
      <div className="container__SkillsOne">
        <h2 className="SkillsOne__title">{title}</h2>
        <p className="SkillsOne__description">{description}</p>
      </div>
    );
}

export default SkillsOne
