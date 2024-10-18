import {configureStore} from '@reduxjs/toolkit';
import recipiSlice from './recipiSlice';

const store = configureStore({
    reducer: {
        recipies: recipiSlice,
    }
});

export default store;