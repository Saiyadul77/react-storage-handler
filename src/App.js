import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';
import Display from './components/Display/Display';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <Display></Display>
    </div>
  );
}

export default App;
