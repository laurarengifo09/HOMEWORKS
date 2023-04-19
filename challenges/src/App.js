import { Provider } from "react-redux";
import { store } from "./Components/Challenge14/store/store";
import { Routes } from "react-router";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
