import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pokemon: ''
}

const pokeSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemon: (state, action) => {
            state.pokemon = action.payload;
        }
    }
})

export const selectPokemon = (state) => state.pokemon.pokemon;

export const { setPokemon } = pokeSlice.actions;

export default pokeSlice.reducer;