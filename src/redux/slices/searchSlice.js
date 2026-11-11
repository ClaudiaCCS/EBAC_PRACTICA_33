import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Acción asíncrona para buscar álbumes por artista
export const fetchSongs = createAsyncThunk(
    'search/fetchSongs',
    async (artist, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${artist}`
            )

            return response.data.album || [];
        } catch (error) {
            return rejectWithValue(
                'Ocurrió un error al buscar los álbumes'
            )
        }
    }
);

const initialState = {
    results: [],
    loading: false,
    error: null
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        resetResults: (state) => {
            state.results = []
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSongs.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchSongs.fulfilled, (state, action) => {
                state.loading = false
                state.results = action.payload
            })
            .addCase(fetchSongs.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || 'Error al realizar la búsqueda'
            })
    }
})

export const { resetResults } = searchSlice.actions
export default searchSlice.reducer