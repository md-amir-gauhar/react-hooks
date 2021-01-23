import React, { useState, useEffect } from 'react';

const UseEffectOne = () => {
  const [count, setCount] = useState(0);

  //useEffect() will run each time the component renders...
  useEffect(() => {
    document.title = `clicked on count ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};

export default UseEffectOne;
