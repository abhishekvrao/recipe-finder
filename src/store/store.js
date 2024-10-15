import {configureStore} from '@reduxjs/toolkit';
import recipiSlice from './recipiSlice';

const store = configureStore({
    reducer: {
        recipiSlice: recipiSlice,
    }
});

export default store;