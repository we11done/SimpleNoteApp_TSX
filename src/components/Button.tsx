import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  to?: string;
  primary?: boolean;
  children?: React.ReactNode;
  onClick?(): void;
  disabled?: boolean;
};

const Button = (props: ButtonProps) => {
  const { to, children, primary, onClick, disabled } = props;
  const isLink = !!to;

  const renderButton = () => {
    return (
      <button
        disabled={disabled}
        style={buttonStyle(!!primary)}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  const renderLink = () => {
    return !to ? (
      <div></div>
    ) : (
      <Link
        style={{ ...buttonStyle(!!primary), textDecoration: 'none' }}
        to={to}
      >
        {children}
      </Link>
    );
  };

  return isLink ? renderLink() : renderButton();
};

const buttonStyle = (primary: boolean) => {
  return {
    display: 'inline-block',
    border: 'solid 1px #ccc',
    borderColor: primary ? '#2e6da4' : '#ccc',
    borderRadius: '4px',
    margin: '0 10px 10px 0',
    padding: '8px 16px',
    width: 'auto',
    overflow: 'visible',
    background: primary ? '#337ab7' : 'transparent',
    color: primary ? '#fff' : 'inherit',
  };
};

export default Button;
