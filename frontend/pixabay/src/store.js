import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Defining the initial state
const initialState = {
  photos: [],
  error: null,
};

const URL = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=`;

// Create an async thunk to fetch the photos 
export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async (category) => {
  try {
    const response = await axios.get(`${URL}${category}`);
    return response.data.hits;
  } catch (error) {
    throw Error('Failed to fetch');
  }
});

// Creating a slice for the photos
const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchPhotos.fulfilled, (state, action) => {
        console.log(action.payload)
        state.photos = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});


// Create the Redux store using configureStore from Redux Toolkit
const store = configureStore({
  reducer: {
    photos: photosSlice.reducer,
    
  },
});

export default store;