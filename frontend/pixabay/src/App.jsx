import Photos from "./components/Photos";
import { Provider } from 'react-redux';
import axios from 'axios' 
import store from './store';
import { Button } from "@mui/material";
import "./App.css";

function App() {
  


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/photos', {
        params: {
          key: '25540812-faf2b76d586c1787d2dd02736',
          sort: 'date',
          page: 1,
          perPage: 9,
        },
      });
      const images = response.data;
      console.log(images);
      // Handle the retrieved images data
    } catch (error) {
      console.error('Error fetching images:', error);
      // Handle the error
    }
  };
    

//provide the application with the global state 
  return (
    <Provider store={store}>
      <div className="App">
      <Photos  />
      <Button onClick={fetchData}>Fetch</Button>
      </div>
    </Provider>
  );
}

export default App;
