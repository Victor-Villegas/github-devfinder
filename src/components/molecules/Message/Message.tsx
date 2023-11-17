import React, { FC, PropsWithChildren } from 'react';
import './Message.css';
import classNames from 'classnames';

interface Props {
  variant: 'error' | 'warning' | 'success';
}

const Message: FC<PropsWithChildren<Props>> = ({ children, variant }) => {
  return <div className={classNames('message', variant)}>{children}</div>;
};

export default Message;
