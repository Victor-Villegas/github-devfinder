import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';
import classNames from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'text' | 'contained' | 'outlined';
}

const Button = ({ children, ...props }: Props) => {
  return React.createElement(
    'button',
    {
      ...props,
      className: classNames(`variant-${props.variant}`, props.className),
    },
    children
  );
};

export default Button;
