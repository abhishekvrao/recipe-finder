import {createSlice, createAsyncThunk} from 'react';
import axios from 'axios';

const SPOONACULAR_API_KEY = '';
const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}`;

export const fetchRecipes = createAsyncThunk('recipe/fetchRecipes', 
    async (params) => {
        const responses = await axios.get(API_URL, {params});
        return responses.data.results;
    }
);

const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        recipes: [],
        filter: {
            ingridient: '',
            diet: '',
            cuisine: '',
        },
        status: 'idle',
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = {...state.filter, ...action.payload};
        
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRecipes.pending, (state) => {
            state.status = "Loading";
        })
        .addCase(fetchRecipes.fullFilled, (state, action) => {
            state.recipes = action.payload;
            state.status = "succeed";
        
        })
        .addCase(fetchRecipes.rejected, (state) => {
            state.status = "failed";
        })
    }
}
);

export const {setFilter} = recipeSlice.action;
export default recipeSlice.reducers;