import './App.css';
import HooksCounter from './components/useState/HooksCounter';
import HooksCounterTwo from './components/useState/HooksCounterTwo';
import UseStateWithObject from './components/useState/UseStateWithObject';

function App() {
  return (
    <div className="App">
      <HooksCounter />
      <HooksCounterTwo />
      <UseStateWithObject />
    </div>
  );
}

export default App;
