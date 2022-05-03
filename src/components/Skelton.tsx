import React from 'react';

type Props = {
  style?: React.CSSProperties;
};

const Skelton = ({ style }: Props) => {
  const bar = (width: string) => (
    <div
      style={{
        width,
        height: '13px',
        background: '#dddd',
        marginBottom: '8px',
        borderRadius: '2px',
      }}
    />
  );
  return (
    <div style={style}>
      {bar('90%')}
      {bar('50%')}
      {bar('80%')}
    </div>
  );
};

export default Skelton;
