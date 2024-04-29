import React from 'react';

interface Props {
  children: React.ReactNode;
  path?: string;
}

const BodyOnlyLayout: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default BodyOnlyLayout;
