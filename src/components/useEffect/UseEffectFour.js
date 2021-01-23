// useEffect with cleanup

import React, { useState, useEffect } from 'react';
import UseEffectThree from './UseEffectThree';

const UseEffectFour = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <UseEffectThree />}
    </div>
  );
};

export default UseEffectFour;
