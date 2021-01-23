// The useEffect() hook is called after every single render.
// In some cases applying the effect after every render might create some performance problem. So we need a way to conditionally run an effect from the functional component.

// Conditionally run effects...

import React, { useState, useEffect } from 'react';

const UseEffectTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  //useEffect() will run each time the component renders...
  useEffect(() => {
    console.log('updating document title');
    document.title = `clicked on count ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};

export default UseEffectTwo;
