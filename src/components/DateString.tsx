import React from 'react';

type DateStringProps = {
  timestamp: number;
};

const DateString = ({ timestamp }: DateStringProps) => {
  if (!timestamp) {
    return null;
  }
  const date = new Date(timestamp);
  return <span style={{ color: '#aaa' }}>{date.toLocaleString()}</span>;
};

export default DateString;
