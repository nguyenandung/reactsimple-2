import React from 'react';
import brandSrc from 'src/assets/images/brand.png';
import './style.scss';

const Brand: React.FC = () => {
  return (
    <div id="brand">
      <div className="brand__main">
        <img src={brandSrc} alt="brand" />
      </div>
    </div>
  );
};

export default Brand;
