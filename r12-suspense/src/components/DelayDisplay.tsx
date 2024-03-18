import React, { useState, useEffect } from 'react';

const DelayDisplay: React.FC = () => {
    const [message, setMessage] = useState<string | null>("x");
    const sleep = (ms: number) => 
        new Promise(resolve => setTimeout(resolve, ms));
    useEffect(() => {
        sleep(4000).then(() => setMessage('Hello, world!'));
    }, []);
    return (
        <p>{message}</p>
    );
  }

export default DelayDisplay;