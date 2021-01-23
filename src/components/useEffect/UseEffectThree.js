// Run effects only 🚔

import React, { useState, useEffect } from 'react';

const UseEffectThree = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log('useEffect Called');
    window.addEventListener('mousemove', (e) => {
      console.log('Mouse Event');
      setX(e.clientX);
      setY(e.clientY);
    });
  }, []);
  return (
    <div>
      Hooks X-{x} Y-{y}
    </div>
  );
};

export default UseEffectThree;
