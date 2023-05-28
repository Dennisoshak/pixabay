import Photos from "./components/Photos";
import { Provider } from 'react-redux';
import store from './store';
import "./App.css";

function App() {
  

  return (
    <Provider store={store}>
      <div className="App">
      <Photos  />
      </div>
    </Provider>
  );
}

export default App;
