import logo from './logo.svg';
import './index.css';
import { TodoApp } from './Components/Challenge 10/TodoApp';
import { MainApp } from './Components/pages/MainApp';
import { Small } from './Components/Small';
import { Memorize } from './Components/Memorize';
import { NavComponent } from './Components/Challenge11/NavComponents';
// import { NavComponent } from './Components/NavComponent';


function App() {
  return (
    <div >
      <>
        {/* <FirstApp></FirstApp>
        <Counter sum={0}></Counter> */}
        {/* <Button></Button> */}
        {/* <GifExpertApp></GifExpertApp> */}
        <NavComponent></NavComponent>
      </>
    </div>
  );
}


export default App;
