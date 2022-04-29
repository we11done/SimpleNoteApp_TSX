import React from 'react';
import { Link } from 'react-router-dom';

type SidebarProps = {
  children: React.ReactNode;
};

type SidebarBackButtonProps = {
  to: string;
};

const style: React.CSSProperties = {
  width: '200px',
  height: '100%',
  border: 'solid 1px #ccc',
  marginRight: '10px',
  borderRadius: '4px',
};

const Sidebar = ({ children }: SidebarProps) => (
  <aside style={style}>{children}</aside>
);

export default Sidebar;

export const SidebarTitle = ({ children }: SidebarProps) => (
  <h1 style={{ padding: '0 10px' }}>{children}</h1>
);

export const SidebarBackButton = ({ to }: SidebarBackButtonProps) => (
  <Link
    style={{
      textDecoration: 'none',
      fontSize: '24px',
      padding: '10px',
      display: 'block',
    }}
    to={to}
  >
    {'<'}
  </Link>
);
