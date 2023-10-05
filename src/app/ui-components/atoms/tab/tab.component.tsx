import React from 'react';

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[] | boolean;
}
export const Tab: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Tab;
