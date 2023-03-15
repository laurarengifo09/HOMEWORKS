import logo from './logo.svg';
import './App.css';
import {FirstApp} from './Components/FirstApp'
import { Button, Counter } from './Components/Button';
import { AddCategory, Categories } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
import { GifExpertApp } from './GiftExpertApp';
import { MultipleCustomHooks } from './Components/MultipleCustomHooks';
import { Memorize } from './Components/Memorize';
import { Father } from './Components/Father';


function App() {
  return (
    <>
    {/* <FirstApp></FirstApp>
    <Counter sum={0}></Counter> */}
    {/* <Button></Button> */}
    {/* <GifExpertApp></GifExpertApp> */}
    <Father></Father>
    </>

  );
}

export default App;
