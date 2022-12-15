import React from 'react';
import './Message.scss';

function Message({ children, type, className }) {
  return (
    <p className={`message ${className} ${type === 'error' ? 'error' : ''}`}>
      {children}
    </p>
  );
}

export default Message;
