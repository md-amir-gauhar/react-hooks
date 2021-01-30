import React, { useContext } from 'react';
import { userContext } from '../../App';

const ComponentC = () => {
  const user = useContext(userContext);
  return <div>{user}</div>;
};

export default ComponentC;
