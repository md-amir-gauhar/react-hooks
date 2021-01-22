import './App.css';
import HooksCounter from './components/useState/HooksCounter';
import HooksCounterTwo from './components/useState/HooksCounterTwo';
import HookCounterThree from './components/useState/HookCounterThree';

function App() {
  return (
    <div className="App">
      <HooksCounter />
      <HooksCounterTwo />
      <HookCounterThree />
    </div>
  );
}

export default App;
