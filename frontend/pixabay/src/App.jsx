import Photos from "./components/Photos";
import { Provider } from 'react-redux';
import axios from 'axios' 
import store from './store';
import { Button } from "@mui/material";
import "./App.css";

function App() {
  


  

//provide the application with the global state 
  return (
    <Provider store={store}>
      <div className="App">
      <Photos  />
      </div>
    </Provider>
  );
}

export default App;
