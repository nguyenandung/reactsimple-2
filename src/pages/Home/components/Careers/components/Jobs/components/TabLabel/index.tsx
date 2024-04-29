import React, { ReactNode } from 'react';
import './style.scss';

type Props = {
  icon: ReactNode;
  title: string;
  quantity: number;
};

const TabLabel: React.FC<Props> = ({ icon, title, quantity }) => {
  return (
    <button className="tab__label">
      {icon}
      <span className="tab__label__title">{title}</span>
      <span className="tab__label__quantity">{quantity}</span>
    </button>
  );
};

export default TabLabel;
