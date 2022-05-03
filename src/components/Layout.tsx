import React from 'react';
import DialogContainer from '../containers/Dialog';

type LayoutProps = {
  children: React.ReactNode;
};

const style: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  height: '500px',
  margin: '30px 20px',
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <DialogContainer />
      <div style={style}>{children}</div>
    </>
  );
};

export default Layout;
