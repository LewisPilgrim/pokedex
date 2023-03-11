import { configureStore } from '@reduxjs/toolkit';
import pokeReducer from '../components/pokemon/PokeSlice.js';

export const store = configureStore({
    reducer: {
        pokemon: pokeReducer,
    }
})