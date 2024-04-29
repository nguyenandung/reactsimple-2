import { Spin } from 'antd';
import React from 'react';
import './style.scss';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <Spin />
    </div>
  );
};

export default Loading;
