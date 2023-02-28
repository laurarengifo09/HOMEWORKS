import logo from './logo.svg';
import './App.css';
import {FirstApp} from './Components/FirstApp'
import { Counter } from './Components/Button';
import { Categories } from './Components/Categories';

function App() {
  return (
    <>
    {/* <FirstApp></FirstApp>
    <Counter sum={0}></Counter> */}
    <Categories></Categories>
    </>

  );
}

export default App;
