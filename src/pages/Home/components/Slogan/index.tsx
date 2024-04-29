import React from 'react';
import sloganSrc from 'src/assets/images/slogan.png';
import './style.scss';

type Props = {};

const Slogan: React.FC<Props> = () => {
  return (
    <section id="slogan">
      <div className="slogan-main">
        <img src={sloganSrc} alt="slogan" />
      </div>
    </section>
  );
};

export default Slogan;
