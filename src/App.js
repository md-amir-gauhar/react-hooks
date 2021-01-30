import { createContext } from 'react';
import './App.css';
import ComponentA from './components/useContext/ComponentA';

export const userContext = createContext();
function App() {
  return (
    <div className="App">
      <userContext.Provider value={'Md Amir Gauhar'}>
        <ComponentA />
      </userContext.Provider>
    </div>
  );
}

export default App;
