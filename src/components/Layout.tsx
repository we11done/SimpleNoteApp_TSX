import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const style: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  margin: '10px',
};

const Layout = ({ children }: LayoutProps) => {
  return <div style={style}>{children}</div>;
};

export default Layout;
