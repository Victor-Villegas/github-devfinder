import React, { FC, PropsWithChildren } from 'react';
import './Icon.css';
import classNames from 'classnames';

interface Props extends PropsWithChildren {
  size: number;
  className?: string;
}

const Icon: FC<Props> = ({ children, size, className }) => {
  return (
    <div
      style={{ width: `${size}rem`, height: `${size}rem` }}
      className={classNames('icon-container', className)}
    >
      {children}
    </div>
  );
};

export default Icon;
