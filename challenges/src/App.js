import logo from './logo.svg';
import './App.css';
import {FirstApp} from './Components/FirstApp'
import { Counter } from './Components/Button';
import { AddCategory, Categories } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
import { GifExpertApp } from './GiftExpertApp';


function App() {
  return (
    <>
    {/* <FirstApp></FirstApp>
    <Counter sum={0}></Counter> */}
    
    <GifExpertApp></GifExpertApp>
    </>

  );
}

export default App;
