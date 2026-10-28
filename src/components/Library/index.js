

import LibrarySong from '../LibrarySong/index';

import {
    LibraryContainer,
    LibraryCard,
    LibraryHeader,
    LibraryIcon,
    LibraryTitle,
    LibraryList,
    EmptyLibraryMessage
} from './styles';

function Library({ dataLibrary, removeLibrary }) {
    return (
        <LibraryContainer>
            <LibraryCard>
                <LibraryHeader>
                    <div>
                        <LibraryIcon
                            src={require('../../img/icon_list.svg').default}
                            alt="Icono de lista"
                        />

                        <LibraryTitle>
                            Tu biblioteca
                        </LibraryTitle>
                    </div>
                </LibraryHeader>

                <LibraryList>
                    {dataLibrary.length > 0 ? (
                        dataLibrary.map((album) => (
                            <LibrarySong
                                key={album.idAlbum}
                                album={album}
                                removeLibrary={removeLibrary}
                            />
                        ))
                    ) : (
                        <EmptyLibraryMessage>
                            Tu biblioteca está vacía. ¡Agrega tus álbumes favoritos!
                        </EmptyLibraryMessage>
                    )}
                </LibraryList>
            </LibraryCard>
        </LibraryContainer>
    );
}

export default Library;
