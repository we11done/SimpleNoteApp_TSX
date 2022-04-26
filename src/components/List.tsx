import React from 'react';

type ListProps = {
  children: React.ReactNode;
  first?: boolean;
};

export const List = ({ children }: ListProps) => (
  <ul style={{ listStyle: 'none', paddingLeft: '0' }}>{children}</ul>
);

export const ListItem = ({ children, first }: ListProps) => (
  <li
    style={{
      padding: '15px',
      borderBottom: '1px solid #ddd',
      borderTop: first ? '1px solid #ddd' : 'none',
    }}
  >
    {children}
  </li>
);
