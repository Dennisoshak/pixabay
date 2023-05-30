import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

// Defining the initial state
const initialState = {
  photos: [],
  error: null,
};

const URL = `http://localhost:8000/api/photos/?key=25540812-faf2b76d586c1787d2dd02736`;

// Create an async thunk to fetch the photos
export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async ({ category, page }) => {
    try {
      const response = await axios.get(URL, {
        params: {
          q: category,
          sort: "date",
          page: page || 1,
          perPage: 9,
        },
      });
      // Handle the recieved images data
      return response.data;
    } catch (error) {
      // Handle the error
      return error.message;
    }
  }
);
// function from the first part of the assignmemt
export const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/photos", {
      params: {
        category: "art",
        key: "25540812-faf2b76d586c1787d2dd02736",
        sort: "date",
        page: 1,
        perPage: 9,
      },
    });
    return response.data;
    // Handle the recieved images data
  } catch (error) {
    console.error("Error fetching images:", error);
    // Handle the error
  }
};

// Creating a slice for the photos
const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      console.log(action.payload.includes("status"));
      if (action.payload.includes("status")) {
        state.error = action.payload;
        console.log(state.error);
      } else {
        state.photos = action.payload;
      }
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
