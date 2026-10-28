import Album from '../Album';
import { useState } from 'react';

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
} from './styles';

export default function SearchResults({
    songs,
    addLibrary,
    onSearch,
    isLoading,
    error
}) {
    const [artist, setArtist] = useState('');

    const handleSearch = () => {
        onSearch(artist);
    };

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
                                handleSearch();
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
                            Buscando álbumes...
                        </StatusMessage>
                    )}

                    {error && (
                        <StatusMessage $status="error">
                            No se pudieron cargar los álbumes.
                        </StatusMessage>
                    )}

                    {!isLoading && !error &&
                        songs.map((album) => (
                            <Album
                                key={album.idAlbum}
                                album={album}
                                addLibrary={addLibrary}
                            />
                        ))}

                    {!isLoading && !error &&
                        songs.length === 0 && (
                            <StatusMessage>
                                No hay álbumes para mostrar.
                            </StatusMessage>
                        )}
                </AlbumList>
            </SearchLibrary>
        </SearchContainer>
    );
}