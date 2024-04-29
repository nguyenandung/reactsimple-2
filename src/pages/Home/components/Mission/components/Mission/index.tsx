import React from 'react';
import { ValueT } from '../../index';
import './style.scss';

type Props = {
  value: ValueT;
};

const MissionC: React.FC<Props> = ({ value }) => {
  return (
    <div className="mission-item">
      <h3 className="mission-item__title">{value.title}</h3>
      <p className="mission-item__description">{value.description}</p>
      <div className={`mission-item__thumb-wrap ${(value.id === 2 || value.id === 4) && 'mission-item__thumb-size'}`}>
        <div className="mission-item__thumb">
          {/* <span>{value.id}</span> */}
          <img src={value.thumb} alt="mission" />
        </div>
      </div>
    </div>
  );
};

export default MissionC;
