import React, { HTMLAttributes } from 'react';
import './Card.css';
import classNames from 'classnames';

const Card = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return React.createElement(
    'div',
    {
      ...props,
      className: classNames('card', props.className),
    },
    children
  );
};

export default Card;
