import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SPOONACULAR_API_KEY = "519f3a9142f347fbb2b8e35f29991f3d";
const API_URL = "https://api.spoonacular.com/recipes/complexSearch";

export const fetchRecipes = createAsyncThunk(
  "recipe/fetchRecipes",
  async (_, { getState }) => {
    const { filter } = getState().recipies;
    const params = {
      cuisine: filter.cuisine,
      diet: filter.diet,
      ingridient: filter.ingridient,
      apiKey: SPOONACULAR_API_KEY,
    };
    const responses = await axios.get(API_URL, { params });
    return responses.data.results;
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    filter: {
      ingridient: "",
      diet: "",
      cuisine: "",
    },
    status: "idle",
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.status = "succeed";
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setFilter } = recipeSlice.actions;
export default recipeSlice.reducer;
