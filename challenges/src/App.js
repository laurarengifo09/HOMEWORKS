import { Provider } from "react-redux";
import { store } from "./Components/Challenge14/store/store";
import { Registro } from "./Components/Registro";

function App() {
  return (
    <Provider store={store}>
      <Registro></Registro>
    </Provider>
  );
}

export default App;
