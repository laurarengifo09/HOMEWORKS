import logo from './logo.svg';
import './App.css';
import {FirstApp} from './Components/FirstApp'
import { Counter } from './Components/Button';

function App() {
  return (
    <>
    <FirstApp></FirstApp>
    <Counter sum={0}></Counter>
    </>

  );
}

export default App;
