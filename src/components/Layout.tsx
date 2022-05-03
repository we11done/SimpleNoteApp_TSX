import React from 'react';
import DialogContainer from '../containers/Dialog';
import ToastListContainer from '../containers/ToastList';

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
      <ToastListContainer />
      <div style={style}>{children}</div>
    </>
  );
};

export default Layout;
