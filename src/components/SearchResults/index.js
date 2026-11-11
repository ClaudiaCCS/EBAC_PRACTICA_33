
import Album from '../Album'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addSong } from '../../redux/slices/librarySlice'
import { fetchSongs } from '../../redux/slices/searchSlice'

import {
    SearchContainer,
    SearchLibrary,
    SearchHeader,
    SearchTitle,
    SearchBar,
    SearchLabel,
    SearchInput,
    SearchButton,
    SearchIcon,
    AlbumList,
    StatusMessage
} from './styles'

export default function SearchResults() {

    const [artist, setArtist] = useState('')

    const dispatch = useDispatch()

    // datos del estado global de Redux
    const { results: songs, loading: isLoading, error } =
        useSelector(state => state.search)

    const handleSearch = () => {
        if (artist.trim()) {
            dispatch(fetchSongs(artist.trim()))
        }
    }

    // Agregamos el álbum a nuestra biblioteca
    const handleAddSong = (album) => {
        dispatch(addSong(album))
    }

    return (
        <SearchContainer>
            <SearchLibrary>
                <SearchHeader>
                    <div>
                        <SearchTitle>
                            Buscador de canciones
                        </SearchTitle>
                    </div>
                </SearchHeader>

                <SearchBar>
                    <SearchLabel htmlFor="main__izquierda--buscarcancion">
                        Nombre del artista:
                    </SearchLabel>

                    <SearchInput
                        id="main__izquierda--buscarcancion"
                        type="text"
                        placeholder="Buscar artista"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch()
                            }
                        }}
                    />

                    <SearchButton
                        type="button"
                        onClick={handleSearch}
                        aria-label="Buscar artista"
                    >
                        <SearchIcon
                            src={require('../../img/icon_search.svg').default}
                            alt="Buscar"
                        />
                    </SearchButton>
                </SearchBar>

                <AlbumList>

                    {isLoading && (
                        <StatusMessage>
                            Cargando...
                        </StatusMessage>
                    )}

                    {error && (
                        <StatusMessage $status="error">
                            {error}
                            <button onClick={handleSearch}>
                                Reintentar
                            </button>
                        </StatusMessage>
                    )}

                    {!isLoading && !error && songs.map((album) => (
                        <Album
                            key={album.idAlbum}
                            album={album}
                            onAddSong={handleAddSong}
                        />
                    ))}

                    {!isLoading && !error && songs.length === 0 && (
                        <StatusMessage>
                            No hay álbumes para mostrar.
                        </StatusMessage>
                    )}

                </AlbumList>
            </SearchLibrary>
        </SearchContainer>
    )
}
