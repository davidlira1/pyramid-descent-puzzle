import logo from './logo.svg';
import './App.css';
import Pyramid from './components/pyramid/pyramid.component'

function App() {
  return (
    <div className="App">
      <Pyramid pyramidValues={[[2],[4,3],[3,2,6],[2,9,5,2],[10,5,2,15,5]]}/>
    </div>
  );
}

export default App;
