import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

const style: React.CSSProperties = {
  flex: 1,
  overflow: 'auto',
  border: 'solid 1px #ccc',
  borderRadius: '4px',
};

const Main = ({ children }: MainProps) => {
  return <main style={style}>{children}</main>;
};

export default Main;
