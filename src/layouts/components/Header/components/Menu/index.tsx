import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../index';
import './style.scss';

type Props = {
  value: Tab;
  tabActive: Tab;
  checkTabRedirect: any;
};

const Menu: React.FC<Props> = ({ value, tabActive, checkTabRedirect }) => {
  return (
    <Link
      to={`/${checkTabRedirect(value)}`}
      className={`menu-item ${value.id === tabActive?.id && 'menu-item__active'}`}
    >
      <div className="menu-icon">{value.icon}</div>
      <span className="menu-title">{value.title}</span>
    </Link>
  );
};

export default Menu;
