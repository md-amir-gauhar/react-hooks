import './App.css';
import HooksCounter from './components/useState/HooksCounter';
import HooksCounterTwo from './components/useState/HooksCounterTwo';
import UseStateWithObject from './components/useState/UseStateWithObject';
import UseStateWithArray from './components/useState/UseStateWithArray';

function App() {
  return (
    <div className="App">
      <HooksCounter />
      <HooksCounterTwo />
      <UseStateWithObject />
      <UseStateWithArray />
    </div>
  );
}

export default App;
