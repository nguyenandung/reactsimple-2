import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

const GlobalStyles: React.FC<any> = ({ children }) => {
  return children;
};

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired
};

export default GlobalStyles;
