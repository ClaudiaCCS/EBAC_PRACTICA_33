const initialState = []

const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SONG':
            if (state.some(song => song.idAlbum === action.payload.idAlbum)) {
                return state
            }
            return [...state, action.payload]

        case 'REMOVE_SONG':
            return state.filter(
                song => song.idAlbum !== action.payload
            )

        default:
            return state
    }
}

export default libraryReducer