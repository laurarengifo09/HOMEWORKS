import logo from './logo.svg';
import './index.css';
import { TodoApp } from './Components/Challenge 10/TodoApp';
// import { MainApp } from './Components/pages/MainApp';
import { Small } from './Components/Small';
import { Memorize } from './Components/Memorize';
import { NavComponent } from './Components/Challenge11/NavComponents';
import { UserProvider }from './Context/UserProvider'

function App() {
  return (
    <div >
      <UserProvider>
        <NavComponent/>
      </UserProvider>
    </div>
  );
}


export default App;
