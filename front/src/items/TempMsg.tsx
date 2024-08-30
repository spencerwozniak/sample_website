import React, { useEffect } from 'react';

interface TempMsgProps {
  message: string;
  clearMessage: () => void;
  duration?: number;  // Optional duration prop to control display time
  error?: boolean;  // Optional prop to indicate if the message is an error
}

const TempMsg: React.FC<TempMsgProps> = ({ message, clearMessage, duration = 5000, error = false }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      clearMessage();
    }, duration);  // Use the duration prop or default to 5000 ms

    return () => clearTimeout(timer);
  }, [message, clearMessage, duration]);  // Include duration in dependency array

  return message ? <p style={{ color: error ? 'red' : 'black' }}>{message}</p> : null;
}

export default TempMsg;