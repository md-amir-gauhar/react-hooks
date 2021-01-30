import { createContext } from 'react';
import './App.css';
// import ComponentA from './components/useContext/ComponentA';
import CounterOne from './components/useReducer/CounterOne';

// export const userContext = createContext();
function App() {
  return (
    <div className="App">
      {/* <userContext.Provider value={'Md Amir Gauhar'}>
        <ComponentA />
      </userContext.Provider> */}
      <CounterOne />
    </div>
  );
}

export default App;
